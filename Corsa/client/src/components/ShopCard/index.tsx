import { FC } from "react";
import { Box, useTheme, Button, Typography } from "@mui/material";
import shop from "../../assets/images/svg/shop.svg";
import { useStyles, StyledIcon } from "./style";

interface Shop {
  src: string;
  cardText: React.ReactNode; 
  priceText: string;
}

const ShopCard: FC<Shop> = ({ src, cardText, priceText }) => {
  const theme = useTheme();
  const styles = useStyles(theme);

  return (
    <Box sx={styles.StyledBox}>
      <Box sx={styles.StyledImg}>
        <img src={src} />
      </Box>
      <Box sx={styles.StyledTextBox}>
        <Typography sx={styles.StyledText}>{cardText}</Typography>
      </Box>
      <Button sx={styles.StyledButton}>
        <Box sx={styles.StyledButtonIconBox}>
          <StyledIcon src={shop} />
          <Typography sx={styles.StyledPriceText}>купить</Typography>
        </Box>
        <Typography sx={styles.StyledPriceText}>{priceText} месяц</Typography>
      </Button>
    </Box>
  );
};

export default ShopCard;
