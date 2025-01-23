import { SxProps, Theme } from "@mui/material";
import styled from "styled-components";
import cardShadow from "../../assets/images/svg/cardShadow.svg";

export const StyledPlayers = styled.img`
  width: 23px;
  height: 18px;
`;

type TUseStyles = Record<string, SxProps>;

export const useStyles = (theme: Theme): TUseStyles => ({
  StyledPosition: {
    display: "flex",
    justifyContent: "center",
  },

  StyledAccordionContainer: {
    width: "1238px",
    borderRadius: "20px",
    backgroundColor: "#181818",
  },

  StyledSummary: {
    height: "71px",
    backgroundImage: `url(${cardShadow})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderRadius: "20px",
    position: "relative",
  },

  StyledHeaderBox: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
  },

  StyledName: {
    fontSize: "25px",
    fontWeight: "700",
    color: theme.palette.colors.C7,
  },

  StyledPlayerss: {
    width: "162px",
    height: "42px",
    backgroundColor: "#181818",
    display: "flex",
    gap: "5px",
    justifyContent: "center",
    alignItems: "center",
    border: `1px solid ${"rgba(255, 255, 255, 0.02)"}`,
    borderRadius: "10px",
  },

  StyledTextPlayer: {
    textTransform: "uppercase",
    color: theme.palette.colors.A1,
  },

  StyledTextNum: {
    color: "#BEBEBE",
  },

  StyledDetails: {
    backgroundColor: "#181818",
    padding: "19px",
  },

  StyledGridBox: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    gap: "10px",
    margin: "0 auto",
  },

  StyledShadow: {
    position: "absolute",
    width: "1238px",
    height: "71px",
    backgroundColor: "rgba(22, 22, 22, 0.6)",
    borderRadius: "20px",
    top: 0,
    left: 0,
  },
});
