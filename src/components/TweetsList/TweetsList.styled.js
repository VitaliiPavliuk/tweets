import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 14px 28px;

  width: 196px;
  height: 50px;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;

  border: 0;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const List = styled.ul`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(1, 1fr);
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 0;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ListItem = styled.li`
  display: flex;
`;
