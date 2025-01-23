import { SxProps, Theme } from "@mui/material";
import styled from "styled-components";

type TUseStyles = Record<string, SxProps>;

export const useStyles = (theme: Theme): TUseStyles => ({
  StyledBox: {
    width: "100vw",
    display: "flex",
    justifyContent: "center",
  },

  StyledContainer: {
    width: "1238px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "116px",
  },

  StyledTextBox: {
    width: "450px",
    textAlign: "center",
  },

  StyledText: {
    fontSize: "40px",
    fontWeight: "700",
    textTransform: "uppercase",
    wordSpacing: "0px",
    letterSpacing: "-0.5px",
  },

  StyledStepsBlock: {
    display: "flex",
    gap: "19px",
    marginTop: "50px",
  },
});
