import React from "react";
import "./App.css";
import { createTheme, colors } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { LocalizatorProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { spacing } from '@mui/system'

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 480,
        md: 767,
        lg: 1200,
        xl: 1519,
      },

      spacing: { 
        xs: 0,
        sm: 1.8,
        md: 5,
        lg: 10.25,
        xl: 12.5,
      

  },
},
  palette: {
    primary: {
      main: '#f48982',
    },
    secondary: {
      main: '#fbdb89',
    },

    info:{
      main:'#918581'
    },

    background:{
      main:"#ffff"
      darker:"#f9f5f3"
    }

    typography:{
      fontFamily:['Nunito Sans, sans-serif'],
    
      h1:{
      fontSize: "10px",
      color:"#f9f5f3",
      fontWeight:"400",
      lineHeight: "16px"
      letterSpacing:"1.6px"
      }

      h2: {
        fontSize: "32.5px",
        color:'#f48982',
        fontWeight:"700",
        lineHeight: "63.375px"
        letterSpacing:"1.6px"
      },
      h3: {
        fontSize: "20px",
        color:'#f48982',
        fontWeight:"700"
        lineHeight:"22.4px"
        letterSpacing:"1.6px"
      },
      h4: {
        fontSize: "20px",
        color:'#f48982',
        fontWeight:"700"
        lineHeight::"27.3px",
        letterSpacing:"1.6px"
      },
      p: {
        fontSize: "12px",
        color: "#918581",
        letterSpacing: "1.6px",
      },
     

    }
  },);


  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
         </ThemeProvider>
    />
    >
    >
    >
)
