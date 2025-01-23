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
    gap: "14px",
  },

  StyledInput: {
    width: "903px",
    height: "60px",
    border: `1px solid ${"rgba(255, 255, 255, 0.02)"}`,
    borderRadius: "15px",

    ".MuiInputBase-root": {
      width: "903px",
      height: "60px",
      borderRadius: "15px",
      color: theme.palette.colors.white,
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
});
