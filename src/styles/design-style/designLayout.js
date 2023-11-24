import styled from "styled-components";

const DesignLayout = styled.div`
  width: 100%;
  padding: 32px 64px;
  box-sizing: border-box;
  background: ${({ bgColor }) => bgColor};
  flex-direction: ${({ type }) => (type === "long" ? "unset" : "column")};
  // justify-content: center;
  align-items: ${({ type }) => (type === "long" ? "center" : "flex-start")};
  height: ${({ type }) => (type === "long" ? "unset" : "448px")};
  gap: 24px;
  display: flex;
  border-radius: 20px;

  .design-single {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }

  .design-single h2 {
    color: ${({ bgColor }) => (bgColor === "#fff" ? "#262626" : bgColor === "#FFF1CC" ? "#262626" : "white")};
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 150% */
  }

  .design-single p {
    color: ${({ type, bgColor }) => (bgColor === "#FFF1CC" ? "#262626" : bgColor === "#fff" ? "#666" : type === "long" ? "white" : "#DBDBDB")};
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 38.4px; /* 160% */
    width: 79%;
  }

  .design-single div {
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
  }

  .design-single div h3 {
    color: ${({ bgColor }) => (bgColor === "#fff" ? "#062983" : bgColor === "#FFF1CC" ? "#062983" : "white")};
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    text-transform: capitalize;
  }
`;

export default DesignLayout;
