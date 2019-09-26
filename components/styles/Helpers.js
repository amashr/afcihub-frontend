import styled from 'styled-components';

const SectionStyled = styled.section`
  padding: 13.5rem 0;
  padding-bottom: ${props => props.padBottom || '13.5rem'};
  position: relative;
  z-index: -1;
`;

export { SectionStyled };
