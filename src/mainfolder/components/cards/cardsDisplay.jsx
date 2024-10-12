import { Stack } from "@mui/material";
import MediaCard1 from "./card1";
import MediaCard2 from "./card2";
import MediaCard3 from "./card3";

const CardsDisplay = () => {
  return (
    <Stack
      direction="row"
      width={"100%"}
      gap={2}
      sx={{
        display: { xs: "block", sm: "flex", md: "flex", width: "100%" },
      }}
    >
      <MediaCard1 />
      <MediaCard2 />
      <MediaCard3 />
    </Stack>
  );
};
export default CardsDisplay;
