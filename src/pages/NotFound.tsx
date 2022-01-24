import styled from 'styled-components';
import Title from '../components/Title';

const NotFound = () => {
  return (
    <NotFoundWrapper>
        <Title>Not found</Title>
    </NotFoundWrapper>
  );
};

const NotFoundWrapper = styled.article`
    max-width: 1366px;
    min-height:calc(100vh - 55px);
    margin: 0 auto;
    padding: 15px;
    border-left: 2px solid var(--border);
    border-right: 2px solid var(--border);
    background-color: var(--white);
`

export default NotFound;
