import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { themeTokens } from "../../theme";
import { mockDataContacts } from "../../data/mockDataTeam.js";
import Header from "../../components/Header.jsx";


const Contacts = () => {
    const theme = useTheme();
    const colors = themeTokens(theme.palette.mode);

    const keys = Object.keys(mockDataContacts[0]);

    const columns = keys.map((key) => {
        return {
            field: key,
            headerName: key.charAt(0).toUpperCase() + key.slice(1),
            flex: 0.5
        }
    })

    return (

        <Box >
            <Header title={"Contacts"} subtitle={"Manage Contacts"} />
            <Box margin={"20px"} height={"auto"} sx={{
                "& .MuiDataGrid-root": {
                    border: "none",
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: `${colors.blueAccent[700]}!important`,
                    borderBottom: "none",
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
                "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                    color: `${colors.grey[100]} !important`,
                },

            }}
            >

                <DataGrid sx={{ cursor: "default" }}
                    rows={mockDataContacts}
                    columns={columns}
                    showToolbar
                />

            </Box>
        </Box >

    );
};

export default Contacts;
