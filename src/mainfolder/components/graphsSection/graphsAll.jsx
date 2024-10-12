import { Stack } from "@mui/material";
import { FirstGraph } from "./firstGraph";
import { SecondGraph } from "./secondGraph";

export const GraphSection = () => {
  return (
    <Stack
      direction="row"
      sx={{ display: { xs: "block", sm: "block", md: "flex" } }}
    >
      <SecondGraph />
      <FirstGraph />
    </Stack>
  );
};
