import React from 'react'
import styled from 'styled-components';
import { AccountBox } from '../components/AccountBox';
import Footer from '../components/Footer';

const SigninContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 2em;
    padding-bottom: 10em;
`;


const AccountPage = () => {
    return (
        <>
        <SigninContainer>
            <AccountBox />
        </SigninContainer>
        <Footer />
        </>
    );
};

export default AccountPage;