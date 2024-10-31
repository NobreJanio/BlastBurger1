import styled from 'styled-components';

export const ProductImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 20px;
`;

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 30px;
        color: #fff;
        border-radius: 3px;
        background-color: #4B2E14;
        transition: all .5s;
        border: none;

        &:hover{
            background-color: #5C4033;
        }
    }
`;

export const EmptyCart = styled.p`
    font-size:  20px;
    text-align: center;
    font-weight: bold;
`;

export const ProductTotalPrice = styled.p`
    font-weight: bold;
`;

export const TrashImage = styled.img`
    height: 20px;
    width: 20px;
    cursor: pointer;
`;
