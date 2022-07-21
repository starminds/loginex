import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const Globalstyled = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
}
`;
