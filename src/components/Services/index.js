import React from 'react'

const Services = () => {
    return (
        <ServiceContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1} />
                        <ServicesH2>Reduce Stress</ServicesH2>
                        <Services> We help reduce your stress and increase your overall relaxation experience.</Services>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2} />
                        <ServicesH2>Virtual Offices</ServicesH2>
                        <Services>You can access our platform online anywhere in the world.</Services>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3} />
                        <ServicesH2>Premium Benefits</ServicesH2>
                        <Services> Unlock our special membership promotions that return 5% cash back or donate to recieve 50% off on your next order.</Services>
                    </ServicesCard>
                </ServicesWrapper>
        </ServiceContainer>
    );
};

export default Services