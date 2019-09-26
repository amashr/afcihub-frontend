import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import HeaderStyled from './styles/HeaderStyled';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});
Router.events.on('routeChangeError', () => {
  NProgress.done();
});

const Header = () => (
  <HeaderStyled>
    <div className="menu_wrapper">
      <div className="header_logo">
        <Link href="/">
          <a>
            <img src="static/images/logo.svg" alt="Afcihub" />
          </a>
        </Link>
      </div>

      <div className="toggle_holder">
        <div className="toggle">
          <div className="first_menu_line" />
          <div className="second_menu_line" />
          <div className="third_menu_line" />
        </div>
      </div>

      <nav>
        <ul className="main_menu">
          <li>
            <Link href="#home">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="#services">
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href="#portfolio">
              <a>Portfolio</a>
            </Link>
          </li>
          <li>
            <Link href="#clients">
              <a>Clients</a>
            </Link>
          </li>
          <li>
            <Link href="#news">
              <a>News</a>
            </Link>
          </li>
          <li>
            <Link href="#skills">
              <a>Skills</a>
            </Link>
          </li>
          <li>
            <Link href="#team">
              <a>Team</a>
            </Link>
          </li>
          <li>
            <Link href="#milestones">
              <a>Milestones</a>
            </Link>
          </li>
          <li>
            <Link href="#about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="#pricing">
              <a>Pricing</a>
            </Link>
          </li>
          <li>
            <Link href="#contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </HeaderStyled>
);

export default Header;
