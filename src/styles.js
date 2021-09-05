import styled from 'styled-components';

export const Main = styled.section`
  width: 100%;
  height: 100vh;
`;

export const Form = styled.form`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 500px;
  }
  .control {
    display: flex;
    flex-direction: column;
    input {
      background-color: gray;
    }
  }

`;