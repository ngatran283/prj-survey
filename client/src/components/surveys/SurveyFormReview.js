import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import formFields from "./formFields";
import * as actions from "../../actions";
import { withRouter } from "react-router-dom";

const SurveyFormReview = ({ onCancel, formValues, sendSurveys, history })=>{
    const viewRender = _.map(formFields,({label, name})=>{
        return (
        <div key="{name}">
        <label>{label}</label>
        <div>{formValues[name]}</div>
        </div>
        )
    });
    return (
        <div>
            <h5>Welcome to survey form review!</h5>
            {viewRender}
            <button className="yellow darken-3 btn-flat white-text"
                    onClick={ onCancel }>
                Back
            </button>
            <button className="green btn-flat white-text right"
                    onClick={ ()=>{sendSurveys(formValues,history)} }>
                SEND SURVEY <i className="material-icons">email</i>
            </button>
        </div>
    )
}

function mapStateToProps(state) {
 return {formValues: state.form.surveyForm.values}
}

export default connect(mapStateToProps,actions)(withRouter(SurveyFormReview));
