import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ServerCard from "../ServerCard";
import { Box, useTheme } from "@mui/material";
import users from "../../assets/images/svg/user.svg";
import { useStyles, StyledPlayers } from "./style";

const ServerAccordion = () => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <Box sx={styles.StyledPosition}>
      <Accordion sx={styles.StyledAccordionContainer}>
        <AccordionSummary sx={styles.StyledSummary}>
          <Box sx={styles.StyledShadow} />
          <Box sx={styles.StyledHeaderBox}>
            <Typography sx={styles.StyledName}>SPR</Typography>
            <Box sx={styles.StyledPlayerss}>
              <StyledPlayers src={users} />
              <Typography sx={styles.StyledPlayers}></Typography>
              <Box sx={{ display: "flex", gap: "5px" }}>
                <Typography sx={styles.StyledTextPlayer}>игроков:</Typography>
                <Typography sx={styles.StyledTextNum}>1000</Typography>
              </Box>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails sx={styles.StyledDetails}>
          <Box sx={styles.StyledGridBox}>
            <ServerCard />
            <ServerCard />
            <ServerCard />
            <ServerCard />
            <ServerCard />
            <ServerCard />
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default ServerAccordion;
