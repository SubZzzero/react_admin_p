import { Box, useTheme, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { themeTokens } from "../../theme";
import { mockDataTeam } from "../../data/mockDataTeam.js";
import Header from "../../components/Header.jsx";

import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';

const Team = () => {
    const theme = useTheme();
    const colors = themeTokens(theme.palette.mode);

    const keys = Object.keys(mockDataTeam[0]);
    const columns = keys.map((key) => {
        if (key === "access") {
            return {
                field: key,
                headerName: "Access Level",
                flex: 1,
                renderCell: ({ row: { access } }) => (
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Box
                            sx={{
                                width: "60%",
                                padding: "8px 35px",
                                display: "flex",
                                alignItems: "center",

                                borderRadius: 1,
                                backgroundColor:
                                    access === "admin"
                                        ? colors.greenAccent[600]
                                        : access === "manager"
                                            ? colors.greenAccent[700]
                                            : colors.greenAccent[700],
                            }}
                        >
                            {access === "admin" && <SupervisorAccountOutlinedIcon />}
                            {access === "manager" && <SecurityOutlinedIcon />}
                            {access === "user" && <LockPersonOutlinedIcon />}
                            <Typography color={colors.grey[100]} sx={{ ml: 1, textTransform: "capitalize" }}>
                                {access}
                            </Typography>
                        </Box>
                    </Box>
                ),
            };
        } else {
            return {
                field: key,
                headerName: key.charAt(0).toUpperCase() + key.slice(1),
                flex: 1,
            };
        }
    });

    return (
        <Box>
            <Header title={"Team"} subtitle={"Manage Team"} />
            <Box marginLeft={"20px"}>
                <DataGrid
                    rows={mockDataTeam}
                    columns={columns}
                />
            </Box>
        </Box>
    );
};

export default Team;
