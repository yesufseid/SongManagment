import styled from "@emotion/styled";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Modal = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 350px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 8px 0;
  padding: 8px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 8px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

const SaveButton = styled(Button)`
  background: #007bff;
  color: white;

  &:hover {
    background: #0056b3;
  }
`;

const CancelButton = styled(Button)`
  background: #ccc;
  color: black;
  margin-left:5px;

  &:hover {
    background: #bbb;
  }
`;

export {CancelButton,SaveButton,Button,Input,Modal,Overlay}