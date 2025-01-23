import { FC } from "react";
import { useTheme, Box, Link, Button } from "@mui/material";
import logo from "../../assets/images/svg/Logo.svg";
import logoText from "../../assets/images/svg/LogoText.svg";
import { navigationLinks } from "./list";
import { useStyles, StyledLogo, StyledLogoText } from "./style";

const AppBar: FC = () => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <Box sx={styles.StyledPosition}>
      <Box sx={styles.StyledAppBarContainer}>
        <Box sx={styles.StyledAppBar}>
          <Box sx={styles.StyledLogoContainer}>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <StyledLogo src={logo} />
            </Box>
            <StyledLogoText src={logoText} />
          </Box>
          <Box sx={styles.StyledList}>
            {navigationLinks.map((item) => (
              <Link
                key={item}
                sx={{ ...styles.StyledLink, textTransform: "uppercase" }}
              >
                {item}
              </Link>
            ))}
          </Box>
          <Button sx={styles.StyledAutorizationButton}>Войти</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AppBar;
