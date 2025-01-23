import AppBar from "../../components/AppBar";
import { Box } from "@mui/material";
import MainSection from "../../components/MainSection";
import HowPlay from "../../components/HowPlay";
import AccordionSection from "../../components/AccordionsSection";
import NewSection from "../../components/NewsSection";
import MessegerSection from "../../components/MessegerSection";
import Footer from "../../components/Footer";

const ServersPage = () => {
  return (
    <Box>
      <AppBar />
      <MainSection />
      <HowPlay />
      <AccordionSection />
      <NewSection />
      <MessegerSection />
      <Footer />
    </Box>
  );
};

export default ServersPage;
