import { useState } from "react";
import { Box, useTheme, Typography, Button, Link } from "@mui/material";
import RenameForm from "../RenameForm";
import rename from "../../assets/images/svg/rename.svg";
import { profileInfoData } from "./list";
import { useStyles, StyledRenameIcon } from "./style";

const ProfileInfo = () => {
  const theme = useTheme();
  const styles = useStyles(theme);

  const [isRename, setIsRename] = useState(false);

  const handleRename = () => {
    setIsRename(false);
  };

  return (
    <Box sx={styles.StyledContainer}>
      <Box sx={styles.StyledHeader}>
        <StyledRenameIcon src={rename} onClick={() => setIsRename(true)} />
      </Box>
      <Box sx={styles.StyledRegistrationBlock}>
        <Typography sx={styles.StyledText}>Регестрация:</Typography>
        <Typography
          sx={{ ...styles.StyledText, color: theme.palette.colors.white }}
        >
          27.07.2024
        </Typography>
      </Box>
      {isRename ? (
        <Box sx={styles.StyledFormBlock}>
          <Box sx={styles.StyledColumn}>
            {profileInfoData.map((item, index) => (
              <Box key={index} sx={styles.StyledFormBlock}>
                <Typography sx={styles.StyledText}>{item.title}:</Typography>
                <RenameForm handleRename={handleRename} />
              </Box>
            ))}
            <Box sx={styles.StyledFooter}>
              <Typography sx={styles.StyledText}>
                Сообщений на форуме:
              </Typography>
              <Typography
                sx={{ ...styles.StyledText, color: theme.palette.colors.white }}
              >
                444
              </Typography>
            </Box>
          </Box>
        </Box>
      ) : (
        <Box sx={styles.StyledInfoBox}>
          {profileInfoData.map((item, index) => (
            <Box key={index} sx={styles.StyledItemBlock}>
              <Typography sx={styles.StyledText}>{item.title}:</Typography>
              <Button sx={styles.StyledButton}>
                <Link href={item.href} sx={styles.StyledLinkText}>
                  {item.linkText}
                </Link>
              </Button>
            </Box>
          ))}
          <Box sx={styles.StyledFooter}>
            <Typography sx={styles.StyledText}>Сообщений на форуме:</Typography>
            <Typography
              sx={{ ...styles.StyledText, color: theme.palette.colors.white }}
            >
              444
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default ProfileInfo;
