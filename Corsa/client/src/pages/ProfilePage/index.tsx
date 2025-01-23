import AppBar from "../../components/AppBar";
import Avatar from "../../components/Avatar";
import { Box, useTheme } from "@mui/material";
import ProfileInfo from "../../components/ProfileInfo";
import SendInput from "../../components/SendInput";
import MessengerField from "../../components/MessengerField";
import { useStyles } from "./style";

const ProfilePage = () => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <Box sx={styles.StyledBox}>
      <AppBar />
      <Box sx={styles.StyledMainContainer}>
        <Avatar />
        <ProfileInfo />
      </Box>
      <Box sx={styles.StyledMessengers}>
        <SendInput />
        <MessengerField />
        <MessengerField />
      </Box>
    </Box>
  );
};

export default ProfilePage;
