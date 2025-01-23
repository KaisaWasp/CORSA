import { SxProps, Theme } from "@mui/material";

type TUseStyles = Record<string, SxProps>;

export const useStyles = (theme: Theme): TUseStyles => ({
  StyledPosition: {
    display: "flex",
    alignItems: "center",
    marginTop: "109px",
    flexDirection: "column",
  },

  StyledAccordionContainer: {
    width: "1238px",
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    gap: "13px",
    marginTop: "50px",
  },

  StyledText: {
    fontSize: "40px",
    fontWeight: "700",
  }
});
