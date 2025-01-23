import { SxProps, Theme } from "@mui/material";
import styled from "styled-components";

export const StyledMouseImg = styled.img`
  width: 9px;
  height: 18px;
`;

type TUseStyles = Record<string, SxProps>;

export const useStyles = (theme: Theme): TUseStyles => ({
  StyledContainer: {
    maxWidth: "1238px",
    width: "1238px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  StyledProjectNameLogoBox: {
    height: "152px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
  },

  StyledProjectNameLogo: {
    fontSize: "70px",
    fontWeight: "700",
    textTransform: "uppercase",
  },

  StyledCISBox: {
    width: "155px",
    height: "87px",
    background: "radial-gradient(380.75% 300.61% at 50% 50%, #ef331b 0%, #fff 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "20px",
    transform: "rotate(-2deg)",
    position: "absolute",
    bottom: 0,
  },

  StyledCISText: {
    textTransform: "uppercase",
    fontSize: "70px",
    fontWeight: "700",
  },

  StyledAgitation: {
    marginTop: "37px",
    fontSize: "15px",
    fontWeight: "700",
    textTransform: "uppercase",
  },

  StyledBoxContainer: {
    display: "flex",
    gap: "10px",
    marginTop: "31px",
  },

  StyledHowPlayButton: {
    width: "198px",
    height: "48px",
    background: "radial-gradient(380.75% 300.61% at 50% 50%, #ef331b 0%, #fff 100%)",
    borderRadius: "10px",
  },

  StyledButtonText: {
    color: theme.palette.colors.white,
    fontWeight: 700,
  },

  StyledCounterPlayers: {
    width: "198px",
    height: "48px",
    backgroundColor: theme.palette.colors.D9,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
  },

  StyledMouseBox: {
    display: "flex",
    gap: "10px",
    paddingTop: "112px",
  },

  StyledMoreText: {
    textTransform: "uppercase",
  },
});
