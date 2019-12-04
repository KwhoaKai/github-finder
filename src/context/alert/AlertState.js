import React, { useReducer } from "react";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";
import { SET_ALERT, REMOVE_ALERT } from "../types";

/**
 * Separate file that uses React.Context + Reducer for state managment in App.js
 *
 * Store global state and methods that previously needed to be passed down.
 * With the Context API, children have access to all variables/methods in their context
 *
 * @param {*} props any props recieved.
 */
const AlertState = props => {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  // Set alert
  const setAlert = (msg, type) => {
    dispatch({
      type: SET_ALERT,
      payload: { msg, type }
    });

    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, 5000);
  };

  // Value object contains the vars/methods everyone has access to.
  return (
    <AlertContext.Provider
      value={{
        setAlert,
        alert: state
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
};

export default AlertState;
