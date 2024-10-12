import { Box, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Box>
      <hr />
      <Typography
        color="black"
        component="div"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          margin: "0px 0px 10px 0px",
          fontSize:"16px"
        }}
      >
        <p className="paragraph"> All rights reserved by @ Durga Rao</p>
      </Typography>
    </Box>
  );
};
