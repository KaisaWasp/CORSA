import { SxProps, Theme } from "@mui/material";
import styled from "styled-components";

type TUseStyles = Record<string, SxProps>;

export const useStyles = (theme: Theme): TUseStyles => ({
  StyledBox: {
    width: "400px",
    height: "250px",
    backgroundColor: "rgba(25, 25, 25, 0.7)",
    display: "flex",
    flexDirection: "column",
    borderRadius: "20px",
    padding: "32px 33px"
  },

  StyledStepBox: {
    display: "flex",
    gap: "4px",
    justifyContent: "center",
    alignItems: "center",
  },

  StyledStepText: {
    fontSize: "40px",
    fontWeight: "700",
  },

  StyledNumberBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "radial-gradient(380.75% 300.61% at 50% 50%, #ef331b 0%, #fff 100%)",
    width: "48px",
    height: "48px",
    borderRadius: "12px",
  },

  StyledNumber: {
    fontSize: "40px",
    fontWeight: "700",
  },

  StyledTextSection: {
    width: "328px",
    marginTop: "27px",
  },

  StyledText: {
    width: "100%",
    color: theme.palette.colors.C7,
    fontWeight: "400",
    textAlign: "center",
    wordSpacing: "0px",
    letterSpacing: "-0.5px",
  },

  StyledButton: {
    minHeight: "48px",
    widh: "334px",
    background: "radial-gradient(380.75% 300.61% at 50% 50%, #ef331b 0%, #fff 100%)",
    color: theme.palette.colors.white,
    fontWeight: "600",
    marginTop: "27px",
    borderRadius: "10px",
    padding: 0,  }
});
