import { SxProps, Theme } from "@mui/material";
import styled from "styled-components";

export const StyledBootsy = styled.img`
  width: 237px;
  height: 114px;
`;

type TUseStyles = Record<string, SxProps>;

export const useStyles = (theme: Theme): TUseStyles => ({
  StyledContainer: {
    width: "1238px",
    marginTop: "106px",
    display: "flex",
    gap: "124px",
    marginBottom: "166px",
  },

  StyledTitle: {
    width: "440px",
    fontSize: "40px",
    fontWeight: "700",
    textTransform: "uppercase",
  },

  StyledButtonsBox: {
    display: "flex",
    gap: "16px",
  },

  StyledButton: {
    width: "237px",
    height: "114px",
    borderRadius: "15px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
});
