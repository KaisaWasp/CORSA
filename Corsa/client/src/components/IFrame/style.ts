import { SxProps, Theme } from "@mui/material";
import styled from "styled-components";

type TUseStyles = Record<string, SxProps>;

export const useStyles = (theme: Theme): TUseStyles => ({
  StyledBox: {
    display: "flex",
    gap: "109px",
    paddingLeft: "110px",
    marginTop: "47px",
  },

  StyledTextBox: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    justifyContent: "center",
    width: "280px",
  },

  StyledTitle: {
    fontSize: "40px",
    fontWeight: "700",
    textTransform: "uppercase",
    wordSpacing: "-2.9px",
    letterSpacing: "-2.4px",
  },

  StyledText: {
    color: theme.palette.colors.C7,
  },

  StyledVideoBox: {
    width: "739px",
    height: "440px",
    borderRadius: "20px",
    backgroundColor: "rgba(25, 25, 25, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  StyledVideo: {
    width: "683px",
    height: "382px",
    backgroundColor: "#212121",
    borderRadius: "20px",
  },

  StyledTitlePeach: {
    fontSize: "40px",
    fontWeight: "700",
    textTransform: "uppercase",
    wordSpacing: "-2.9px",
    letterSpacing: "-2.4px",
    color: theme.palette.colors.peach,
  },
});
