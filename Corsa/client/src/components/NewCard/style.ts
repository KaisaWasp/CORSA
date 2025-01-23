import { SxProps, Theme } from "@mui/material";
import car from "../../assets/images/svg/car.svg";

type TUseStyles = Record<string, SxProps>;

export const useStyles = (theme: Theme): TUseStyles => ({
  StyledCard: {
    width: "400px",
    height: "420px",
    padding: "30px",
    backgroundColor: "#181818",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
  },

  StyledImgBox: {
    width: "340px",
    height: "191px",
    backgroundImage: `url(${car})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },

  StyledTitleText: {
    fontSize: "25px",
    fontWeight: "700",
    marginTop: "23px",
  },

  StyledInfoText: {
    color: theme.palette.colors.C7,
    marginTop: "13px",
  },

  StyledButton: {
    width: "340px",
    height: "48px",
    background: "radial-gradient(380.75% 300.61% at 50% 50%, #ef331b 0%, #fff 100%)",
    color: theme.palette.colors.white,
    marginTop: "19px",
    borderRadius: "10px",
  },
});
