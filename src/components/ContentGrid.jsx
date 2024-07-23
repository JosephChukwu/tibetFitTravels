import React, { useState } from 'react';
import { Grid, Typography, Box, Paper } from '@mui/material';

const ContentGrid = ({ content }) => {
  const [activeTab, setActiveTab] = useState(Object.keys(content)[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={2}>
        <Box>
          {Object.keys(content).map((tab) => (
            <Grid
              key={tab}
              onClick={() => handleTabClick(tab)}
              style={{
                cursor: 'pointer',
                // padding: '10px',
                marginBottom: '10px',
                // color: activeTab === tab ? '#0379a9' : 'black',
                display: "flex",
                justifyContent: "center"
              }}
            >
              <Typography variant="body2" style={{ color: activeTab === tab ? '#0379a9' : 'black' }}>{tab}</Typography>
            </Grid>
          ))}
        </Box>
      </Grid>

      <Grid item xs={12} sm={6}>
      {content[activeTab].map((paragraph, index) => (
        <Typography key={index} variant="body2" paragraph>
          {paragraph}
        </Typography>
      ))}
    </Grid>
    </Grid>
  );
};

export default ContentGrid;
