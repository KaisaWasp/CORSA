import { FC } from "react";
import { Box, useTheme, Typography, Button } from "@mui/material";
import { useStyles } from "./style";

interface IStep {
  num: string;
  text: string;
  buttonText: string;
}

const Step: FC<IStep> = ({ num, text, buttonText }) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <Box sx={styles.StyledBox}>
      <Box sx={styles.StyledStepBox}>
        <Typography sx={styles.StyledStepText}>ШАГ</Typography>
        <Box sx={styles.StyledNumberBox}>
          <Typography sx={styles.StyledNumber}>{num}</Typography>
        </Box>
      </Box>
      <Box sx={styles.StyledTextSection}>
        <Typography sx={styles.StyledText}>{text}</Typography>
      </Box>
      <Button sx={styles.StyledButton}>{buttonText}</Button>
    </Box>
  );
};

export default Step;
