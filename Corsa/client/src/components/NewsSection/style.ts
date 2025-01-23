import { SxProps, Theme } from "@mui/material";
import car from "../../assets/images/svg/car.svg";

type TUseStyles = Record<string, SxProps>;

export const useStyles = (theme: Theme): TUseStyles => ({
  StyledPosition: {
    display: "flex",
    justifyContent: "center",
  },

  StyledContainer: {
    width: "1238px",
    marginTop: "106px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  StyledTitle: {
    fontSize: "40px",
    fontWeight: "700",
    textTransform: "uppercase",
  },

  StyledCardBox: {
    display: "flex",
    gap: "19px",
    marginTop: "50px",
  },
});
