import styled from '@emotion/styled';

export const Button = styled.button`
  display: inline-block;
  width: 30%;
  border-width: 0;
  line-height: 40px;
  border-radius: 20px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  text-transform: uppercase;
  font-size: 12px;

  background-color: grey;
  color: white;
`;

export const List = styled.ul`
  padding: 0;
`;

export const Name = styled.span`
  display: block;
  padding: 0 15px;
  font-family: 'Roboto', sans-serif;
  color: black;
  font-size: 14px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 400px;
  height: 45px;
  padding: 10px;
  margin-top: 6px;
  border-radius: 2px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5);
  list-style: none;
`;
