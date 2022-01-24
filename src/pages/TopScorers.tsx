import styled from 'styled-components';
import Title from '../components/Title';
import {useState,useEffect} from 'react';

const apiKey = process.env.REACT_APP_API_KEY;

interface TopGoalsScorers {
    data: [
      {
        position: number,
        goals: number,
        player: {
          data: {
            fullname: string,
            image_path: string,
          }
        }
      }
    ]
}

interface TopAssistsScorers {
    data: [
      {
        position: number,
        assists: number,
        player: {
          data: {
            fullname: string,
            image_path: string,
          }
        }
      }
    ]
}



const TopScorers = () => {
    const [topScorersMode, setTopScorersMode] = useState<'goals' | 'assists'>('goals');
    const [topGoalsScorers,setTopGoalsScorers] = useState<TopGoalsScorers | undefined>(undefined)
    const [topAssistsScorers,setTopAssistsScorers] = useState<TopAssistsScorers | undefined>(undefined)



    const renderTopScorersInit = () => {
      if(topScorersMode === 'goals') {
        return renderTopGoalsScorers();
      } else if(topScorersMode === 'assists') {
        return renderTopAssistsScorers();
      }
    }


    const renderTopGoalsScorers = () => {
      return topGoalsScorers?.data.map(scorer=>{
        return (
          <li className="top-scorers__item">
            <span>{scorer.position}</span>
            <img className="top-scorers__photo" src={scorer.player.data.image_path} alt="player"/>
            <span className="top-scorers__name">{scorer.player.data.fullname}</span>
            <span className="top-scorers__amount">{scorer.goals}</span>
          </li>
        )
      })
    }

    const renderTopAssistsScorers = () => {
      return topAssistsScorers?.data.map(scorer=>{
        return (
          <li className="top-scorers__item">
            <span>{scorer.position}</span>
            <img className="top-scorers__photo" src={scorer.player.data.image_path} alt="player"/>
            <span className="top-scorers__name">{scorer.player.data.fullname}</span>
            <span className="top-scorers__amount">{scorer.assists}</span>
          </li>
        )
      })
    }

    const fetchTopScorers = async () => {
        if(!topGoalsScorers && !topAssistsScorers){
          const response = await fetch(`https://soccer.sportmonks.com/api/v2.0/topscorers/season/18369/aggregated?api_token=${apiKey}&include=aggregatedGoalscorers.player,aggregatedAssistscorers.player,aggregatedCardscorers.player`);
          const responseJSON = await response.json();
          setTopGoalsScorers(responseJSON.data.aggregatedGoalscorers);
          setTopAssistsScorers(responseJSON.data.aggregatedAssistscorers);
        }
      }
    
      useEffect(()=>{
        fetchTopScorers();
      })
  return (
    <TopScorersWrapper>
        <Title>{topScorersMode}</Title>
        <div className="top-scorers__switch">
            <button className={topScorersMode === 'goals' ? 'active' : ''} onClick={()=>setTopScorersMode('goals')}>Goals</button>
            <button className={topScorersMode === 'assists' ? 'active' : ''} onClick={()=>setTopScorersMode('assists')}>Assists</button>
        </div>
        <ul className="top-scorers__list">
            { !topGoalsScorers && !topAssistsScorers ? <li>loading</li> : renderTopScorersInit()}
        </ul>
    </TopScorersWrapper>
  );
};

const TopScorersWrapper = styled.article`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 1366px;
    min-height:calc(100vh - 55px);
    margin: 0 auto;
    padding: 15px;
    border-left: 2px solid var(--border);
    border-right: 2px solid var(--border);
    background-color: var(--white);
    .top-scorers {
      &__photo {
        width:50px;
        height:50px;
        margin: 0 10px;
      }
      &__list {
        display: flex;
        flex-direction: column;
        width:100%;
        border: 2px solid var(--border);
        @media only screen and (min-width:600px) {
          width: calc(50% - 7.5px);
        }
      }
      &__item {
        display: flex;
        align-items: center;
        padding: 8px 15px;
        font-size: 1.2rem;
        &:nth-child(even) {
          background-color: var(--bgc)
        }
      }
      &__amount {
        margin-left: auto;
      }
      &__switch {
        button {
                padding: 3px 8px;
                border:none;
                outline:none;
                background-color: transparent;
                color: var(--title);
                cursor: pointer;
                &.active {
                    font-weight: bold;
                    background-color: var(--border);
                }
                &:hover {
                    background-color: var(--title);
                    color: var(--border);
                }
            }
      }
    }

`

export default TopScorers;
