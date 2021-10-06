import styled from "styled-components";
import Header from "../../components/header_component";
import Hero from "../../components/hero_component";
import Navbar from "../../components/navbar_component";

const Container = styled.div``;
const HomePage = () => {
  return (
    <Container>
      <Header />
      <Navbar />
      <Hero />
    </Container>
  );
};

export default HomePage;
