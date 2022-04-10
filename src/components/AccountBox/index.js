import React from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import logo from "../../images/biz-logo.png";
import LoginForm from "./loginForm";


const BoxContainer = styled.div`
    width: 380px;
    min-height: 700px;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
    position: relative;
    overflow: hidden;
`;

const Logo = styled(Link)`
    text-decoration: none;
    color: #000;
    font-weight: 700;
    font-size: 32px;
    margin-left: 24px;
`;

const BizLogo = styled.img.attrs({
    src: `${logo}`
    })`
    width: 132px;
    height: 132px;
    `;

const TopContainer = styled.div`
    width: 100%;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 1.8em;
    padding-bottom: 5em;
`;


const BackDrop = styled.div`
    width: 155%;
    height: 590px;
    position: absolute;
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    transform: rotate(60deg);
    top: -290px;
    left: -140px;
    background: #1b9ba4;
    background: linear-gradient(
        58deg,
        rgb(12, 36, 68) 25%,
        #1b9ba4 80%
    );
`;

const HeaderContainer = styled.div`
        width:100%;
        display: flex;
        flex-direction: column;
`;

const HeaderText = styled.h2`
        font-size: 30px;
        font-weight: 600;
        line-height: 1.24;
        color: #fff;
        z-index: 10;
        margin: 0;
`;

const SmallText = styled.h5`
    color: #fff;
    font-weight: 500;
    font-size: 12px;
    z-index: 10;
    margin: 0;
    margin-top: 15px;
`;

const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flexx-direction: column;
`;

export const AccountBox = (props) => {
    return (
        <>
    <Logo to={'/'}><BizLogo /></Logo>
    <BoxContainer>
        <TopContainer>
            <BackDrop />
            <HeaderContainer>
                <HeaderText>Welcome</HeaderText>
                <HeaderText>Back</HeaderText>
                <SmallText>Please sign-in to continue!</SmallText>
            </HeaderContainer>
            <InnerContainer>
                <LoginForm />
            </InnerContainer>
        </TopContainer>
    </BoxContainer>
    </>
    );
};