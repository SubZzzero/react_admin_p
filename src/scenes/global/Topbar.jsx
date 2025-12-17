import { Box, IconButton, useTheme, InputBase, Tooltip } from "@mui/material"
import { useContext } from "react";
import { ColorModeContext, themeTokens } from "../../theme";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchIcon from '@mui/icons-material/Search';

const Topbar = () => {

    const theme = useTheme()
    const colors = themeTokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext);

    return <>
        <Box display={"flex"} justifyContent={"space-between"} padding={"20px"}>
            {/* INPUT */}
            <Box
                display={"flex"}
                backgroundColor={colors.primary[400]}
                borderRadius="3px"

            >
                <InputBase sx={{ marginLeft: 2, flex: 1 }} placeholder="Search..." />
                <IconButton type="button" sx={{ padding: 1 }}>
                    <SearchIcon />
                </IconButton>
            </Box>

            {/* ICON */}
            <Box display={"flex"} >

                {/* TOGGLE THEME */}
                <Tooltip title="Switch Theme">
                    <IconButton onClick={colorMode.toggleColorTheme}>
                        {theme.palette.mode === "dark" ? (
                            <LightModeOutlinedIcon />
                        ) : (
                            <DarkModeOutlinedIcon />
                        )}
                    </IconButton>
                </Tooltip>

                {/* NOTIFICATION */}
                <Tooltip title="Notifications">
                    <IconButton>
                        <NotificationsOutlinedIcon />
                    </IconButton>
                </Tooltip>

                {/* SETTINGS */}
                <Tooltip title="Settings">
                    <IconButton>
                        <SettingsOutlinedIcon />
                    </IconButton>
                </Tooltip>

                {/* USER */}
                <Tooltip title="Account">
                    <IconButton>
                        <PersonOutlineOutlinedIcon />
                    </IconButton>
                </Tooltip>
            </Box>
        </Box>
    </>
}


export default Topbar;