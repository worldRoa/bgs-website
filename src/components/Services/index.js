import React from 'react';
import Icon1 from '../../images/svg4.svg';
import Icon2 from '../../images/svg5.svg';
import Icon3 from '../../images/svg6.svg';
import { ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

const Services = () => {
    return (
        <>
            <ServicesContainer id="services">
                <ServicesH1>Our Services</ServicesH1>
                    <ServicesWrapper>
                        <ServicesCard>
                            <ServicesIcon src={Icon1} />
                            <ServicesH2>Reduce Stress</ServicesH2>
                            <ServicesP> We help reduce your stress and increase your overall relaxation experience.</ServicesP>
                        </ServicesCard>
                        <ServicesCard>
                            <ServicesIcon src={Icon2} />
                            <ServicesH2>Virtual Offices</ServicesH2>
                            <ServicesP>You can access our platform online anywhere in the world.</ServicesP>
                        </ServicesCard>
                        <ServicesCard>
                            <ServicesIcon src={Icon3} />
                            <ServicesH2>Premium Benefits</ServicesH2>
                            <ServicesP> Unlock our special membership promotions that return 5% cash back or donate to recieve 50% off on your next order.</ServicesP>
                        </ServicesCard>
                    </ServicesWrapper>
            </ServicesContainer>
        </>
    );
};

export default Services;