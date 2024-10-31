import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    background-color: #1f1f1f;
    width: 100%;
    height: 72px;
    padding: 0 50px;
`;

export const Content = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
`;

export const Navigation = styled.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 72px;

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;

        hr{
            height: 24px;
            border: 1px solid #236451;
        }
    }
`;

export const HeaderLink = styled(Link)`
    color: ${(props) => (props.$isActive ? '#86B049' : '#fff')};
    border-bottom: ${(props) => props.$isActive && '1px solid #86B049'};
    text-decoration: none;
    font-size: 14px;
    transition: color .2s;
    
    &:hover{
        color: #86B049;
    }
`;

export const Options = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;

    p{
        color: #fff;
        line-height: 90%;
        font-weight: 300;

        span{
            font-weight: 700;
            color: #86B049;
        }
    }
`;

export const Logout = styled.button`
    color: #F9A825;
    text-decoration: none;
    font-weight: 700;
    background-color: transparent;
    border: none;
    transition: opacity .2s;

    &:hover{
        opacity: .7;
    }
`;

export const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
