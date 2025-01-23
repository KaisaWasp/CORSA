import { useState, FC } from "react";
import {
  TextField,
  IconButton,
  InputAdornment,
  SxProps,
  Theme,
} from "@mui/material";
import send from "../../../assets/images/svg/send.svg";

interface ICustomSendInput {
  sx?: SxProps<Theme>;
}

const CustomSendInput: FC<ICustomSendInput> = ({ sx }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      console.log("Отправлено сообщение:", message);
      setMessage("");
    }
  };

  return (
    <TextField
      fullWidth
      value={message}
      sx={sx}
      onChange={(e) => setMessage(e.target.value)}
      placeholder="Напишите что-нибудь..."
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleSend} edge="end">
              <img src={send} alt="Отправить" />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default CustomSendInput;
