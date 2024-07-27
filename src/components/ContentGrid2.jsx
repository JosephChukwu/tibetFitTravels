import React, { useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';

const ContentGrid2 = ({ content }) => {
  const [activeTab, setActiveTab] = useState(Object.keys(content)[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12}>
        <Box>
        <Grid container spacing={2} direction={{ xs: 'column', sm: 'row', }} justifyContent={{ xs: 'center', sm: 'space-around' }}
        >

          {Object.keys(content).map((tab) => (
            <Grid
              key={tab}
              onClick={() => handleTabClick(tab)}
              style={{
                cursor: 'pointer',
                marginBottom: '10px',
                display: "flex",
                justifyContent: "center"
              }}
            >
              <Typography variant="body2" style={{ color: activeTab === tab ? '#0379a9' : 'black' }}>{tab}</Typography>
            </Grid>
          ))}
          </Grid>
        </Box>
      </Grid>

      <Grid item xs={12} sm={12}>
        {content[activeTab].map((section, index) => (
          <Box key={index} mb={4}>
            {section.text && (
              <Typography variant="body2" paragraph>
                {section.text}
              </Typography>
            )}
            {section.image && (
              <Box mt={2}>
                <img src={section.image} alt={`${activeTab} image ${index}`} style={{ width: '100%', height: 'auto' }} />
              </Box>
            )}
          </Box>
        ))}
      </Grid>
    </Grid>
  );
};

export default ContentGrid2;
