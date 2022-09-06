import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "sanserif" }} variant="h2">
         About My Vape Site
        </Typography>
        <Typography sx={{ marginTop: 20, fontFamily: "sanserif" }} variant="h4">
        HISTORY
        Established in 2022, Vodoo Vape is a progressive retail establishment in the electronic cigarette industry based out of California. Our personal philosophy is to give consumers more than what they pay for. With an uncompromising drive to exceed expectations, we are committed to help customers experience the best possible shopping experience. Furthermore, we invested in a strict, industry-leading age verification system to verify every single order for youth prevention in accordance with federal law.
        </Typography>
      </Box>
    </div>
  );
};

export default About;