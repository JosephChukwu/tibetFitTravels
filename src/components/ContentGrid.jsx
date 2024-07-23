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
                color: activeTab === tab ? '#0379a9' : 'black',
                display: "flex",
                justifyContent: "center"
              }}
            >
              <Typography variant="h6">{tab}</Typography>
            </Grid>
          ))}
        </Box>
      </Grid>

      <Grid item xs={12} sm={6}>
          <Typography variant="body2">{content[activeTab]}</Typography>
      </Grid>
    </Grid>
  );
};

export default ContentGrid;
