import styled from 'styled-components';

const Title:React.FC = ({children}) => (<TitleWrapper>{children}</TitleWrapper>);

const TitleWrapper = styled.h2`
    padding-left:15px;
    font-size: 2rem;
    font-weight: 500;
    color: var(--title);
`

export default Title;
