import React from "react";
import {connect} from "react-redux";

import { Default } from "../components/Default";
import {action1} from "../actions/defaultActions.js";

class App extends React.Component {
    render() {
        return (
            <div className="container">

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        default: state.default
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        action1: (variable) => {
            dispatch(action1(variable));
        }
    };
};

export default connect (mapStateToProps. mapDispatchToProps)(App);