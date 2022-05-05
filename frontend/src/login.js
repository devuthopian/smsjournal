import React from 'react';
import Header from './components/Head';
import LoginForm from './pages/Login';
import LoadingScreen from './loading';

import {useEffect, useState} from "react";

function Login() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const loadData = async () => {
        await new Promise((r) => setTimeout(r, 3000));
        setLoading((loading) => !loading);
      };
        
      loadData();
    }, [])

  if (loading) {
      return (
        <LoadingScreen />
      )
  }

  else {
    return (
      <>
        <Header/>
        <LoginForm/>
      </>
    );
  }
}

export default Login;
