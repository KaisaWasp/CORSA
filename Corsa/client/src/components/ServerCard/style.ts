import { SxProps, Theme } from "@mui/material";
import card from "../../assets/images/svg/cardSPR.svg";
import cardShadow from "../../assets/images/svg/cardShadow.svg";
import styled from "styled-components";

export const StyledCopyIcon = styled.img`
  width: 19px;
  height: 24px;
  cursor: pointer;
`;

export const StyledPlayArrow = styled.img`
  width: 16px;
  height: 14px;
`;

type TUseStyles = Record<string, SxProps>;

export const useStyles = (theme: Theme): TUseStyles => ({
  StyledCard: {
    padding: "15px",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  StyledContainer: {
    width: "393px",
    height: "165px",
    backgroundImage: `url(${cardShadow})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative",

    "&:hover": {
      backgroundImage: `url(${card})`,
    },
  },

  StyledShadow: {
    position: "absolute",
    width: "393px",
    height: "165px",
    backgroundColor: "rgba(22, 22, 22, 0.6)",
    borderRadius: "15px",
  },

  StyledHeader: {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
  },

  StyledHeaderText: {
    fontWeight: "600",
    color: theme.palette.colors.D9,
  },

  StyledFooter: {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    // marginTop: "60px",
  },

  StyledTextBox: {
    display: "flex",
    flexDirection: "column",
  },

  StyledNowPlay: {
    fontWeight: "600",
    color: theme.palette.colors.white,
  },

  StyledCounterBox: {
    display: "flex",
  },

  StyledOnlineNumber: {
    color: theme.palette.colors.white,
    fontWeight: "600",
  },

  StyledCounter: {
    color: theme.palette.colors.A1,
  },

  StyledButton: {
    minWidth: "10px",
    width: "36px",
    maxHeight: "36px",
    backgroundColor: "rgba(30, 30, 30, 0.5)",
    borderRadius: "7px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 0,
    border: `1px solid ${"rgba(255, 255, 255, 0.02)"}`,
  },
});
