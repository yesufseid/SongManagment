

import styled from '@emotion/styled'

const Container = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
`;

const SongItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin: 8px 0;
  border-radius: 5px;
  background: #f9f9f9;
  list-style: none;

  &:hover {
    background: #e0e0e0;
  }
`;

const SongTitle = styled.span`
  font-weight: bold;
  color: #333;
`;

const SongDetails = styled.span`
  font-size: 14px;
  color: #666;
`;

const DeleteButton = styled.button`
  background: #ff4d4d;
  display:flex;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 5px;
  align-self: flex-end;

  &:hover {
    background: #cc0000;
  }
`;
const Listul = styled.ul`
  padding: 0
`;
const AddButton = styled.button`
  display: block;
  margin: 0 auto 15px;
  padding: 10px;
  background: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background: #45a049;
  }
`;
const Button = styled.button`
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 5px;
`;
const EditButton = styled(Button)`
  background: #007bff;
  color: white;

  &:hover {
    background: #0056b3;
  }
`;

const Section = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 20px;
  margin-left:auto;
`;



export  {SongItem,DeleteButton,Title,Container,Listul,SongDetails,SongTitle,AddButton,EditButton,Section}