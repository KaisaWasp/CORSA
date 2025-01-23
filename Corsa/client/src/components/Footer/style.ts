import { SxProps, Theme } from "@mui/material";
import styled from "styled-components";

type TUseStyles = Record<string, SxProps>;

export const useStyles = (theme: Theme): TUseStyles => ({
  StyledFooter: {
    width: "100%",
    backgroundColor: "#191919",
    display: "flex",
    justifyContent: "center",
  },

  StyledContainer: {
    width: "1238px",
    height: "149px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  StyledBox: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  StyledLeftText: {
    fontWeight: "400",
    color: theme.palette.colors.A3,
  },

  StyledRightText: {
    width: "250px",
    fontWeight: "400",
    color: theme.palette.colors.A2,
  },
});
