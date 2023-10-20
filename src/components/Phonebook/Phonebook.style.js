import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const FormErrorMes = styled(ErrorMessage)`
  color: red;
`;

export const PhoneForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const StyledField = styled(Field)`
  height: 40px;
  width: 100%;
  background-color: #87cefa;

  border: none;
  outline: none;
  border-radius: 10px;
`;

export const ButtonForm = styled.button`
  background-color: #0074d9;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  height: 40px;
  border-radius: 10px;

  padding: 12px 44px;

  :hover,
  :focus {
    background-color: #0056b3;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;
  margin: 0 auto;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f4f4f4;
  text-align: center;
`;
