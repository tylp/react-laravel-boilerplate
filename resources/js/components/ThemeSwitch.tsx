import React from 'react';
import { themeService } from '../services/services';
import styled from 'styled-components';

export const ThemeSwitch = () => {

    function toggleTheme() {
        themeService.toggleTheme();
        localStorage.setItem('theme', themeService.getName());
    }

    return (
        <Toggle onClick={toggleTheme}>
            <InnerCircle />
        </Toggle>
    )
}

const Toggle = styled.div`
    height: 2rem;
    width: 2rem;
    border-radius: 2rem;
    border: 2px solid ${props => props.theme.text};
    cursor: pointer;
`;

const InnerCircle = styled.span`
    display: block;
    height: 1.4rem;
    width: 1.4rem;
    border-radius: 1.6rem;
    background-color: ${props => props.theme.text};
    margin: 0 auto;
    margin-top: .28rem;
    transition: .2s;
    ${Toggle}:hover & {
        height: 1.2rem;
        width: 1.2rem;
        margin-top: .39rem;
    }
`;