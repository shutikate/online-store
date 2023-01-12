import styled from "styled-components";

export const Form = styled.form`
  width: 35%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  Button {
    margin-top: 10px;
  }
`

export const Details = styled.p`
  margin-bottom: 10px;
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: bolder;
`

export const Input = styled.input`
  width: 100%;
  height: 35px;
  margin-bottom: 5px;
  border: 2px solid rgba(74, 74, 74);
  font-size: 1.4rem;
  color: rgba(74, 74, 74);
  text-align: center;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const ValidCvvWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

export const ErrorText = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: red;
  margin-bottom: 5px;
`

export const CardText = styled.p`
  font-size: 1.4rem;
  text-transform: uppercase;
  margin-bottom: 5px;
`


