import styled from 'styled-components';

export const StyledWrap = styled.div`
  max-width: 25rem;
  height: 34rem;
  background: white;
  color: #484a4e;
  border: 0.06rem solid #e9e3e3;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  
`;

export const StyledName = styled.div`
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

export const StyledPrice = styled.div`
  font-weight: 700;
`;

export const StyledImg = styled.div`
  img {
    max-height: 400px;
    padding: 1rem;
  }
`;
