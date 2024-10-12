import { Stack, Box } from "@mui/material";
import { HeroText } from "./heroText";
import "./hero.css";

export const HeroSection = () => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{ display: { xs: "block", sm: "block", md: "flex", lg: "flex" } }}
    >
      <Box>
        <HeroText />
      </Box>
      <Box
        // width={"50vw"}
        // height={"80vh"}
        sx={{
          display: "flex",
          flexDirection: "center",
          alignItems: "center",
          justifyContent: "center",
          height: {
            xs: "600px",
            sm: "1000px",
            md: "100%"
          },
        }}
      >
        <img
          src="/assets/Student.png"
          alt="student"
          className="image-width"
          width={"100%"}
        />
      </Box>
    </Stack>
  );
};
