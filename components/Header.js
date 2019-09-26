import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import styled from 'styled-components';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
Router.events.on('routeChangeError', () => {
  NProgress.done();
});

const HeaderHolder = styled.header``;

const Header = () => (
  <HeaderHolder>
    <div className="menu-wrapper">
      <div className="header-logo">
        <a href="/">
          <img src="static/images/logo.svg" alt="Afcihub" />
        </a>
      </div>

      <div className="toggle-holder">
        <div id="toggle">
          <div className="first-menu-line" />
          <div className="second-menu-line" />
          <div className="third-menu-line" />
        </div>
      </div>

      <div className="menu-holder">
        <nav id="header-main-menu">
          <ul className="main-menu sm sm-clean">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#clients">Clients</a>
            </li>
            <li>
              <a href="#news">News</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#milestones">Milestones</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="clear" />
    </div>
  </HeaderHolder>
);

export default Header;
