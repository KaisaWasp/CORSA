import { FC } from "react";
import { Box, TextField, useTheme } from "@mui/material";
import del from "../../assets/images/svg/delete.svg";
import save from "../../assets/images/svg/save.svg";
import { useStyles, StyledDelIcon, StyledSaveIcon } from "./styles";

interface IRenameForm {
  handleRename: () => void;
}

const RenameForm: FC<IRenameForm> = ({ handleRename }) => {
  const theme = useTheme();
  const styles = useStyles(theme);
  return (
    <Box sx={styles.StyledForm}>
      <TextField sx={styles.StyledInput} placeholder="Имя пользователя" />
      <Box sx={styles.StyledButtonsBox}>
        <StyledDelIcon src={del} />
        <StyledSaveIcon src={save} onClick={handleRename} />
      </Box>
    </Box>
  );
};

export default RenameForm;
