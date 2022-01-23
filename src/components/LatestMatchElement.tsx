import {latestMatch} from './LatestMatches';

import styled from 'styled-components';

const LatestMatchElement:React.FC<{match:latestMatch}> = ({match}) => {
    const {id,localTeam,visitorTeam} = match;
    const {date} = match.time.starting_at;
    const {ht_score,ft_score,localteam_score,visitorteam_score} = match.scores;


  return (
    <LatestMatchElementWrapper>

        <span className="match__date">{date}</span>
        <div className="match__info">
        <figure className="match__team match__team">
            <figcaption className={localteam_score > visitorteam_score ? 'winner' : ''}>{localTeam.data.name}</figcaption>
            <img className="match__logo  match__logo--home" src={localTeam.data.logo_path} alt="team-logo"></img>
        </figure>

        <p className="match__score">
            <span className="match__full-time">{ft_score}</span>
            <span className="match__half-time">{ht_score}</span>
        </p>

        <figure className="match__team match__team--away">
            <img className="match__logo match__logo--away" src={visitorTeam.data.logo_path} alt="team-logo"></img>
            <figcaption className={localteam_score < visitorteam_score ? 'winner' : ''}>{visitorTeam.data.name}</figcaption>
        </figure>
        
        </div>

        <button className="match__more">
            More
        </button>
    </LatestMatchElementWrapper>
    );
};

const LatestMatchElementWrapper = styled.li`
    display:flex;
    align-items:center;
    padding:13px 15px;
    border-bottom: 2px solid var(--border);
    color: var(--title);
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
            @media only screen and (min-width:600px) {
                flex-direction: row;
            }
        }
        &__team {
            display:flex;
            align-items: center;
            @media only screen and (min-width:600px) {
                width:150px;
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
        }
    }
`


export default LatestMatchElement;
