import React, { useContext } from 'react'
import { BoxContainer, FormContainer, Input, MutedLink, SubmitButton, BoldLink } from './common'
import { Marginer } from '../marginer';
import { AccountContext } from './accountContext';


const LoginForm = (props) => {
    const { switchToSignup } = useContext(AccountContext);

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
            </FormContainer>
                <Marginer direction="vertical" margin={10} />
                <MutedLink href="#"> Forget you password?</MutedLink>
                <Marginer direction="vertical" margin="1.8em" />
                <SubmitButton type="submit">Sign&nbsp;In</SubmitButton>
                <Marginer direction="vertical" margin="1em" />
                <MutedLink href="#">Don't have an account?{" "}
                <BoldLink href="#" onClick={switchToSignup}>Signup</BoldLink></MutedLink>
        </BoxContainer>
    )
}

export default LoginForm;