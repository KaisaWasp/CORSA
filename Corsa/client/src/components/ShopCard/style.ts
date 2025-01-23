import { SxProps, Theme } from "@mui/material";
import styled from "styled-components";

export const StyledIcon = styled.img`
  width: 18px;
  height: 18px;
`;

type TUseStyles = Record<string, SxProps>;

export const useStyles = (theme: Theme): TUseStyles => ({
  StyledBox: {
    width: "355px",
    height: "409px",
    borderRadius: "20px",
    backgroundColor: "rgba(22, 22, 22, 0.6)",
    border: `1px solid ${"rgba(255, 255, 255, 0.02)"}`,
    padding: "32px",
    position: "relative",
  },

  StyledImg: {
    width: "291px",
    height: "173px",
    borderRadius: "20px",
    border: `1px solid ${"rgba(255, 255, 255, 0.25)"}`,
    marginBottom: "14px",
  },

  StyledTextBox: {
    width: "291px",
    // marginBottom: "42px",
  },

  StyledText: {
    color: theme.palette.colors.C7,
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "1.2",
  },

  StyledButton: {
    width: "291px",
    height: "48px",
    background: "radial-gradient(380.75% 300.61% at 50% 50%, #ef331b 0%, #fff 100%)",
    color: theme.palette.colors.white,
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    gap: "8px",
    position: "absolute",
    bottom: "32px",
  },

  StyledButtonIconBox: {
    display: "flex",
    alignItems: "center",
    gap: "7px",
  },

  StyledPriceText: {
    color: theme.palette.colors.white,
    fontSize: "15px",
    fontWeight: "700",
  },
});
