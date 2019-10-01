import styled from 'styled-components';

const HeaderStyled = styled.header`
  background: #f9f9f9;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;

  .menu_wrapper {
    max-width: 145rem;
    width: 95%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.6rem;

    @media screen and (min-width: 600px) {
      width: 98%;
      padding: 3rem;
    }

    @media screen and (min-width: 1022px) {
      width: 98%;
      padding: 0;
    }
  }

  .header_logo {
    a {
      img {
        max-width: 10rem;
        width: 100%;
      }
    }
  }

  .toggle_holder {
    margin-left: auto;
    .toggle {
      cursor: pointer;

      &:hover {
        .second_menu_line {
          transform: translate3d(0, 0, 0);
        }
      }

      div {
        height: 0.3rem;
        margin-bottom: 0.6rem;
        background-color: #264549;
        width: 2.2rem;
      }

      .second_menu_line {
        transition: transform 0.3s ease;
        transform: translate3d(1rem, 0, 0);
      }

      .third_menu_line {
        margin-bottom: 0;
      }
    }

    @media screen and (min-width: 1022px) {
      display: none;
    }
  }

  .main_menu {
    display: none;

    @media screen and (min-width: 1022px) {
      list-style-type: none;
      padding: 1rem;
      display: flex;
    }

    li {
      padding: 1.5rem 1rem;

      a {
        font-size: 1.4rem;
      }

      @media screen and (min-width: 1160px) {
        padding: 1.5rem;
      }
    }
  }
`;

export default HeaderStyled;
