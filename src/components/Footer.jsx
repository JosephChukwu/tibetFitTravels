import React from 'react'
import { useTheme } from "@mui/material/styles";
import { Box, Divider, Grid, Typography, Button } from "@mui/material";
import { Link } from 'react-router-dom';




const Footer = () => {
  const theme = useTheme();


  return (
    <Grid container sx={{ width: "100vw",height: "100vh", bgcolor: '#042a55', color: 'white',display: "flex", flexDirection: {xs: "column", sm: "row"},mt: "20vh" }}>

    <Grid item sx={{paddingX: { xs: "30px", sm: "150px" },width: "100%", my: "10vh"}}>
        <Grid sx={{ display: "flex", flexDirection: "column"}}>
            <Typography variant='Ftitle'>ABOUT</Typography>
            <Grid sx={{mt: "2vh", display: "flex", flexDirection: "column"}}>
            <Typography component={Link} to='/OurTeam' variant='Fbody' sx={{textDecoration: "none"}}>Our Team</Typography>
            <Typography component={Link} to='/CompanyProfile' variant='Fbody' sx={{textDecoration: "none"}}>Company Profile</Typography>
            <Typography component={Link} to='/Contact' variant='Fbody' sx={{textDecoration: "none"}}>Contact</Typography>
            </Grid>
        </Grid>
        <Grid sx={{ display: "flex", flexDirection: "column", mt: "6vh"}}>
            <Typography variant='Ftitle'>CONTACT</Typography>
            <Typography variant='Ftitle'>TIBET F.I.T. TRAVEL</Typography>
            <Grid sx={{mt: "2vh", display: "flex", flexDirection: "column"}}>
            <Typography variant='Fbody'>Road No. 4 Snowland Hotel, Lhasa, Tibet</Typography>
            <Typography variant='Fbody'>P.O.Box 850000</Typography>
            <Typography variant='Fbody' sx={{mt: "2vh"}}>Contact Person</Typography>
            <Typography variant='Fbody'>Mr. Lhakpa Tsering or Mr. SAMDUP</Typography>
            <Typography variant='Fbody'>Tel: 0086-891- 6349239</Typography>
            <Typography variant='Fbody'>Fax: 0086-891- 6363825</Typography>
            <Typography variant='Fbody'>Mobile / wechat: 0086-891- 13989011658</Typography>
            </Grid>
        </Grid>
    </Grid>


    </Grid>
  )
}

export default Footer