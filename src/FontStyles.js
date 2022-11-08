import { createGlobalStyle } from "styled-components";
import ChomskyWOFF from "./fonts/Chomsky-399c.woff";

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Chomsky';
        src: url(${ChomskyWOFF}) format('woff');
    }    
`;

export default FontStyles;
