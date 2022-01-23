import styled from 'styled-components';
import LatestMatchElement from './LatestMatchElement';
import {useState, useEffect} from "react";

const apiKey = process.env.REACT_APP_API_KEY;
const date = new Date();
const dateWeekAgo = new Date();
dateWeekAgo.setDate(dateWeekAgo.getDate() - 7);
const currentMonth = date.getMonth()+1 < 10 ? `0${date.getMonth()+1}` : date.getMonth()+1;
const monthWeekAgo = date.getMonth()+1 < 10 ? `0${date.getMonth()+1}` : date.getMonth()+1;
const today = `${date.getFullYear()}-${currentMonth}-${date.getDate()}`;
const weekAgo = `${dateWeekAgo.getFullYear()}-${monthWeekAgo}-${dateWeekAgo.getDate()}`;

export interface latestMatch {
    id: number,
    time: {
        starting_at: {
            date: string,
        }
    }
    localTeam: {
        data: {
            name: string,
            logo_path: string,
        }
    },
    visitorTeam: {
        data: {
            name: string,
            logo_path: string,
        }
    },
    scores: {
        ht_score: string,
        ft_score: string,
        localteam_score: number,
        visitorteam_score: number,
    },

}


const LatestMatches = () => {
    const [matches, setMatches] = useState<latestMatch[] | undefined>(undefined);
    const renderMatches = () => {
        return matches?.map((match)=>{
          return <LatestMatchElement match={match}/>
        })
      }
    
      const fetchMatches = async () => {
        if(!matches){
          const response = await fetch(`https://soccer.sportmonks.com/api/v2.0/fixtures/between/${weekAgo}/${today}?api_token=${apiKey}&leagues=501&include=localTeam,visitorTeam`);
        console.log(response);
          const responseJSON = await response.json();
          console.log(responseJSON);
          setMatches(responseJSON.data);
        }
      }
    
      useEffect(()=>{
        fetchMatches();
      })
  return (
    <LatestMatchesWrapper>
        {matches ? renderMatches() : <div>loading</div>}
    </LatestMatchesWrapper>
    );
};

const LatestMatchesWrapper = styled.ul`
    border: 2px solid var(--border);
    border-radius:3px;
`

export default LatestMatches;
