import styled, { css } from "styled-components";
import { bodyFont } from '../../utils/fonts';

export const Wrapper = styled.main`
    font-family: ${bodyFont};
    width:100%;  
`;

export const Content: any = styled.div`
    padding:30px;

    ${(p: any) => p.home && css`
        padding: 40px 30px;
        text-align:center;
    `}
`;