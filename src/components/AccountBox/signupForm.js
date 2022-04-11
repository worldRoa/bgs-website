import React, { useContext } from 'react'
import { BoxContainer, FormContainer, Input, MutedLink, SubmitButton, BoldLink } from './common'
import { Marginer } from '../marginer';
import { AccountContext } from './accountContext';


const SignupForm = (props) => {
    const { switchToSignin } = useContext(AccountContext);

    return (
        <BoxContainer>
            <FormContainer>
                <Input type="text" placeholder="Full Name" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm Password" />
            </FormContainer>
                <Marginer direction="vertical" margin={50} />
                <SubmitButton type="submit">Sign&nbsp;Up</SubmitButton>
                <Marginer direction="vertical" margin="1em" />
                <MutedLink href="#">Already have an account?{" "}
                <BoldLink
                    href="#"
                    onClick={switchToSignin}
                    >Signup</BoldLink></MutedLink>
        </BoxContainer>
    )
}

export default SignupForm;