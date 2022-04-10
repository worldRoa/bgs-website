import React from 'react'
import { BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './common'
import { Marginer } from '../marginer';


const LoginForm = (props) => {
    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Marginer direction="vertical" margin={5} />
                <MutedLink href="#"> Forget you password?</MutedLink>
                <Marginer direction="vertical" margin="1em" />
                <SubmitButton type="submit">Signin</SubmitButton>
            </FormContainer>
        </BoxContainer>
    )
}

export default LoginForm