import { Box, useTheme, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { themeTokens } from "../../theme";
import { mockDataTeam } from "../../data/mockDataTeam.js";
import Header from "../../components/Header.jsx"
import { useState } from "react";

import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';



const Team = () => {
    const theme = useTheme();
    const colors = themeTokens(theme.palette.mode)

    const keys = Object.keys(mockDataTeam[0])
    const columns = keys.map((key) => ({
        field: key,
        headerName: key.charAt(0).toUpperCase() + key.slice(1),
        flex: 1,
        // type: ["age", "id"].includes(key) ? "number" : "string"
    }));

    return <Box >
        <Header title={"Team"} subtitle={"Manage Team"} />

        <Box marginLeft={"20px"} >

            <DataGrid
                rows={mockDataTeam}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5, 10, 20]}

            />

        </Box>
    </Box >
}


export default Team;