import styled from 'styled-components';

export const CartListElem = styled.div`
  display: flex;
  padding: 25px 15px;
  gap: 20px;
  position: relative;
  height: 150px;
  border-bottom: 1px solid #bbb;
`;

export const CartListElemPicture = styled.img`
  aspect-ratio: 1;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0px 2px 1px #bbb;
`;

export const CartListElemCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const CartListElemTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  width: 80%;
`;

export const CartListElemDesc = styled.p`
  font-size: 0.75rem;
  color: #555;
  width: 80%;
`;

export const CartListElemPrice = styled.div`
  font-size: 1.1rem;
  color: #000;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const CartRemove = styled.div`
   position: absolute;
   top: 25px;
   right: 20px;
   width: 20px;
   aspect-ratio: 1;
   cursor: pointer;
`;

export const CartRemoveImg = styled.img`
    width: 100%;
    aspect-ratio: 1;
`;

export const CartQuantityCont = styled.div`
  display: flex;
  align-items: center; 
  position: absolute;
  bottom: 25px;
  right: 20px;
  gap: 15px;
  height: 20px;
`;

export const CartQuantity = styled.span`
  text-align: center;
  font-size: 1rem;
`;

export const CartQuantityAdd = styled.button`
  background-color: #eee;
  width: 25px;
  border-radius: 5px;
  height: 100%;
  color: white;
  border: none;
  cursor: pointer;
  color: #000;
  font-weight: normal;
  font-size: 1rem;

  &:hover {
    background-color: #bbb;
  }
`;

export const CartQuantitySub = styled.button`
  background-color: #eee;
  color: white;
  border: none;
  width: 25px;
  border-radius: 5px;
  height: 100%;
  cursor: pointer;
  font-weight: bold;
  color: #000;  
  font-weight: normal;
  font-size: 1rem;

  &:hover {
    background-color: #bbb;
  }
`;
