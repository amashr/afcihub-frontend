import styled from 'styled-components';

const HeaderStyled = styled.header`
  background: #f9f9f9;

  .menu_wrapper {
    position: relative;
    max-width: 145rem;
    width: 98%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .header_logo {
    position: absolute;
    top: 0;
    left: 0;

    a {
      background: ${props => props.theme.red};
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20rem;
      height: 12rem;

      img {
        width: 90%;
      }
    }
  }

  .toggle_holder {
    .toggle {
      cursor: pointer;

      div {
        height: 3px;
        margin-bottom: 6px;
        background-color: #264549;
        width: 22px;
      }
      .first_menu_line {
      }
    }
  }

  .main_menu {
    list-style-type: none;
    padding: 1.5rem;
    display: flex;

    li {
      padding: 1.5rem;

      a {
        font-size: 1.4rem;
      }
    }
  }
`;

export default HeaderStyled;
