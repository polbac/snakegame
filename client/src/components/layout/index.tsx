import styled, { css } from "styled-components";
import { bodyFont } from '../../utils/fonts';

export const Wrapper = styled.main`
    font-family: ${bodyFont};
    width:100%;  
`;

export const Content: any = styled.div`
    padding:30px;

    ${(p: any) => p.login && css`
        padding: 0 30px;
        text-align:center;
        height:100vh;
        background-image: linear-gradient(to top, #ebf9f9, #ebf9f9);
    `}

    ${(p: any) => p.home && css`
        padding: 0 30px;
        text-align:center;
        height:100vh;
        background-image: linear-gradient(to top, #ebf9f9, #ebf9f9);
    `}
    ${(p: any) => p.over && css`
        padding: 0 30px;
        text-align:center;
        height:100vh;
        background-image: linear-gradient(to top, #ebf9f9, #ebf9f9);
    `}

     ${(p: any) => p.game && css`
        padding: 10px 20px;
        height:100vh;
        background-image: linear-gradient(to top, #ebf9f9, #ebf9f9);
    `}

     ${(p: any) => p.hall && css`
        padding: 10px 20px;
        height:100vh;
        background-image: linear-gradient(to top, #ebf9f9, #ebf9f9);
    `}
`;

export const CenterVertical = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    height:100vh;
`
