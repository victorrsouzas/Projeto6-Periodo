import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { styled } from '@mui/system';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Login from './auth/index'
import './App.css';
import { theme } from './config/theme';
import Image from './asserts/1.jpg'
import { AppStorage } from './contexts/AppStorage';
import PageWrapper from './component/PageWrapper';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Pedidos from './pages/Patient';
import Fornecedores from './pages/ScheduleContainer';
import Financeiro from './pages/Soap';


const BodyBackground = styled("div")({
  backgroundImage: `url(${Image})`,
  height: "100vh"
});

function App() {
  const [user, setUser] = React.useState('');
  const [toggleForm, setToggleForm] = React.useState(true);
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
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <BodyBackground>
          {user !== null ? (
            <BrowserRouter>
              <AppStorage>
                <CssBaseline>
                    <PageWrapper setUserState={() => setUser(null)}>
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/pedidos" element={<Pedidos />} />
                        <Route path="/fornecedores" element={<Fornecedores />} />
                        <Route path="/Financeiro" element={<Financeiro />} />
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </PageWrapper>
                </CssBaseline>
              </AppStorage>
            </BrowserRouter>
          ) : (
            <>
              {toggleForm ? (<Login loggedIn={(user) => setUser(user)} toggle={() => formMode()} />)
                : ""}
            </>
          )}
        </BodyBackground>
      </CssBaseline>


    </ThemeProvider>
  );
}

export default App;
