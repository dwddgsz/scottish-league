import styled from 'styled-components';

import Table from '../components/Table';
import LatestMatches from '../components/LatestMatches';
import Title from '../components/Title'

const Home = () => {
  return (
      <HomeWrapper>
        <div className="container-utility container-utility--table">
          <Title>Table</Title>
          <Table/>
        </div>
        <div className="container-utility container-utility--latest-matches">
          <Title>Latest Matches</Title>
          <LatestMatches/>
        </div>
      </HomeWrapper>
    );
};

const HomeWrapper = styled.article`
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
    @media only screen and (min-width:1200px) {
      flex-direction: row;
    }
    .container-utility {
      width:100%;
      @media only screen and (min-width:1200px) {
        width:50%;
      }
      &--table {
        @media only screen and (min-width:1200px) {
          margin-right:7.5px
        }
      }
      &--latest-matches {
        margin-top: 25px;
        @media only screen and (min-width:1200px) {
          margin-left:7.5px;
          margin-top: 0;
        }
      }
    }
`

export default Home;
