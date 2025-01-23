import { Box } from "@mui/material";
import AppBar from "../../components/AppBar";
import ShopCard from "../../components/ShopCard";
import lite from "../../assets/images/svg/Frame 32.svg";
import vip from "../../assets/images/svg/vip.svg";
import premium from "../../assets/images/svg/premium.svg";
import sponsor from "../../assets/images/svg/sponsor.svg";

const ShopPage = () => {
  return (
    <>
      <AppBar />
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          width: "100vw",
          justifyContent: "center",
          marginTop: "140px",
        }}
      >
        <ShopCard
          src={lite}
          cardText={
            <>
              • Роль "Lite" с отображением выше, чем у обычных пользователей{" "}
              <br />• Доступ к зарезервированным автомобилям на серверах уровня
              "Lite".
            </>
          }
          priceText="199 ₽"
        />
        <ShopCard
          src={vip}
          cardText={
            <>
              • Все возможности роли "Lite"
              <br />
              • Доступ к зарезервированным автомобилям на серверах уровня "VIP"
              <br />
              • Доступ к закрытым серверам уровня "VIP"
              <br />• Приоритет поддержки
            </>
          }
          priceText="499 ₽"
        />
        <ShopCard
          src={premium}
          cardText={
            <>
              • Роль "Lite" с отображением выше, чем у обычных пользователей{" "}
              <br />
              • Доступ к зарезервированным автомобилям на серверах уровня
              "Lite".
              <br />
            </>
          }
          priceText="999 ₽"
        />
        <ShopCard
          src={sponsor}
          cardText={
            <>
              • Все возможности роли "Premium"
              <br />
              • Поддержка проекта
              <br />
            </>
          }
          priceText="1399 ₽"
        />
      </Box>
    </>
  );
};

export default ShopPage;
