import { Box, useTheme, Typography } from "@mui/material";
import { DataGrid, useGridApiRef } from "@mui/x-data-grid";
import { themeTokens } from "../../theme";
import { mockDataTeam } from "../../data/mockDataTeam.js";
import Header from "../../components/Header.jsx";


import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import LockPersonOutlinedIcon from '@mui/icons-material/LockPersonOutlined';
import { useEffect } from "react";



const Team = ({ isCollapsed }) => {
    const apiRef = useGridApiRef();
    console.log(apiRef)
    // useEffect(() => {
    //     apiRef.current.resize();
    // }, [isCollapsed]);

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
        <Box >
            <Header title={"Team"} subtitle={"Manage Team"} />
            <Box margin={"20px"} height={"50vh"} sx={{
                "& .MuiDataGrid-root": {
                    border: "none",
                },
                "& .name-column--cell": {
                    color: colors.greenAccent[300],
                },
                "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: colors.primary[400],
                },
                "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: colors.blueAccent[700],
                },
                "& .MuiCheckbox-root": {
                    color: `${colors.greenAccent[200]} !important`,
                },
            }}
            >
                <DataGrid sx={{ cursor: "default" }}

                    rows={mockDataTeam}
                    columns={columns}
                    checkboxSelection

                />
            </Box>
        </Box >
    );
};

export default Team;
