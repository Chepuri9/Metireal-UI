import { Box, Container } from "@mui/material";
import NavBar from "../components/NavBar/navBar";
import "./landingPage.css";
import { HeroSection } from "../components/hero/heroSection";
import Accordions from "../components/Accordian/accordian";
import CardsDisplay from "../components/cards/cardsDisplay";
import TabsAll from "../components/Tabs/tabs";
import { GraphSection } from "../components/graphsSection/graphsAll";
import { Footer } from "../components/Footer/footer";

export const LandingPage = ({ setMode }) => {
  return (
    <Container>
      <Box>
        <NavBar setMode={setMode} />
        <HeroSection />
        <Accordions />
        <CardsDisplay />
        <TabsAll />
        <GraphSection />
        <Footer />
      </Box>
    </Container>
  );
};
