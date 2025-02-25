import SongList from "./component/songListcomp/songList";
import Statistics from "./component/songStaticsComp/Statistics";
import styled from "@emotion/styled";


  const Container = styled.div`
  display: flex;
  justify-content:center;
  align-items: flex-start;
  max-width: 900px;
  margin: 20px auto;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column; 
    align-items: center; 
  }
`;

const Section = styled.div`
  flex: 1;
  min-width: 300px;
  

  @media (max-width: 768px) {
    width: 100%; 
  }
`;


export default function Song() {

  return (
    <div>
    <h1 style={{ textAlign: "center" }}>🎵 Song Management</h1>
    <Container>
      <Section>
        <Statistics />
      </Section>
      <Section>
        <SongList />
      </Section>
    </Container>
  </div>
  );
}
