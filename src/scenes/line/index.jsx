import { Box } from "@mui/material"
import Header from "../../components/Header"
import LineChart from "../../components/LineChart"

const Line = () => {
    return (


        <Box>
            <Header title={"LineChart"} subtitle={"Hello from LineChart"} />

            <Box height={"75vh"} margin={"20px"}>
                <LineChart></LineChart>
            </Box>
        </Box>
    )
}

export default Line;