import styled from "@emotion/styled";

const Container = styled.div`
  width: 400px;
  padding: 20px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 1024px) {
    position:fixed;
    top:100px;
    left: 50%;
    transform: translateX(-150%);
  }
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
`;

const StatList = styled.ul`
  list-style: none;
  padding: 0;
`;

const StatItem = styled.li`
  padding: 8px;
  margin: 5px 0;
  background: #f4f4f4;
  border-radius: 5px;
`;

export {StatItem,StatList,Container,Title}