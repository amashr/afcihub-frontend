import Link from 'next/link';
import styled from 'styled-components';
import { SectionStyled } from './styles/Helpers';
import ButtonStyled from './styles/Button';

const MainStyled = styled.main`
  overflow-x: hidden;
  .big_title {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 4.6rem;
    line-height: 133%;
    color: #264549;
  }

  .content_wrapper {
    width: 117rem;
    max-width: 95%;
    margin: 0 auto;
  }

  .site_description {
    font-size: 2.4rem;
    line-height: 150%;
    color: #214b51;
    margin-bottom: 0;
    padding-bottom: 3rem;
  }

  .home_full_width {
    position: relative;

    .dots {
      position: absolute;
      top: -24rem;
      left: calc(50% + 10.5rem);
      z-index: -1;
    }

    .home_button {
      position: absolute;
      top: -3.5rem;
      left: 70%;
      z-index: 98;
    }

    &_background {
      background: linear-gradient(rgba(3, 30, 35, 0.5), rgba(3, 30, 35, 0.5)),
        url('static/images/main.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
      height: 100vh;

      .logo_icon {
        margin-left: auto;
        margin-right: auto;
        max-width: 80rem;
        display: block;
        top: 50%;
        position: relative;
        transform: translateY(-50%);
      }
    }
  }
`;

const Main = () => (
  <MainStyled id="home">
    <SectionStyled padBottom="0">
      <div className="content_wrapper">
        <h1 className="big_title">
          Digital Crafters <br />
          Clean Code & Neat Design
        </h1>
        <p className="site_description">
          We are Afcihub. Award-winning design & code <br />
          crafters with office in Dar es salaam
        </p>
        <br />
      </div>
    </SectionStyled>
    <div className="home_full_width">
      <img className="dots" src="static/images/dots.png" alt="Dots" />
      <Link href="#contact">
        <ButtonStyled className="home_button">CONTACT US</ButtonStyled>
      </Link>
      <div className="home_full_width_background">
        <img
          className="logo_icon"
          src="static/images/logo.svg"
          alt="Afcihub Icon"
        />
      </div>
    </div>
  </MainStyled>
);

export default Main;
