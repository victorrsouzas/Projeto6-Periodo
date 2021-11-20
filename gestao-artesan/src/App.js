import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { styled } from '@mui/system';
import { CssBaseline, ThemeProvider} from '@mui/material';
import Login from './auth/index'
import './App.css';

function App() {
  const [user, setUser] = React.useState('');
  const [toggleForm, setToggleForm] =  React.useState(true);
  const formMode = () => {
    setToggleForm(!toggleForm);
  }
  const userState = () => {
    const data = localStorage.getItem('user');
    const us = data !== null ? JSON.parse(data) : null;
    setUser(us);
  }

  React.useEffect(() => {
    userState();
  }, []);
  return (
    <>
    {user !== null ? (
        <>
        <p>Teste</p>
        </>
      ) : (
         <>
         {toggleForm ? (<Login loggedIn={(user) => setUser(user)} toggle={() => formMode()}/>) 
         : ""}
     </>
      )} 
    </>
  );
}

export default App;
