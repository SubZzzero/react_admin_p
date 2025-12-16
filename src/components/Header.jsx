import { Box, Typography, useTheme } from "@mui/material";
import { themeTokens } from "../theme";

const Header = ({ title, subtitle }) => {

    const theme = useTheme();
    const colors = themeTokens(theme.palette.mode)



    return <Box marginBottom={"34px"} marginLeft={"16px"}>
        <Typography variant="h2" color={colors.grey[100]} fontWeight={"bold"} sx={{ marginBottom: "5px" }}>{title}</Typography>
        <Typography variant="h5" color={colors.greenAccent[400]}>{subtitle}</Typography>
    </Box>
}


export default Header;