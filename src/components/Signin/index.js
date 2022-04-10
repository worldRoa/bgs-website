import React from 'react'
import { Container, FormH1, FormWrap, Icon, Form, FormLabel, FormInput, FormButton, Text } from './SigninElements'

const Signin = () => {
    return (
        <>
        <Container>
            <FormWrap>
                <Icon to='/'>BGS</Icon>
                <Form action='#'>
                    <FormH1>Sign in to your account</FormH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required />
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput htmlFor='password' required />
                    <FormButton type='submit'>Login</FormButton>
                    <Text to='/'><a href="/">Forgot password</a></Text>
                </Form>
            </FormWrap>
        </Container>
        </>
    );
};

export default Old;