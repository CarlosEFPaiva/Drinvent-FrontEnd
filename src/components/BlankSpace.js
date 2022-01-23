import styled from "styled-components";

const BlankSpace = styled.section`
    width: 100%;
    height: 100vh;
    background-color: ${({ isTransparent }) => (isTransparent ? "rgba(255,255,255,0.0)" : "rgba(0,0,0,0.1)")};
    position: fixed;
    left: 0px;
    top: 0px;
    cursor: ${({ isLoading }) => (isLoading ? "wait" : "grab")};
    z-index: 1;
    display: ${({ isShown }) => (isShown ? "block" : "none")};
`;

export default BlankSpace;
