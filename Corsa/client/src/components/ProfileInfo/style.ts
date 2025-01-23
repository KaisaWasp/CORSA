import { SxProps, Theme } from "@mui/material";
import styled from "styled-components";

export const StyledRenameIcon = styled.img`
  width: 21px;
  height: 18px;
  cursor: pointer;
`;

type TUseStyles = Record<string, SxProps>;

export const useStyles = (theme: Theme): TUseStyles => ({
  StyledContainer: {
    width: "756px",
    height: "412px",
    borderRadius: "15px",
    border: `1px solid ${"rgba(255, 255, 255, 0.02)"}`,
    padding: "23px",
    backgroundColor: "rgba(25, 25, 25, 0.7)",
  },

  StyledHeader: {
    display: "flex",
    justifyContent: "flex-end",
  },

  StyledInfoBox: {
    display: "flex",
    gap: "9px",
    flexDirection: "column",
    marginTop: "16px",
  },

  StyledRegistrationBlock: {
    display: "flex",
    gap: "104px",
  },

  StyledItemBlock: {
    display: "flex",
    width: "337px",
    justifyContent: "space-between",
    alignItems: "center",
  },

  StyledColumn: {
    display: "flex",
    flexDirection: "column",
    gap: "9px",
    marginTop: "16px",
  },

  StyledFormBlock: {
    display: "flex",
    width: "609px",
    justifyContent: "space-between",
    alignItems: "center",
  },

  StyledText: {
    fontWeight: "500",
    color: theme.palette.colors.C7,
  },

  StyledButton: {
    width: "142px",
    height: "42px",
    borderRadius: "10px",
    border: `1px solid ${"rgba(25, 25, 25, 0.7)"}`,
    backgroundColor: "#181818",
    color: theme.palette.colors.white,
    padding: 0,
    textTransform: "none",
  },

  StyledBox: {
    display: "flex",
    flexDirection: "column",
  },

  StyledLinkText: {
    fontSize: "15px",
    fontWeight: "500",
    color: theme.palette.colors.white,
    textDecoration: "none",
  },

  StyledFooter: {
    display: "flex",
    gap: "34px",
    marginTop: "37px",
  },
});
