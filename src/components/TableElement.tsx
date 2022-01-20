import styled from 'styled-components';

interface Props {
    header?:boolean;
}

const TableElement:React.FC<Props> = ({header}) => {
  return (
        <TableElementWrapper header={header}>
            <h4 className="team-stats__name">Name</h4>
            <span className="team-stats__played">G</span>
            <span className="team-stats__wins">W</span>
            <span className="team-stats__draws">D</span>
            <span className="team-stats__losses">L</span>
            <span className="team-stats__points">GS</span>
            <span className="team-stats__scored">GC</span>
            <span className="team-stats__conceded">P</span>
        </TableElementWrapper>
    );
};

export const TableElementWrapper = styled.li<Props>`
    display:flex;
    color: var(--title);
    padding: 5px 15px;
    &:nth-child(even) {
        background-color: var(--bgc);
    }
    span {
        text-align:center;
        font-weight: ${(props) => props.header ? '500':''};
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
