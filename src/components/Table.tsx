import styled from 'styled-components';
import { useEffect,useState } from 'react';

import TableElement from './TableElement';

const apiKey = process.env.REACT_APP_API_KEY;

export interface standing {
  team_name: string,
  overall: {
    games_played: number | string,
    won: number | string,
    draw: number | string,
    lost: number | string,
    goals_scored: number | string,
    goals_against: number | string,
    points: number | string,
  };
}

const standingsHeader = {
  team_name: "Name",
  overall: {
    games_played: "G",
    won: "W",
    draw: "D",
    lost: "L",
    goals_scored: "GS",
    goals_against: "GA",
    points: "P",
  },
}

const Table:React.FC = () => {
  const [standings, setStandings] = useState<standing[] | undefined>(undefined);

  const renderStandings = () => {
    return standings?.map((standing)=>{
      return <TableElement standing={standing} key={standing.team_name}/>
    })
  }

  const fetchStangings = async () => {
    if(!standings){
      const response = await fetch(`https://soccer.sportmonks.com/api/v2.0/standings/season/18369?api_token=${apiKey}`);
      const responseJSON = await response.json();
      setStandings(responseJSON.data[0].standings.data);
    }
  }

  useEffect(()=>{
    fetchStangings();
  })
  return (
    <TableWrapper>
      {standings ? <><TableElement header={true} standing={standingsHeader}/>{renderStandings()}</> : <div>loading</div>}
    </TableWrapper>
  )
};

const TableWrapper = styled.ul`
    border: 2px solid var(--border);
    border-radius:3px;
`

export default Table;
