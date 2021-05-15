import styled, { css } from "styled-components";

interface FomrPros {
  hasError: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 50px;

  ul {
    text-decoration: none;
    list-style: none;
    padding: 10px;

    li {
      display: inline;
      flex-wrap: wrap;
      width: 100%auto;
      margin: 10px;
    }

    img {
      width: 270px;
      height: 180px;
      margin: 5px auto;
      animation-duration: 1s;
      padding: 10px;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
`;

const Form = styled.form<FomrPros>`
  max-width: 500px;
  display: flex;
  margin: 0 auto;
  input {
    flex: 1;
    height: 56px;
    border: 0;
    border-radius: 10px;
    padding: 0 10px;
    background-color: var(--tertiary-color);
    font-size: 16px;
    font-weight: 400;
    color: #fff;
  }
  button {
    width: 80px;
    border: 0;
    background-color: var(--text-font-color);
    border-radius: 15px;
    position: relative;
    right: 28px;
  }
`;
const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 15px;
`;

const MessageError = styled.div`
  font-size: 60px;
  background-color: red;
  width: 100%;
`;

export { Form, Container, Error, MessageError };
