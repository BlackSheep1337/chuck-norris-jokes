import styled from 'styled-components';

export const Main = styled.section`
  width: 100%;
  height: 100vh;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .header {
    img { 
      width: 500px;
    }
  }

  form {
    margin-top: 20px;
    width: 400px;
    height: 200px;
    input {
      width: 400px;
      height: 40px;
      font-size: 20px;
      font-weight: 500;
    }
    button {
      margin-top: 20px;
      width: 400px;
    }
  }

  .jokes {
    margin-top: 30px;
  }

`;