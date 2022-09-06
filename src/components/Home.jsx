import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/vapes"
          sx={{ 
            marginTop: 20, 
            background: "black", width:500, 
            height:450, }}
            variant="contained"
        >
          <Typography variant="h3">TAP and see my PICTURES </Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;