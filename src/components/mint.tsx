import {useEthers} from "@usedapp/core"
import networkMapping from "../chain-info/build/deployments/map.json"
import { constants, ethers } from "ethers"
import { Container, Box} from "@mui/material"

export const Mint = () => {

    const {chainId} = useEthers()
    const { account } = useEthers();

    const NFTaddress = chainId ? networkMapping[chainId]["SimpleNftLowerGas"][0] : constants.AddressZero

    return (
            <Box>
               <div>
               <h3>Connected wallet adress is</h3>
                </div> 
            </Box>
    )
}