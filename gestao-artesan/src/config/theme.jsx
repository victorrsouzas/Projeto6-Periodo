import { createTheme } from "@mui/material";
import { ptBR } from "date-fns/locale";
import darkScrollbar from "@mui/material/darkScrollbar"
import LightScrollbar from '../component/LightScrollbar'

let theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#7B442A",
      light: "#16679A",
      medium:"#EAF6FF",
      font:"#8AB3CC",
    },
    secondary: {
      main: "#7B442A",
      light:"#F5FBFF",
      medium:"#0899BA",
    },
  },
  shadows: {
    0: "0px 0px 0px rgba(133, 157, 177,0.2);",
    1: "0px 2px 10px rgba(133, 157, 177,0.2);",
    8: "0px 2px 10px rgba(133, 157, 177,0.2);",
    24: "0px 2px 10px rgba(133, 157, 177,0.2);",
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
}, ptBR);

theme = createTheme(theme, {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: theme.palette.mode === 'dark' ? darkScrollbar() : LightScrollbar(),
      },
    },
    MuiMenu:{
      styleOverrides:{
        list:{
          maxHeight: "205px",
        }
      }
    },
    MuiInputLabel:{
      styleOverrides:{
        root:{
          color:theme.palette.primary.dark
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides:{
        notchedOutline:{
          borderColor:theme.palette.primary.main,
          "&:hover":{
            borderColor:theme.palette.primary.main
          },
        },
        input:{
          color: theme.palette.secondary.dark,
          '&::placeholder': {
            color: theme.palette.secondary.dark
          }
        }
      },
    }
  },
})

export {
  theme
}
