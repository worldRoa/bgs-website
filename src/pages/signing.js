import React from 'react'
import styled from 'styled-components';
import { AccountBox } from '../components/AccountBox';

const SigninContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 2em;
`;


const AccountPage = () => {
    return (
        <SigninContainer>
            <AccountBox />
        </SigninContainer>
    );
};

export default AccountPage;