import React from 'react'
import { Config, DAppProvider, Rinkeby } from "@usedapp/core"
import { Container } from '@mui/material'
import {Header} from "./components/Header"
import {Mint} from "./components/mint"

const config: Config = {
  readOnlyChainId: Rinkeby.chainId,
  readOnlyUrls: {
    [Rinkeby.chainId]: 'https://rinkeby.infura.io/v3/33ed6deb3e334814b16c59a446f6e4e4',
  },
}

function App() {
  return (
    <DAppProvider config={config}>
      <Header />
      <Container maxWidth="md">
        <Mint />
      </Container>
    </DAppProvider>
  );
}

export default App;
