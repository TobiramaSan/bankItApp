import styled from "styled-components";

const SupportStyled = styled.div`
  position: absolute;
  right: ${({ right }) => right};
  width: 636px;
  transition: all 1s ease-in-out;
  background: var(--surface-default, #fff);
  box-shadow: 0px 8px 8px -4px rgba(6, 41, 131, 0.03), 0px 20px 24px -4px rgba(6, 41, 131, 0.08);
  height: 100vh;
  top: 0;
`;

export default SupportStyled;
