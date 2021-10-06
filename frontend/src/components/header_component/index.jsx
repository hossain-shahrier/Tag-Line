import styled from "styled-components";
import tw from "twin.macro";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import PinterestIcon from "@mui/icons-material/Pinterest";
const Container = styled.div`
  ${tw`
    bg-gray-100
    flex
    items-center
    justify-between
    pl-2
    pr-2
`}
  height: 50px;
  font-weight: 300;
  font-size: 14px;
`;

const HeaderLeft = styled.div`
  ${tw`
    flex
    items-center
`}
`;
const HeaderLang = styled.div`
  ${tw`
  cursor-pointer
  `}
  margin-right: 5px;
  &:hover {
    border-bottom: 1px solid black;
  }
`;
const HeaderLogo = styled.span`
  ${tw`
  cursor-pointer
  `}
  margin-left: 5px;
  &:hover {
    border-bottom: 1px solid black;
  }
`;
const HeaderCenter = styled.span`
  font-weight: 400;
  border-bottom: 1px solid black;
  cursor: pointer;
`;
const HeaderRight = styled.div``;
const HeaderSignup = styled.span`
  margin-right: 10px;
  ${tw`
  cursor-pointer
  `}
  &:hover {
    border-bottom: 1px solid black;
  }
`;
const HeaderLogin = styled.span`
  ${tw`
  cursor-pointer
  `}
  margin-right: 5px;
  &:hover {
    border-bottom: 1px solid black;
  }
`;

const Header = () => {
  return (
    <Container>
      <HeaderLeft>
        <HeaderLang>BN</HeaderLang>|<HeaderLogo>Contact Us</HeaderLogo>
      </HeaderLeft>
      <HeaderCenter>SIGN UP FOR SUPER DEALS</HeaderCenter>
      <HeaderRight>
        <HeaderSignup>Register</HeaderSignup>
        <HeaderLogin>Sign In</HeaderLogin>
      </HeaderRight>
    </Container>
  );
};

export default Header;
