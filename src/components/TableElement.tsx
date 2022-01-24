import styled from 'styled-components';
import {standing} from './Table';

interface TableElementWrapperProps {
    header?:boolean;
}

interface TableElementProps {
    header?:boolean;
    standing:standing;
}


const TableElement:React.FC<TableElementProps> = ({header,standing}) => {
    const {team_name} = standing;
    const {games_played,won,draw,lost,goals_scored,goals_against,points} = standing.overall;
  return (
        <TableElementWrapper header={header}>
            <h4 className="team-stats__name">{team_name}</h4>
            <span className="team-stats__played">{games_played}</span>
            <span className="team-stats__wins">{won}</span>
            <span className="team-stats__draws">{draw}</span>
            <span className="team-stats__losses">{lost}</span>
            <span className="team-stats__scored">{goals_scored}</span>
            <span className="team-stats__conceded">{goals_against}</span>
            <span className="team-stats__points">{points}</span>
        </TableElementWrapper>
    );
};

export const TableElementWrapper = styled.li<TableElementWrapperProps>`
    display:flex;
    color: var(--title);
    padding: 5px 15px;
    &:nth-child(even) {
        background-color: var(--bgc);
    }
    span {
        text-align:center;
        font-weight: ${(props) => props.header ? '500':''};
        @media only screen and (min-width:500px) {
                font-size:1.4rem;
            }
    }
    border-bottom: ${(props) => props.header ? '2px solid var(--border)' :'none'};  
    .team-stats {
        &__name {
            font-size:1.2rem;
            font-weight:400;
            width:50%;
            font-weight: ${(props) => props.header ? '500':''};
            @media only screen and (min-width:500px) {
                width:30%;
                font-size:1.4rem;
            }
        }
        &__played,&__wins,&__draws,&__losses,&__points {
            width:10%;
        }

        &__scored,&__conceded{
            display:none;
            width:10%;
            @media only screen and (min-width:500px) {
                display:block;
            }
        }
    }
`

export default TableElement;
