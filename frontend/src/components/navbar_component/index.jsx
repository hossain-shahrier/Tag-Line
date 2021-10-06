import styled from "styled-components";
import tw from "twin.macro";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
const Container = styled.div`
  ${tw`
    flex
    flex-col
    justify-center
    sticky
  `}
  height: 80px;
  z-index: 999;
  margin-bottom: 20px;
`;
const Wrapper = styled.div`
  ${tw`
    flex
    items-center
    justify-evenly
  `}
  font-size: 14px;
`;
const Logo = styled.span`
  font-size: 45px;
  font-weight: 500;
  letter-spacing: 3px;
  text-align: center;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 5px;
`;

const Home = styled.span`
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid black;
  }
`;
const Shop = styled.span`
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid black;
  }
`;
const Categories = styled.span`
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid black;
  }
`;

const Promotions = styled.span`
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid black;
  }
`;
const Collection = styled.span`
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid black;
  }
`;
const Blog = styled.span`
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid black;
  }
`;
const Search = styled.span`
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid black;
  }
`;
const Cart = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    border-bottom: 1px solid black;
  }
`;
const Navbar = () => {
  return (
    <Container>
      <Logo>TAG-LINE</Logo>
      <Wrapper>
        <Home>HOME</Home>
        <Shop>SHOP</Shop>
        <Categories>CATEGORIES</Categories>
        <Promotions>PROMOTIONS</Promotions>
        <Collection>COLLECTION</Collection>
        <Blog>BLOG</Blog>
        <Search>SEARCH</Search>
        <Cart>
          CART
          <ShoppingBagOutlinedIcon
            style={{ marginLeft: "5px", fontSize: "20px" }}
          />
        </Cart>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
