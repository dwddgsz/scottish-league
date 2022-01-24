import styled from 'styled-components';
import {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';

const apiKey = process.env.REACT_APP_API_KEY;

interface MatchDetailsItem {
        formations: {
            localteam_formation: string,
            visitorteam_formation: string,
        },
        scores: {
            localteam_score: number,
            visitorteam_score: number,
            ht_score: string,
            ft_score: string,
        },
        time: {
            starting_at: {
                date: string,
            },
        },
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
        lineup: {
            data: [
                Player,
            ]
        },
        bench: {
            data: [
                Player,
            ]
        },
        events: {
            data: [
                Event,
            ],
        }
}

interface Player {
    player_name: string,
    team_id: number,
}

interface Event {
        type: string,
        player_name: string,
        minute: number,
        result: string,
        related_player_name: string,
}

const MatchDetails = () => {

    const [matchDetailsItems, setMatchDetailsItems] = useState<MatchDetailsItem | undefined>(undefined);
    const [isSquadsInfoActive, setIsSquadInfoActive] = useState(true);
    const [localTeamId,setLocalTeamId] = useState<number | undefined>(undefined);
    const [visitorTeamId,setvisitorTeamId] = useState<number | undefined>(undefined);
    const location = useLocation();


        const renderSquad = (squad:Player[],teamId:(number | undefined)) => {
            if(teamId) {
                return squad
                .filter(player=>{
                    return player.team_id === teamId
                })
                .map(player=>{
                    return <li>{player.player_name}</li>
                })
            }
        }

        const renderEvents = (events:Event[])=> {
            return events.map(event=>{
                if (event.type === 'substitution'){
                    return (
                        <li>
                        <span>{event.minute}` </span>
                        <span className="match__key-event">{event.type} </span>
                        <span>{event.player_name} for {event.related_player_name}</span>
                    </li>
                    )
                } else {
                    return (
                        <li>
                            <span>{event.minute}` </span>
                            <span className="match__key-event">{event.type} </span>
                            <span>{event.player_name} </span>
                            <span className="match__key-event">{event.result}</span>
                        </li>
                    )
                }
            })
        }
    
      const fetchMatchDetails = async () => {
        if(!matchDetailsItems){
          const response = await fetch(`https://soccer.sportmonks.com/api/v2.0/fixtures/${location.pathname.slice(7)}?api_token=${apiKey}&include=lineup,bench,localTeam,visitorTeam,localCoach,visitorCoach,events`);
          const responseJSON = await response.json();
          setMatchDetailsItems(responseJSON.data);
          setLocalTeamId(responseJSON.data.localteam_id);
          setvisitorTeamId(responseJSON.data.visitorteam_id);
        }
      }
    
      useEffect(()=>{
        fetchMatchDetails();
      })


  return (
    <MatchDetailsWrapper>
        { !matchDetailsItems ? (
           <div>loading</div>
        ) : (
            <>
            <div className="match__info">
                <figure className="match__team match__team--home">
                    <figcaption className="match__team-name">{matchDetailsItems.localTeam.data.name}</figcaption>
                    <img className="match__logo  match__logo--home" src={matchDetailsItems.localTeam.data.logo_path} alt="team-logo"></img>
                </figure>

                <p className="match__score">
                    <span className="match__full-time">{matchDetailsItems.scores.ft_score}</span>
                    <span className="match__half-time">{matchDetailsItems.scores.ht_score}</span>
                </p>

                <figure className="match__team match__team--away">
                    <img className="match__logo match__logo--away" src={matchDetailsItems.visitorTeam.data.logo_path} alt="team-logo"></img>
                    <figcaption className="match__team-name">{matchDetailsItems.visitorTeam.data.name}</figcaption>
                </figure>
            
            </div>

            <div className="match__switch">
                <button onClick={()=>setIsSquadInfoActive(true)} className={isSquadsInfoActive ? 'active' : ''}>Squads</button>
                <button onClick={()=>setIsSquadInfoActive(false)} className={isSquadsInfoActive ? '' : 'active'}>Events</button>
            </div>

            <div className={isSquadsInfoActive ? 'match__squads active' : 'match__squads'}>
                <div className="match__home-squad">
                    <h4>Formation</h4>
                    <p>{matchDetailsItems.formations.localteam_formation}</p>
                    <h4>Squad</h4>
                    <ul>
                        {renderSquad(matchDetailsItems.lineup.data,localTeamId)}
                    </ul>
                    <h4>Bench</h4>
                    <ul>
                        {renderSquad(matchDetailsItems.bench.data,localTeamId)}
                    </ul>
                </div>

                <div className="match__away-squad">
                <h4>Formation</h4>
                    <p>{matchDetailsItems.formations.visitorteam_formation}</p>
                    <h4>Squad</h4>
                    <ul>
                        {renderSquad(matchDetailsItems.lineup.data,visitorTeamId)}
                    </ul>
                    <h4>Bench</h4>
                    <ul>
                        {renderSquad(matchDetailsItems.bench.data,visitorTeamId)}
                    </ul>
                </div>
                
            </div>

            <div className={isSquadsInfoActive ? 'match__events' : 'match__events active'}>
                <ul>
                   {renderEvents(matchDetailsItems.events.data)}
                </ul>
            </div>
        </>
        )
        }
    </MatchDetailsWrapper>
  );
};


const MatchDetailsWrapper = styled.article`
    max-width: 1366px;
    min-height:calc(100vh - 55px);
    margin: 0 auto;
    padding: 15px;
    border-left: 2px solid var(--border);
    border-right: 2px solid var(--border);
    background-color: var(--white);
    .match {
        &__date {
            @media only screen and (min-width:600px) {
                width:90px;
            }
        }
        &__info {
            display:flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width:100%;
            margin-bottom:15px;
            @media only screen and (min-width:600px) {
                flex-direction: row;
            }
        }
        &__team {
            display:flex;
            align-items: center;
            @media only screen and (min-width:600px) {
                width:200px;
                justify-content: flex-end;
            }
            &--away {
                    @media only screen and (min-width:600px) {
                    justify-content: flex-start;
                }
            }
            .winner {
                font-weight: bold;
            }
        }
        &__team-name {
            margin: 7px 0;
            font-size: 1.4rem;
        }
        &__logo {
            width:45px;
            height:45px;
            display:none;
            @media only screen and (min-width:600px) {
                display:flex;
            }
            &--home {
                margin-left:10px;
            }
            &--away {
                margin-right:10px;
            }
        }  
        &__score {
            width:25px;
            margin: 0 20px;
            display:flex;
            flex-direction: column;
            text-align: center;
            background-color: var(--border);
        }          
        &__full-time {
                font-weight:bold;
                color: var(--title);
            }
        &__half-time {
            font-size:0.9rem;
        }
        &__more {
            margin-left:auto;
            padding: 3px 8px;
            border:none;
            font-size:1.3rem;
            background-color: var(--border);
            color: var(--title);
            cursor:pointer;
            &:hover {
                background-color: var(--title);
                color: var(--border);
            }
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
        &__squads {
            display:none;
            flex-direction: column;
            @media only screen and (min-width:600px) {
                flex-direction: row;
            }
            &.active {
                display:flex;
            }
            h4 {
                margin: 7px 0 4px;
                font-size:1.25rem;
            }
            li {
                margin-bottom:3px;
                font-size:1.1rem;
            }
            p {
                font-size:1.1rem;
            }
        }
        &__home-squad,&__away-squad {
            border: 2px solid var(--border);
            padding: 10px 15px;
            @media only screen and (min-width:600px) {
                width:50%;
            }
        }
        &__home-squad {
            @media only screen and (min-width:600px) {
                margin-right: 7.5px;
            }
        }
        &__away-squad {
            @media only screen and (min-width:600px) {
                margin-left: 7.5px;
                text-align:end;
            }
        }
        &__events {
            display:none;
            border: 2px solid var(--border);
            @media only screen and (min-width:600px) {
                width: calc(50% - 7.5px);
            }
            &.active {
                display:flex;
                flex-direction: column;
            }
            li {
                padding: 8px 15px;
            }
            li:nth-child(even) {
                background-color: var(--bgc);
            }
        }
        &__key-event {
            font-weight: bold;
        }
    }
`

export default MatchDetails;
