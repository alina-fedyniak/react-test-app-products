import styled from 'styled-components';

export const StyledWrap = styled.div`
  margin: 2.5rem;
`;

export const StyledProductsContainer = styled.div`
  display: grid;
  grid-column-gap: 2.8rem;
  grid-row-gap: 2.8rem;
  grid-template-columns: repeat(1, 1fr);
  margin-bottom: 3.3rem;
  
  @media (min-width: 834px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;


