import styled from "@emotion/styled";

const MyButton = styled.button`
  width: 91px;
  height: 52px;

  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  display: block;
  border: none;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
  background-color: black;
`;

export default function SmallCommonButton(props) {
  return (
    <MyButton onClick={props.onClick} id={props.id}>
      {props.name}
    </MyButton>
  );
}
