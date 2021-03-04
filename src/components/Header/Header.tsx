import styled from "@emotion/styled";

export const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <div className="header">
        <h1>Car</h1>
      </div>
    </HeaderStyled>
  );
};
const HeaderStyled = styled.div`
  & .header {
    background-color: #4553b3;
    color: #fff;
    padding: 1px;
    padding-left: 4rem;
    -webkit-box-shadow: 2px 6px 22px 9px rgba(0, 0, 0, 0.27);
    box-shadow: 2px 6px 22px 9px rgba(0, 0, 0, 0.27);
  }
`;
