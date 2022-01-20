import React from 'react';
import styled from 'styled-components'

const NavigationWrapper = styled.nav`
    height:55px;
    border-bottom: 2px solid var(--bgc);
    .navigation {
        &__items-list {
            display:flex;
            justify-content: space-between;
            align-items: center;
            max-width:1366px;
            padding: 0 15px;
            height:100%;
            margin: 0 auto;
            border-left: 2px solid var(--bgc);
            border-right: 2px solid var(--bgc);
            @media only screen and (min-width:360px) {
               justify-content: flex-start;
            }
        }
        &__item {
            @media only screen and (min-width:360px) {
                &:not(:first-child) {
                    margin-left:10px;
                } 
            }
        }
        &__link {
            font-size:1.5rem;
            color: var(--text);
            &:hover {
                color: var(--title);
            }
        }
    }
`

const Navigation = () => {
    return (
        <NavigationWrapper>
                <ul className="navigation__items-list">
                    <li className="navigation__item">
                        <a className="navigation__link" href="#">Home</a>
                    </li>
                    <li className="navigation__item">
                        <a className="navigation__link" href="#">Matches</a>
                    </li>
                    <li className="navigation__item">
                        <a className="navigation__link" href="#">Top scorrers</a>
                    </li>
                </ul>
        </NavigationWrapper>
    );
};


export default Navigation;
