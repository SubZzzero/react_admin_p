import { Box } from "@mui/material"
import Header from "../../components/Header"
import BarChart from "../../components/BarChart"
const Bar = () => {
    return (
        <Box>
            <Header title={"Bar"} subtitle={"Hello from BarChart"}></Header>

            <Box height={"75vh"} margin={"20px"} border={"1px solid grey"}>

                <BarChart></BarChart>
            </Box>
        </Box>
    )
}


export default Bar;