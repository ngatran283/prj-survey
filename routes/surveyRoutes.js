const mongoose = require('mongoose');
const _ = require('lodash');
const { Path } = require('path-parser');
const { URL } = require('url');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');
const template = require('../services/emailTemplate/surveyTemplate');
const Survey = mongoose.model('surveys');

module.exports = (app) => {
    app.get('/api/surveys/:surveyId/:choice', requireLogin, requireCredits, async (req, res) => {
        res.send('Thanks for voting!')
    });
    app.post('/api/surveys/webhooks', (req, res) => {
        console.log(req.body);
        const p = new Path('/api/surveys/:surveyId/:choice');
        const events = _.chain(req.body)
            .map(({url,email})=>{
                    const match = p.test(new URL(url).pathname);
                    if(match) return {email, surveyId: match.surveyId, choice: match.choice};
                })
            .compact()
            .uniqBy('email','surveyId')
            .forEach(({surveyId,email,choice})=>{
                console.log('Search and update')
                Survey.updateOne(
                    {
                        _id: surveyId,
                        recipients:{
                            $elemMatch:{email:email, responded:false}
                        }
                    },
                    {
                        $inc:{ [choice]:1 },
                        $set:{'recipients.$.responded':true},
                        lastResponded: new Date()
                    }
                ).exec();
            })
            .values();
        res.send({});
    });
    app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
        const {title, subject, body, recipients} = req.body;
        const survey = new Survey({
            title,
            body,
            subject,
            recipients: recipients.split(',').map(email => ({email:email.trim()})),
            _user:req.user.id,
            dateSent: Date.now()
        });
        //send email
        const mailer = new Mailer(survey,template(survey));
        try {
            await mailer.send();
            await survey.save();
            req.user.credits -=1;
            const user = await req.user.save();
            res.send(user);
        }catch (err) {
            res.status(422).send(err);
        }

    });
    app.get('/api/surveys', requireLogin, async (req, res) => {
        const surveys = await Survey.find({_user: req.user.id}).select({recipients:false});
        res.send(surveys);
    });
}
