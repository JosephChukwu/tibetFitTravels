import React from 'react'
import { useTheme } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

const Footer = () => {
  const theme = useTheme();

  return (
    <div 
      style={{ 
       width: "100vw", 
        overflowX: "hidden", 
        backgroundColor: '#042a55', 
        color: 'white', 
        mt: "20vh",
        position: "relative", 
        alignItems:"center",
        justifyContent: "center",
      
      }}
    >
      <Grid 
        container 
        sx={{ 
          width: "100%", 
          height: "100%", 
          display: "flex", 
          flexDirection: { xs: "column", sm: "row" } 
        }}
      >
        <Grid 
          item 
          sx={{ 
            paddingX: { xs: "30px", sm: "150px" }, 
            width: { xs: "100%", sm: "33%" }, 
            my: "10vh" 
          }}
        >
          <Grid sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant='Ftitle'>ABOUT</Typography>
            <Grid sx={{ mt: "2vh", display: "flex", flexDirection: "column" }}>
              <Typography component={Link} to='/OurTeam' variant='Fbody' sx={{ textDecoration: "none" }}>Our Team</Typography>
              <Typography component={Link} to='/CompanyProfile' variant='Fbody' sx={{ textDecoration: "none" }}>Company Profile</Typography>
              <Typography component={Link} to='/Contact' variant='Fbody' sx={{ textDecoration: "none" }}>Contact</Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid 
          item 
          sx={{ 
            paddingX: { xs: "30px", sm: "150px" }, 
            width: { xs: "100%", sm: "33%" }, 
            my: { xs: "5vh", sm: "10vh" } 
          }}
        >
          <Grid sx={{ display: "flex", flexDirection: "column", mt: { xs: "6vh", sm: "0" } }}>
            <Typography variant='Ftitle'>CONTACT</Typography>
            <Typography variant='Ftitle'>TIBET F.I.T. TRAVEL</Typography>
            <Grid sx={{ mt: "2vh", display: "flex", flexDirection: "column" }}>
              <Typography variant='Fbody'>Road No. 4 Snowland Hotel, Lhasa, Tibet</Typography>
              <Typography variant='Fbody'>P.O.Box 850000</Typography>
              <Typography variant='Fbody' sx={{ mt: "2vh" }}>Contact Person</Typography>
              <Typography variant='Fbody'>Mr. Lhakpa Tsering or Mr. SAMDUP</Typography>
              <Typography variant='Fbody'>Tel: 0086-891- 6349239</Typography>
              <Typography variant='Fbody'>Fax: 0086-891- 6363825</Typography>
              <Typography variant='Fbody'>Mobile / wechat: 0086-891- 13989011658</Typography>
              <Grid sx={{ gap: "2vh", display: "flex", flexDirection: "column", mt: "2vh" }}>
                <Typography variant='Fbody'>E-mail: 30221738899@qq.com</Typography>
                <Typography variant='Fbody'>E-mail: tibetfit2024@gmail.com</Typography>
                <Typography variant='Fbody'>E-mail: fitsamdup@yahoo.com</Typography>
                <Typography variant='Fbody'>Website: www.tibetfit.com</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid 
          item 
          sx={{ 
            paddingX: { xs: "30px", sm: "150px" }, 
            width: { xs: "100%", sm: "33%" }, 
            my: { xs: "5vh", sm: "10vh" }, 
            display: "flex", 
            flexDirection: "column" 
          }}
        >
          <Typography variant='Ftitle'>TIBET</Typography>
          <Typography component={Link} to='/LhasaCityTour' variant='Fbody' sx={{ textDecoration: "none" }}>Lhasa city tour</Typography>
          <Typography component={Link} to='/LhasaEverestBase' variant='Fbody' sx={{ textDecoration: "none" }}>Lhasa -Everest base Camp Tour</Typography>
          <Typography component={Link} to='/LhasaKailash' variant='Fbody' sx={{ textDecoration: "none" }}>Lhasa to Mt Kailash trips</Typography>
          <Typography component={Link} to='/EasternTibet' variant='Fbody' sx={{ textDecoration: "none" }}>Eastern Tibet tour</Typography>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer;
















// import React from 'react'
// import { useTheme } from "@mui/material/styles";
// import { Box, Divider, Grid, Typography, Button } from "@mui/material";
// import { Link } from 'react-router-dom';




// const Footer = () => {
//   const theme = useTheme();


//   return (
//     <Grid container sx={{ width: "100vw",height: "100%", bgcolor: '#042a55', color: 'white',display: "flex", flexDirection: {xs: "column", sm: "row"},mt: "20vh",justifyContent: {xs: "none", sm: "space-between"} }}>

//     <Grid item sx={{paddingX: { xs: "30px", sm: "150px" },width: "100%", my: "10vh"}}>
//         <Grid sx={{ display: "flex", flexDirection: "column"}}>
//             <Typography variant='Ftitle'>ABOUT</Typography>
//             <Grid sx={{mt: "2vh", display: "flex", flexDirection: "column"}}>
//             <Typography component={Link} to='/OurTeam' variant='Fbody' sx={{textDecoration: "none"}}>Our Team</Typography>
//             <Typography component={Link} to='/CompanyProfile' variant='Fbody' sx={{textDecoration: "none"}}>Company Profile</Typography>
//             <Typography component={Link} to='/Contact' variant='Fbody' sx={{textDecoration: "none"}}>Contact</Typography>
//             </Grid>
//         </Grid>
//         <Grid sx={{ display: "flex", flexDirection: "column", mt: "6vh"}}>
//             <Typography variant='Ftitle'>CONTACT</Typography>
//             <Typography variant='Ftitle'>TIBET F.I.T. TRAVEL</Typography>
//             <Grid sx={{mt: "2vh", display: "flex", flexDirection: "column"}}>
//             <Typography variant='Fbody'>Road No. 4 Snowland Hotel, Lhasa, Tibet</Typography>
//             <Typography variant='Fbody'>P.O.Box 850000</Typography>
//             <Typography variant='Fbody' sx={{mt: "2vh"}}>Contact Person</Typography>
//             <Typography variant='Fbody'>Mr. Lhakpa Tsering or Mr. SAMDUP</Typography>
//             <Typography variant='Fbody'>Tel: 0086-891- 6349239</Typography>
//             <Typography variant='Fbody'>Fax: 0086-891- 6363825</Typography>
//             <Typography variant='Fbody'>Mobile / wechat: 0086-891- 13989011658</Typography>
//             <Grid sx={{gap: "2vh", display: "flex", flexDirection: "column", mt: "2vh"}}>
//             <Typography variant='Fbody'>E-mail: 30221738899@qq.com</Typography>
//             <Typography variant='Fbody'>E-mail: tibetfit2024@gmail.com</Typography>
//             <Typography variant='Fbody'>E-mail: fitsamdup@yahoo.com</Typography>
//             <Typography variant='Fbody'>Website: www.tibetfit.com</Typography>
//             </Grid>
//             </Grid>
//         </Grid>
//     </Grid>

//     <Grid item sx={{  paddingX: { xs: "30px", sm: "150px" },width: "100%", my: {xs: "5vh",sm: "10vh"}, gap: "2vh", display: "flex", flexDirection: "column"}}>
//     <Typography variant='Ftitle'>TIBET</Typography>
//     <Typography component={Link} to='/LhasaCityTour' variant='Fbody' sx={{textDecoration: "none"}}>Lhasa city tour</Typography>
//     <Typography component={Link} to='/LhasaEverestBase' variant='Fbody' sx={{textDecoration: "none"}}>Lhasa -Everest base Camp Tour</Typography>
//     <Typography component={Link} to='/LhasaKailash' variant='Fbody' sx={{textDecoration: "none"}}>Lhasa to Mt Kailash trips</Typography>
//     <Typography component={Link} to='/EasternTibet' variant='Fbody' sx={{textDecoration: "none"}}>Eastern Tibet tour</Typography>
//     </Grid>


//     </Grid>
//   )
// }

// export default Footer