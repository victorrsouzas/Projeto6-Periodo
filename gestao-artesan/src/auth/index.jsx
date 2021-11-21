import React, { useState } from 'react';
import {
    Container, Grid,CssBaseline, Box, CircularProgress, Button, Card, CardContent
} from '@mui/material';
import fire from '../helpers';
import { ToastContainer, toast } from 'react-toastify';
import Logo from '../asserts/Group 196.png';
import { Form, Formik } from 'formik';
import * as Yup from "yup";
import Error from '../helpers/error';
import Success from '../helpers/success';
import FormTextField from '../component/formTextField';
import { styled } from '@mui/styles';
import SubmitButton from '../component/submitButton';


const MyThemeComponent = styled('div')(({ theme }) => ({
    paper: {
        marginTop: "50px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));



function Login(props) {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("");

    const initialValues = {
        email: "",
        password: ""
    };

    const validations = Yup.object().shape({
        email: Yup.string().required("É requerido"),
        password: Yup.string().required("É requerido"),
    });

    async function handleSubmit(values, { resetForm }) {
        console.log(values.email, values.password)

        fire.auth()
            .signInWithEmailAndPassword(values.email, values.password)
            .then(response => {
                setLoading(true);
                const { user } = response;
                const data = {
                    userId: user.uid,
                    email: user.email
                }
                console.log(data);
                localStorage.setItem('user', JSON.stringify(data));
                const storage = localStorage.getItem('user');
                const loggedInUser = storage !== null ? JSON.parse(storage) : null;
                props.loggedIn(loggedInUser);
                setLoading(false);
                resetForm();
            }).catch(error => {
                toast.error(error.message);
                setLoading(false);
                setErrorMessage(error);
                setError(true);
                setLoading(false);
            })
    }
    function handleClose() {
        setError(false);
        setSuccess(false);
    }
    return (
        <>
            <Error
                openError={error}
                message={errorMessage}
                handleClose={handleClose}
            />
            <Success
                openSuccess={success}
                message={"Login efetuado com Sucesso!"}
                handleClose={handleClose}
            />
            <Container component="main" maxWidth="xs">
                <Card sx={{ marginTop: '50px', paddingLeft: '10px', paddingRight: '10px', paddingBottom: '10px' }}>
                    <CardContent>
                        <ToastContainer />
                        <CssBaseline />
                        <MyThemeComponent >
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validations}
                                onSubmit={handleSubmit}
                                onError={errors => {
                                    for (const err of errors) {
                                        console.log(err.props.errorMessages[0])
                                    }
                                }}
                            >
                                {({ resetForm, values, isValid, handleReset, handleBlur, setFieldValue }) => (
                                    <Form>
                                        <br /><br /><br />
                                        <Grid
                                            container
                                            direction="row"
                                            justifyContent="center"
                                            alignItems="center"
                                        >
                                            <img src={Logo} alt={"Casual Jacket"} />
                                        </Grid>
                                        
                                        <br /><br /><br />
                                        <FormTextField
                                            name="email"
                                            label="Email"
                                            type="email"
                                        />
                                        <br /><br />
                                        <FormTextField
                                            name="password"
                                            label="Senha"
                                            type="password"
                                        />
                                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                            <Box sx={{ flex: '1 1 auto' }} />
                                            {loading ? (
                                                <Button
                                                    sx={{ bgcolor: "rgba(8, 153, 186, 0.1)", color: "white" }}
                                                >
                                                    <CircularProgress color="primary" size={20} sx={{ mr: 1 }} />{" "}
                                                    Entrando...
                                                </Button>
                                            ) : (
                                                <SubmitButton>Entrar</SubmitButton>
                                            )}
                                        </Box>
                                    </Form>
                                )}
                            </Formik>
                        </MyThemeComponent>
                    </CardContent>
                </Card>
            </Container>
        </>

    );
}


export default Login;