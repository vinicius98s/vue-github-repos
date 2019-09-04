import styled from 'vue-styled-components';

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  background: #42b983;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

export const StyledUl = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & + li {
      border-top: 1px solid #eee;
    }

    a {
      color: #42b983;
      text-decoration: none;
    }
  }
`;
