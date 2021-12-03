import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const About = () => {
  return (
    <div
      style={{
        textAlign: "center",
        position: "absolute",
        left: 0,
        right: 0,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      About our team and Organization
      <Box component={Paper}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          No Country
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          No Country
        </Typography>
      </Box>
    </div>
  );
};

export default About;
