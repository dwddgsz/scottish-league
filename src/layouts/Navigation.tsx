import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const Navigation = () => {
    return (
        <NavigationWrapper>
                <ul className="navigation__items-list">
                    <li className="navigation__item">
                        <Link className="navigation__link" to="/">Home</Link>
                    </li>
                    <li className="navigation__item">
                        <Link className="navigation__link" to="/top-scorers">Top scorrers</Link>
                    </li>
                    <li className="navigation__item">
                        <Link className="navigation__link" to="/contact">Contact</Link>
                    </li>
                </ul>
        </NavigationWrapper>
    );
};

const NavigationWrapper = styled.nav`
    height:55px;
    border-bottom: 2px solid var(--border);
    background-color: var(--white);
    .navigation {
        &__items-list {
            display:flex;
            justify-content: space-between;
            align-items: center;
            max-width:1366px;
            padding: 0 15px;
            height:100%;
            margin: 0 auto;
            border-left: 2px solid var(--border);
            border-right: 2px solid var(--border);
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

export default Navigation;
