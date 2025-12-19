import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { themeTokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockDataTeam.js";
import Header from "../../components/Header.jsx";


const Invoices = () => {
    const theme = useTheme();
    const colors = themeTokens(theme.palette.mode);

    const keys = Object.keys(mockDataInvoices[0]);

    const columns = keys.map((key) => {
        return {
            field: key,
            headerName: key.charAt(0).toUpperCase() + key.slice(1),
            flex: 1
        }
    })

    return (

        <Box >
            <Header title={"Invoices"} subtitle={"Manage Invoices"} />
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

                    rows={mockDataInvoices}
                    columns={columns}
                    showToolbar
                    checkboxSelection
                />

            </Box>
        </Box >

    );
};

export default Invoices;
