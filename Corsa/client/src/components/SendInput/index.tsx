import { Box, useTheme } from "@mui/material";
import CustomSendInput from "../UI/CustomSendInput";
import avatar from "../../assets/images/svg/avatar.svg";
import { useStyles, StyledAvatar } from "./style";

const SendInput = () => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <Box sx={styles.StyledContainer}>
      <StyledAvatar src={avatar} />
        <CustomSendInput sx={styles.StyledInput} />
    </Box>
  );
};

export default SendInput;
