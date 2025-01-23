import { SxProps, Theme } from "@mui/material";
import styled from "styled-components";

export const StyledAvatar = styled.img`
  width: 58px;
  height: 58px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.02);
`;

type TUseStyles = Record<string, SxProps>;

export const useStyles = (theme: Theme): TUseStyles => ({
  StyledContainer: {
    width: "1017px",
    height: "100px",
    border: `1px solid ${"rgba(255, 255, 255, 0.02)"}`,
    backgroundColor: "rgba(25, 25, 25, 0.7)",
    borderRadius: "15px",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
  },

  StyledLeftContent: {
    display: "flex",
    gap: "15px",
  },

  StyledTextBox: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },

  StyledName: {
    color: theme.palette.colors.white,
  },

  StyledMessenger: {
    fontSize: "17px",
    color: theme.palette.colors.C7,
  },
});
