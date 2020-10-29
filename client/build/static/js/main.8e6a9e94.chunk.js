(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{109:function(e,t,n){e.exports=n(234)},234:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"fetchUser",(function(){return O})),n.d(a,"handleToken",(function(){return j})),n.d(a,"sendSurveys",(function(){return w})),n.d(a,"fetchSurveys",(function(){return k}));n(110);var r=n(0),c=n.n(r),l=n(52),u=n.n(l),i=n(14),s=n(15),o=n(17),m=n(16),p=n(22),f=n(7),v=n(8),d=n(23),h=n.n(d),y=n(40),b=n(41),E=n.n(b),O=function(){return function(){var e=Object(y.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("/api/current_user");case 2:n=e.sent,t({type:"fetch_user",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=function(e){return function(){var t=Object(y.a)(h.a.mark((function t(n){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.post("/api/stripe",e);case 2:a=t.sent,n({type:"fetch_user",payload:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e,t){return function(){var n=Object(y.a)(h.a.mark((function n(a){var r;return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,E.a.post("/api/surveys",e);case 2:r=n.sent,t.push("/surveys"),a({type:"fetch_user",payload:r.data});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},k=function(){return function(){var e=Object(y.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("/api/surveys");case 2:n=e.sent,t({type:"fetch_surveys",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},g=n(106),N=n.n(g),S=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this;return c.a.createElement(N.a,{name:"Emaily",description:"$5 for 5 email credits",amount:500,token:function(t){return e.props.handleToken(t)},stripeKey:"pk_test_51HX0nCBfeMcQ1MlsXqnNt50pnOLjAtaZJwc2ARvO1V47Ln8Fhtpwb2s6i2Q9UaKcfaCMfHJKhlQLU5TvNIsVkZdr00hzi2wy0H"},c.a.createElement("button",{className:"btn"},"Add Credits"))}}]),n}(r.Component),x=Object(v.b)(null,a)(S),C=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"renderContent",value:function(){switch(this.props.auth){case null:return;case!1:return c.a.createElement("li",null,c.a.createElement("a",{href:"/auth/google"},"Login with google"));default:return[c.a.createElement("li",{key:"1"},c.a.createElement(x,null)),c.a.createElement("li",{key:"3",style:{margin:"0 10px"}},"Credits: ",this.props.auth.credits),c.a.createElement("li",{key:"2"},c.a.createElement("a",{href:"/api/logout"},"Logout"))]}}},{key:"render",value:function(){return c.a.createElement("nav",null,c.a.createElement("div",{className:"nav-wrapper"},c.a.createElement(p.b,{to:this.props.auth?"/surveys":"/",className:"left brand-logo"},"Emaily"),c.a.createElement("ul",{id:"nav-mobile",className:"right"},this.renderContent())))}}]),n}(r.Component);var _=Object(v.b)((function(e){return{auth:e.auth}}))(C),L=function(){return c.a.createElement("div",{style:{textAlign:"center"}},c.a.createElement("h1",null,"Emaily!"),"Collect feedback from users")},R=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchSurveys()}},{key:"renderSurveys",value:function(){return this.props.surveys.reverse().map((function(e){return c.a.createElement("div",{className:"card darken-1",key:e._id},c.a.createElement("div",{className:"card-content"},c.a.createElement("span",{className:"card-title"},e.title),c.a.createElement("p",null,e.body),c.a.createElement("p",{className:"right"},"Sent On: ",new Date(e.dateSent).toLocaleDateString())),c.a.createElement("div",{className:"card-action"},c.a.createElement("p",null,"Yes: ",e.yes),c.a.createElement("p",null,"Yes: ",e.no)))}))}},{key:"render",value:function(){return c.a.createElement("div",null,this.renderSurveys())}}]),n}(r.Component);var A=Object(v.b)((function(e){return{surveys:e.surveys}}),{fetchSurveys:k})(R),F=function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"fixed-action-btn"},c.a.createElement(p.b,{to:"/surveys/new",className:"btn-floating btn-large waves-effect waves-light red"},c.a.createElement("i",{className:"material-icons"},"add"))),c.a.createElement(A,null))},U=n(236),B=n(235),D=n(36),M=n.n(D),T=function(e){var t=e.input,n=e.label,a=e.meta,r=a.touched,l=a.error;return c.a.createElement("div",null,c.a.createElement("label",null,n),c.a.createElement("input",Object.assign({style:{marginBottom:"5px"}},t)),c.a.createElement("div",{className:"red-text",style:{marginBottom:"20px"}},r&&l))},V=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,J=[{label:"Survey Title",name:"title"},{label:"Subject Line",name:"subject"},{label:"Email Body",name:"body"},{label:"Recipient List",name:"recipients"}],Z=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"renderFields",value:function(){return M.a.map(J,(function(e){var t=e.label,n=e.name;return c.a.createElement(U.a,{key:n,type:"text",name:n,label:t,component:T})}))}},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("form",{onSubmit:this.props.handleSubmit(this.props.onSurveySubmit)},this.renderFields(),c.a.createElement(p.b,{to:"/surveys",className:"red btn-flat left white-text"},"Cancel"),c.a.createElement("button",{className:"teal btn-flat right white-text",type:"submit"},"Submit ",c.a.createElement("i",{className:"material-icons right"},"done")," ")))}}]),n}(r.Component);var q=Object(B.a)({validate:function(e){var t={};return t.recipients=function(e){var t=e.split(",").map((function(e){return e.trim()})).filter((function(e){return!V.test(e)}));if(t.length>0)return"These emails are invalid: ".concat(t)}(e.recipients||""),M.a.each(J,(function(n){var a=n.name;e[a]||(t[a]="*Required field")})),t},form:"surveyForm",destroyOnUnmount:!1})(Z);var z=Object(v.b)((function(e){return{formValues:e.form.surveyForm.values}}),a)(Object(f.e)((function(e){var t=e.onCancel,n=e.formValues,a=e.sendSurveys,r=e.history,l=M.a.map(J,(function(e){var t=e.label,a=e.name;return c.a.createElement("div",{key:"{name}"},c.a.createElement("label",null,t),c.a.createElement("div",null,n[a]))}));return c.a.createElement("div",null,c.a.createElement("h5",null,"Welcome to survey form review!"),l,c.a.createElement("button",{className:"yellow darken-3 btn-flat white-text",onClick:t},"Back"),c.a.createElement("button",{className:"green btn-flat white-text right",onClick:function(){a(n,r)}},"SEND SURVEY ",c.a.createElement("i",{className:"material-icons"},"email")))}))),H=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showReview:!1},e}return Object(s.a)(n,[{key:"renderContent",value:function(){var e=this;return this.state.showReview?c.a.createElement(z,{onCancel:function(){return e.setState({showReview:!1})}}):c.a.createElement(q,{onSurveySubmit:function(){return e.setState({showReview:!0})}})}},{key:"render",value:function(){return c.a.createElement("div",null,this.renderContent())}}]),n}(r.Component),K=Object(B.a)({form:"surveyForm"})(H),Q=function(e){Object(o.a)(n,e);var t=Object(m.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchUser()}},{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement(p.a,null,c.a.createElement("div",{className:"container"},c.a.createElement(_,null),c.a.createElement(f.a,{exact:!0,path:"/",component:L}),c.a.createElement(f.a,{exact:!0,path:"/surveys",component:F}),c.a.createElement(f.a,{path:"/surveys/new",component:K}))))}}]),n}(r.Component),Y=Object(v.b)(null,a)(Q),X=n(6),$=n(237),I=Object(X.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_user":return t.payload||!1;default:return e}},form:$.a,surveys:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_surveys":return t.payload||!1;default:return e}}}),W=n(108),G=Object(X.d)(I,{},Object(X.a)(W.a));u.a.render(c.a.createElement(v.a,{store:G},c.a.createElement(Y,null)),document.querySelector("#root"))}},[[109,1,2]]]);
//# sourceMappingURL=main.8e6a9e94.chunk.js.map