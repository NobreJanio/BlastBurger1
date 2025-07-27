import styled, { keyframes } from 'styled-components';
import BannerHamburguer from '../../assets/banner-hamburguer.svg';
import Background from '../../assets/background.svg';
import { Link } from 'react-router-dom';

// Animações
const fadeInUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const slideIn = keyframes`
    from {
        opacity: 0;
        transform: translateX(-20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
`;

const pulse = keyframes`
    0% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
`;

export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #f8f9fa;

    background: linear-gradient(
        135deg,
        rgba(255,255,255, 0.9) 0%,
        rgba(248,249,250, 0.8) 50%,
        rgba(255,255,255, 0.9) 100%
    ),
    url('${Background}');
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
`;

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 450px;
    width: 100%;
    position: relative;
    overflow: hidden;

    background: linear-gradient(
        135deg,
        rgba(31, 31, 31, 0.9) 0%,
        rgba(0, 0, 0, 0.7) 50%,
        rgba(31, 31, 31, 0.9) 100%
    ),
    url('${BannerHamburguer}');
    background-position: center;
    background-size: cover;
    background-attachment: fixed;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            45deg,
            rgba(249, 168, 37, 0.1) 0%,
            transparent 50%,
            rgba(249, 168, 37, 0.1) 100%
        );
        animation: ${pulse} 4s ease-in-out infinite;
    }

    h1 {
        font-family: 'Road Rage', sans-serif;
        font-size: clamp(3rem, 8vw, 5rem);
        line-height: 0.8;
        color: #fff;
        text-align: center;
        z-index: 2;
        position: relative;
        text-shadow: 
            2px 2px 4px rgba(0, 0, 0, 0.5),
            0 0 20px rgba(249, 168, 37, 0.3);
        animation: ${fadeInUp} 1s ease-out;

        span {
            display: block;
            color: #F9A825;
            font-size: clamp(1rem, 3vw, 1.25rem);
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
            margin-top: 1rem;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
            animation: ${fadeInUp} 1s ease-out 0.3s both;
        }
    }

    @media (max-width: 768px) {
        height: 350px;
        
        h1 {
            padding: 0 1rem;
        }
    }
`;

export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    margin: 3rem auto;
    padding: 1.5rem 2rem;
    max-width: 1200px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 25px;
    box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.1),
        0 2px 8px rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.2);
    animation: ${fadeInUp} 0.8s ease-out 0.5s both;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(249, 168, 37, 0.1),
            transparent
        );
        transition: left 0.5s ease;
    }

    &:hover::before {
        left: 100%;
    }

    @media (max-width: 768px) {
        flex-wrap: wrap;
        gap: 1rem;
        margin: 2rem 1rem;
        padding: 1rem;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        gap: 0.5rem;
    }
`;

export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: ${(props) => 
        props.$isActiveCategory 
            ? 'linear-gradient(135deg, #F9A825 0%, #FFB74D 100%)' 
            : 'transparent'
    };
    color: ${(props) => (props.$isActiveCategory ? '#fff' : '#2c2c2c')};
    font-size: clamp(1rem, 2.5vw, 1.25rem);
    font-weight: ${(props) => (props.$isActiveCategory ? '600' : '500')};
    font-family: 'Poppins', sans-serif;
    padding: 0.75rem 1.5rem;
    border-radius: 20px;
    border: 2px solid ${(props) => (props.$isActiveCategory ? '#F9A825' : 'transparent')};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    z-index: 1;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    animation: ${slideIn} 0.6s ease-out;
    box-shadow: ${(props) => 
        props.$isActiveCategory 
            ? '0 4px 15px rgba(249, 168, 37, 0.4)' 
            : '0 2px 8px rgba(0, 0, 0, 0.1)'
    };

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #F9A825 0%, #FFB74D 100%);
        transition: left 0.3s ease;
        z-index: -1;
    }

    &:hover {
        transform: translateY(-2px);
        color: #fff;
        border-color: #F9A825;
        box-shadow: 0 6px 20px rgba(249, 168, 37, 0.4);

        &::before {
            left: 0;
        }
    }

    &:active {
        transform: translateY(0);
        transition: transform 0.1s ease;
    }

    @media (max-width: 480px) {
        width: 100%;
        text-align: center;
        padding: 0.875rem 1rem;
    }
`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    padding: 2rem;
    gap: 2rem;
    justify-content: center;
    max-width: 1400px;
    margin: 0 auto 4rem;
    animation: ${fadeInUp} 0.8s ease-out 0.7s both;

    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        padding: 1rem;
        gap: 1.5rem;
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
        padding: 1rem 0.5rem;
        gap: 1rem;
    }
`;
