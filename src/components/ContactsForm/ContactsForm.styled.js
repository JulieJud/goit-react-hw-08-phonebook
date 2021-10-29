import styled from '@emotion/styled';
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 95%;
  max-width: 400px;
  padding: 10px;
  border-radius: 2px;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.5);
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  height: 40px;
  margin-bottom: 6px;
  padding: 5px;
  border: 1px solid #7d847d;
  border-radius: 4px;
  outline: none;
`;

export const Button = styled.button`
  height: 38px;
  margin-top: 5px;
  border-width: inherit;
  border-radius: 5px;
  outline: none;
  color: white;
  background-color: green;
  cursor: pointer;
`;
