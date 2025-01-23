import { SxProps, Theme } from "@mui/material";
import styled from "styled-components";

export const StyledDelIcon = styled.img`
  cursor: pointer;
`;

export const StyledSaveIcon = styled.img`
  cursor: pointer;
`;

type TUseStyles = Record<string, SxProps>;

export const useStyles = (theme: Theme): TUseStyles => ({
  StyledForm: {
    display: "flex",
    gap: "14px",
  },

  StyledInput: {
    width: "344px",
    height: "44px",
    border: `1px solid ${"rgba(255, 255, 255, 0.02)"}`,
    borderRadius: "15px",

    ".MuiInputBase-root": {
      width: "344px",
      height: "42px",
      borderRadius: "15px",
      color: theme.palette.colors.white,

      input: {
        padding: "1px 12px"
      },
    },

    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(255, 255, 255, 0.02)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(255, 255, 255, 0.02)",
      },
      "&.Mui-focused fieldset": {
        borderColor: theme.palette.colors.A2,
      },
      "& input::placeholder": {
        color: theme.palette.colors.A2,
      },
    },
  },

  StyledButtonsBox: {
    display: "flex",
    gap: "19px",
    alignItems: "center",
  },
});
