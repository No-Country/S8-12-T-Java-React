import React, {createContext} from 'react';
import jwt_decode from 'jwt-decode'

const ContextToken = createContext();

const ContextTokenProvider = ({children}) => {

    const TOKEN = localStorage.getItem('USER_TOKEN');
    const JWT_TOKEN = jwt_decode(TOKEN);
    const DECODE_TOKEN = JWT_TOKEN.id ? JWT_TOKEN.id : JWT_TOKEN.sub


  return (
    <ContextToken.Provider value={{TOKEN,DECODE_TOKEN}}>
        {children}
    </ContextToken.Provider>
  )
}

export {ContextToken,ContextTokenProvider}
