import styled, {css} from "styled-components";
import { bodyFont } from '../../utils/fonts';

export const Button = styled.button`
    font-family: ${bodyFont};
    display: block;
    max-width:260px;
    margin:20px auto;
    padding: 10px 25px 12px 25px;
    box-shadow: 2px 2px 0 0 #a0d0fe;
    background-color: #ffffff;
    border: solid 1px #3684c6;
    font-size: 17px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #3684c6;
    text-shadow: 1px 1px 0 #d1e8fc;
    cursor:pointer;
    width:100%;

    :active {
        background: #3684c6;
        color: #fff;
        outline:none;
    }
`;


export const HiperLink: any = styled.a`
    text-decoration:none;
    cursor:pointer;
    font-size: 15px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #4a90e2;

    ${(p: any) => p.likeButton && css`
        font-family: ${bodyFont};
        display: block;
        max-width:260px;
        margin:20px auto;
        padding: 10px 25px 12px 25px;
        box-shadow: 2px 2px 0 0 #a0d0fe;
        background-color: #ffffff;
        border: solid 1px #3684c6;
        font-size: 17px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #3684c6;
        text-shadow: 1px 1px 0 #d1e8fc;
        cursor:pointer;
        width:100%;

        :active {
            background: #3684c6;
            color: #fff;
            outline:none;
        }
    `}
`;