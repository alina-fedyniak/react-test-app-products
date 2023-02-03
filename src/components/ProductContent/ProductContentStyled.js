import styled from 'styled-components';
import 'swiper/css';
import { Button } from 'antd';

export const StyledWrap = styled.div`
  max-width: 55rem;
  height: 33rem;
  background: white;
  color: #484a4e;
  border: 0.06rem solid #e9e3e3;
  box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  line-height: 2rem;
  text-transform: capitalize;
  
  .ant-image-img{
    height: 500px;
  }
`;

export const StyledBtn = styled(Button)`
  border: ${({$isActive}) =>
          $isActive ? '2px solid black' : '1px solid black'};
`;

export const StyledBlockInfo = styled.div`
  text-align: left;
  width: 80%;
`;

export const StyledName = styled.div`
  font-weight: 600;
  font-size: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

export const StyledPrice = styled.div`
  font-weight: 600;
  font-size: 1.5rem;
`;
