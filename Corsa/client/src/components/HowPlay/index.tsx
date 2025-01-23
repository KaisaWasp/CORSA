import { FC } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import Step from "../Step";
import IFrame from "../../components/IFrame";
import { useStyles } from "./style";

const HowPlay: FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme);

  const textStepOne = `Купить и установить лицензионную Assetto Corsa
  (если она уже есть -> 2 шаг)`;
  const textStepTwo = `Установи и настрой Content Manager (нажми на кнопку снизу и установи его)`;
  const textStepThree = `Заходи на наш Discord сервер, скачивай модельки,  знакомься и получай удовольствие!`;
  
  return (
    <Box sx={styles.StyledBox}>
      <Box sx={styles.StyledContainer}>
        <Box sx={styles.StyledTextBox}>
          <Typography sx={styles.StyledText}>
            Не разобрался как начать играть?
          </Typography>
        </Box>
        <Box sx={styles.StyledStepsBlock}>
          <Step num={"1"} text={textStepOne} buttonText="ИГРА В STEAM" />
          <Step num={"2"} text={textStepTwo} buttonText="CКАЧАТЬ СM" />
          <Step num={"3"} text={textStepThree} buttonText="dISCORD SERVER" />
        </Box>
        <IFrame />
      </Box>
    </Box>
  );
};

export default HowPlay;
