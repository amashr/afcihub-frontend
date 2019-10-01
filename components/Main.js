import Link from 'next/link';
import styled from 'styled-components';
import ButtonStyled from './styles/Button';

const MainStyled = styled.main`
  overflow-x: hidden;
  .big_title {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 3.8rem;
    line-height: 115%;
    color: #264549;

    @media screen and (min-width: 600px) {
      font-size: 4.6rem;
      line-height: 133%;
    }
  }

  .main_wrapper {
    padding: 6.5rem 0 3.5rem;

    @media screen and (min-width: 600px) {
      padding: 13.5rem 0 0;
    }
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

    @media screen and (min-width: 600px) {
      padding-bottom: 3rem;
    }
  }

  .home_full_width {
    position: relative;
    z-index: 10;

    .dots {
      display: none;

      @media screen and (min-width: 1022px) {
        display: block;
        position: absolute;
        top: -24rem;
        left: calc(50% + 10.5rem);
      }
    }

    .home_button {
      display: none;

      @media screen and (min-width: 1022px) {
        display: block;
        position: absolute;
        top: -3.5rem;
        left: 70%;
      }
    }

    &_background {
      background: linear-gradient(rgba(3, 30, 35, 0.7), rgba(3, 30, 35, 0.7)),
        url('static/images/main.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
      height: 100vh;

      .logo_icon {
        margin-left: auto;
        margin-right: auto;
        max-width: 60rem;
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
    <div className="main_wrapper">
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
    </div>
    <div className="home_full_width">
      <img className="dots" src="static/images/dots.png" alt="Dots" />
      <Link href="#contact">
        <ButtonStyled className="home_button">GET STARTED</ButtonStyled>
      </Link>
      <div className="home_full_width_background">
        <img
          className="logo_icon"
          src="static/images/logo-main.svg"
          alt="Afcihub Icon"
        />
      </div>
    </div>
  </MainStyled>
);

export default Main;
