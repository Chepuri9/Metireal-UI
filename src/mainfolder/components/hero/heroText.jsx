import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";

export const HeroText = () => {
  return (
    <Card variant="outlined" sx={{ maxWidth: "100%" }}>
      <Box sx={{ p: 2 }}>
        <Stack
          direction="row"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ fontWeight: 600 }}
          >
            LEARN AI DEVELOPMENT
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            <ShareIcon sx={{ fontSize: 35 }} color={"warning"} />
          </Typography>
        </Stack>
        <Typography
          variant="h3"
          sx={{
            fontWeight: "600",
            backgroundImage:
              "linear-gradient(207deg, rgba(176,5,57,1) 40%, rgba(222,27,85,1) 100%);",
            backgroundClip: "text",
            color: "transparent",
            // fontSize: { xs: "20px", sm: "20px" },
          }}
        >
          Post Graduate Programme in Data Science
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Typography gutterBottom variant="body2">
          Select type
        </Typography>
        <Stack direction="row" spacing={1}>
          <Chip color="primary" label="Soft" size="large" />
          {/* <Chip label="Medium" size="large" /> */}
          <Chip color="warning" label="Hard" size="large" />
        </Stack>
      </Box>
    </Card>
  );
};
