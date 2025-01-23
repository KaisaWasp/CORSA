import { SxProps, Theme } from "@mui/material";

type TUseStyles = Record<string, SxProps>;

export const useStyles = (theme: Theme): TUseStyles => ({
  StyledBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "100px",
  },

  StyledMainContainer: {
    display: "flex",
    gap: "6px",
    marginTop: "80px",
  },

  StyledMessengers: {
    marginTop: "17px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
});
