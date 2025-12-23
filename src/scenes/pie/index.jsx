import { Box } from "@mui/material"
import Header from "../../components/Header"
import PieChart from "../../components/PieChart"


const Pie = () => {
    return (
        <Box>
            <Header title={"Pie"} subtitle={"Hello from PieChart"}></Header>

            <Box height={"75vh"} margin={"20px"}>
                <PieChart></PieChart>
            </Box>
        </Box>
    )
}

export default Pie;