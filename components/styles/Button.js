import styled from 'styled-components';

const ButtonStyled = styled.a`
  font-family: 'Roboto', sans-serif;
  font-size: 1.4rem;
  line-height: 1.4rem;
  font-weight: 700;
  color: #fff;
  background-color: ${props => props.theme.red};
  border: 0.2rem solid ${props => props.theme.red};
  display: inline-block;
  text-align: center;
  padding: 2.7rem 4rem;
  cursor: pointer;
  vertical-align: middle;
  text-decoration: none;
  transition: all 0.2s linear;
  margin-bottom: 1.7rem;
  letter-spacing: 0.2rem;

  &:hover {
    background-color: #fff;
    color: ${props => props.theme.red};
  }
`;

export default ButtonStyled;
