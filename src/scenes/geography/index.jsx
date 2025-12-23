import { Box } from "@mui/material"
import Header from "../../components/Header"
import GeoChart from "../../components/GeoChart"


const Geography = () => {
    return (
        <Box>
            <Header title={"Geography"} subtitle={"Hello from GeoChart"}></Header>


            <Box height={"75vh"} margin={"20px"}>
                <GeoChart></GeoChart>
            </Box>
        </Box>
    )
}

export default Geography;

