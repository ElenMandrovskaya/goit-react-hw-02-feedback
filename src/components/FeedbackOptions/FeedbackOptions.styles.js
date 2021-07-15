import styled from "@emotion/styled";

export const ButtonContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 25px;
`;

export const Button = styled.button`
  min-width: 150px;
  padding: 2px 32px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border-style: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
  line-height: 1.88;
  letter-spacing: 0.06em;
  color: #ffffff;
  text-transform: capitalize;
  background-color: #2196f3;
&:not(:last-child){
margin-right: 15px;
}
`;