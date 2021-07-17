import '../App.css';
import styled from 'styled-components';
import vitae from '../assets/vitae.jpg';
import { Link } from "react-router-dom"

const HeaderContainer = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;
  margin-bottom: 10px;
`;

const Logo = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const HeaderTitle = styled.div`
  margin-left: 10px;
`
const NavigationContainer = styled.nav`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid grey;
  border-top: 1px solid grey;
  padding-bottom: 10px;
`

const Navigation = styled.nav`
  width: 40%;
  display: flex;
  justify-content: space-between;
`


function Header() {
  return (
    <>
      <HeaderContainer>
        <Logo src={vitae} alt="logo"/>
        <HeaderTitle>
          <h1>Yudi Krisnandi</h1>
          <p>I'm a Programmer 💻 | Calisthenic Atlete 🔥</p>
        </HeaderTitle>
      </HeaderContainer>
      <NavigationContainer>
        <Navigation>
          <Link to="/">Home</Link>
          <Link to="/course">Course</Link>
        </Navigation>
      </NavigationContainer>
    </>
  );
}

export default Header;
