import { SxProps, Theme } from "@mui/material";
import styled from "styled-components";

export const StyledLogo = styled.img`
  width: 45px;
  height: 44px;
`;

export const StyledLogoText = styled.img`
  width: 130px;
  height: 48px;
`;

type TUseStyles = Record<string, SxProps>;

export const useStyles = (theme: Theme): TUseStyles => ({
  StyledPosition: {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
  },

  StyledAppBarContainer: {
    maxWidth: "1238px",
    width: "1238px",
    display: "flex",
    justifyContent: "center",
  },

  StyledAppBar: {
    display: "flex",
    marginTop: "74px",
    width: "inherit",
  },

  StyledLogoContainer: {
    display: "flex",
    gap: "5px",
  },

  StyledList: {
    display: "flex",
    alignItems: "center",
    gap: "52px",
    marginLeft: "94px",
  },

  StyledLink: {
    textDecoration: "none",
    color: theme.palette.colors.C4,
    fontWeight: "600",
    fontSize: "17px",
    cursor: "pointer",
    whiteSpace: "nowrap",
  },

  StyledAutorizationButton: {
    width: "106px",
    height: "43px",
    background: "radial-gradient(380.75% 300.61% at 50% 50%, #ef331b 0%, #fff 100%)",
    marginLeft: "174px",
    color: theme.palette.colors.white,
    fontWeight: 600,
    borderRadius: "10px",
  },
});
