import { Box, useTheme, Button } from "@mui/material";
import vk from "../../assets/images/svg/vk.svg";
import dis from "../../assets/images/svg/dis.svg";
import boosty from "../../assets/images/svg/boosty.svg";
import { useStyles, StyledBootsy } from "./style";

const MessegerSection = () => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={styles.StyledContainer}>
        <Box sx={styles.StyledTitle}>будь с нами Присоединяйся!</Box>
        <Box sx={styles.StyledButtonsBox}>
          <Button
            sx={{ ...styles.StyledButton, backgroundImage: `url(${vk})` }}
          />
          <Button
            sx={{ ...styles.StyledButton, backgroundImage: `url(${dis})` }}
          />
          <Button sx={{ ...styles.StyledButton }}>
            <StyledBootsy src={boosty} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MessegerSection;
