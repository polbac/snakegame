import styled, {css} from "styled-components";
import { bodyFont } from '../../utils/fonts';

export const Button = styled.button`
    font-family: ${bodyFont};
    display: block;
    max-width:260px;
    font-size:11px;
    margin:20px auto;
    color: #fff;
    background: red;
    padding: 13px 25px;
    cursor:pointer;
    width:100%;

    :hover {
        background: #ccc;
    }
`;


export const HiperLink: any = styled.a`
    color: #fff;
    font-size:11px;
    text-decoration:none;
    cursor:pointer;

    ${(p: any) => p.likeButton && css`
        font-family: ${bodyFont};
        display: block;
        max-width:260px;
        font-size:11px;
        margin:20px auto;
        color: #fff;
        background: red;
        padding: 13px 25px;

        :hover {
            background: #ccc;
        }
    `}
`;