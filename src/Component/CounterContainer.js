import React from "react";
import {connect} from "react-redux";

const mapStateToProps = state => ({
    counter: state
});

const mapDispatchToProps = dispatch => ({
    onDecrement10: () => dispatch({type: "DECREMENT_10"}),
    onDecrement: () => dispatch({type: "DECREMENT"}),
    onIncrement10: () => dispatch({type: "INCREMENT_10"}),
    onIncrement: () => dispatch({type: "INCREMENT"}),
    onReset: () => dispatch({type: "RESET"}),
});

const CounterComponent = ({
                              counter,
                              onDecrement10,
                              onDecrement,
                              onIncrement10,
                              onIncrement,
                              onReset
                          }) => (
    <div>
        <div className="container py-3">
            <div className="row justify-content-center">
                <button className="btn btn-danger mx-1" onClick={onDecrement10}>-10</button>
                <button className="btn btn-warning mx-1" onClick={onDecrement}>--</button>
                <div className="col-3 text-center border">{counter}</div>
                <button className="btn btn-info mx-1" onClick={onIncrement}>++</button>
                <button className="btn btn-success mx-1" onClick={onIncrement10}>+10</button>
            </div>
            <div className="row justify-content-center">
                <button className="btn btn-primary w-20 my-2" onClick={onReset}>Reset ...</button>
            </div>
        </div>
    </div>

);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterComponent);