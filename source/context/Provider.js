import React, { createContext, useReducer } from 'react';
import authInitialState from './initialStates/authState';
// import userInfoInitialState from './initialStates/userInfoInitialState';
import auth from './reducers/auth';
// import userInfo from './reducers/userInfo';

export const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {
    const [authState, authDispatch] = useReducer(auth, authInitialState);
    // const [userInfoState, userInfoDispatch] = useReducer(userInfo, userInfoInitialState);

    return (
        <GlobalContext.Provider
            value = {{authState, authDispatch}}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;