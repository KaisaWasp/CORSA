import { SxProps, Theme } from "@mui/material";
import styled from "styled-components";

export const StyledAvatar = styled.img`
  width: 215px;
  height: 217px;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.02);
`;

type TUseStyles = Record<string, SxProps>;

export const useStyles = (theme: Theme): TUseStyles => ({
  StyledContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "6px",
  },

  StyledAvatarBlock: {
    width: "255px",
    height: "300px",
    border: `1px solid ${"rgba(255, 255, 255, 0.02)"}`,
    backgroundColor: "rgba(25, 25, 25, 0.7)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    padding: "20px",
    borderRadius: "15px",
  },

  StyledButton: {
    borderRadius: "15px",
    width: "215px",
    height: "31px",
    background: "radial-gradient(380.75% 300.61% at 50% 50%, #ef331b 0%, #fff 100%)",
    color: theme.palette.colors.white,
  },

  StyledNickName: {
    fontSize: "20px",
    color: theme.palette.colors.white,
    position: "absolute",
    bottom: "14px",
    left: "50%",
    transform: "translateX(-50%)",
  },

  StyledChangeBlock: {
    width: "255px",
    height: "105px",
    border: `1px solid ${"rgba(255, 255, 255, 0.02)"}`,
    backgroundColor: "rgba(25, 25, 25, 0.7)",
    display: "flex",
    flexDirection: "column",
    gap: "19px",
    padding: "25px 0 25px 20px",
    borderRadius: "15px",
  },

  StyledSelectText: {
    color: theme.palette.colors.white,
  },

  StyledTitle: {
    color: theme.palette.colors.C7,
    textWrap: "nowrap",
  },

  StyledTextContainer: {
    width: "103px",
  },

  StyledMaincontainer: {
    display: "flex",
    gap: "16px",
  },
});
