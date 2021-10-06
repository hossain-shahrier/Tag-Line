// import { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Container = styled.div`
  ${tw`
  w-full
  h-screen
  relative
  overflow-hidden
  hidden
  xl:flex
  `}
`;

const ImageContainer = styled.div`
  ${tw`
    h-4/5
    w-screen
  `}
`;
const HeroImage = styled.img`
  ${tw`
    object-cover
    w-full
    h-full
`}
`;
const Hero = () => {
  return (
    <Container>
      <ImageContainer>
        <HeroImage src="https://images.unsplash.com/photo-1618212168926-574aa7d98b3e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" />
      </ImageContainer>
    </Container>
  );
};

export default Hero;
