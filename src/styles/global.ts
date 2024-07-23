import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
${reset}
* {
    margin: 0;
    padding: 0;
    font-family: 'Pretendard-Regular' !important;
  }
`
export default globalStyles;