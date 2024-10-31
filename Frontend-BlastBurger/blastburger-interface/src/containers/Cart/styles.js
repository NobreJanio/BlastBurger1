import styled from 'styled-components';
import BackgroundHeader from '../../assets/background-header.svg';
import Background from '../../assets/background.svg';

export const Container = styled.div`
    width: 100%;
    background: linear-gradient(
        rgba(255,255,255, 0.5),
        rgba(255,255,255, 0.5)),
     url('${Background}');
     background-size: cover;
    min-height: 100vh;
`;

export const Banner = styled.div`
    background: url('${BackgroundHeader}');
    background-color: #5C4033;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    height: 180px;

    img{
        height: 160px;
    }
`;

export const Title = styled.div`
    font-size: 32px;
    font-weight: 700;
    padding-bottom: 10px;
    color: #F9A825;
    text-align: center;
    position: relative;

    &::after{
        content: '';
        position: absolute;
        width: 60px;
        height: 5px;
        background-color: #F9A825;
        bottom: 0;
        left: calc(50% - 30px);
    }
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 30%;
    width: 100%;
    max-width: 1280px;
    padding: 40px;
    margin: 0 auto;
    gap: 40px;
`;
