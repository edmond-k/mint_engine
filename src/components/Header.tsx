import * as React from 'react';
import {useEthers} from "@usedapp/core"
import { AppBar, Toolbar, Typography,} from "@mui/material"
import { makeStyles } from "@mui/styles"
import Button from '@mui/material/Button';
import type {} from '@mui/lab/themeAugmentation';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            color: 'white',
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 5,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            height: 48,
            padding: '0 30px',
          },
        },
      },
    },
  });

const useStyles = makeStyles({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
    }
})
   

export const Header = () => {
    const classes = useStyles()
    const {account, activateBrowserWallet, deactivate} = useEthers()

    const isConnected = account !== undefined

    return (
        <ThemeProvider theme={theme}>
        <AppBar position="static" >
            <Toolbar className={classes.toolbar}>
                {isConnected ? (
                <Button 
                    onClick={deactivate}>
                    Disconnect
                </Button>
                ) : (
                    <Button 
                    onClick={() => activateBrowserWallet()}>
                    Connect
                    </Button>
                )
                }
            </Toolbar>
        </AppBar>
        </ThemeProvider>
    )


}