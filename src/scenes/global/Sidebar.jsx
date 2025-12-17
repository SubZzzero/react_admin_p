import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { themeTokens } from "../../theme";
import "react-pro-sidebar/dist/css/styles.css";
import avatar from "../../assets/avatar.png";
import logo from "../../assets/logo.png";
import { sidebarConfig } from "../../config/sidebarConfig";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";


const SidebarNavItem = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = themeTokens(theme.palette.mode)

    return <MenuItem active={selected === title} style={{ color: colors.grey[100] }} onClick={() => setSelected(title)} icon={icon}>
        <Typography>{title}</Typography>
        <Link to={to}></Link>
    </MenuItem >
}

const Sidebar = () => {
    const theme = useTheme();
    const colors = themeTokens(theme.palette.mode)
    const [isCollapsed, setIsCollapsed] = useState(false)
    const [selected, setSelected] = useState("Dashboard")

    return (
        <Box sx={{
            "& .pro-sidebar-inner": {
                background: `${colors.primary[400]} !important`,
            },
            "& .pro-icon-wrapper": {
                backgroundColor: "transparent !important",
            },
            "& .pro-inner-item": {
                padding: "5px 35px 5px 20px !important",
            },
            "& .pro-inner-item:hover": {
                color: "#868dfb !important",
            },
            "& .pro-menu-item.active": {
                color: "#6870fa !important",
            },
        }}>
            <ProSidebar collapsed={isCollapsed}>

                {!isCollapsed && (
                    <Box display="flex" justifyContent="space-between" alignItems="center" p="10px">
                        <Box position={"relative"} top={"2px"} left={"10px"}>
                            <a href="https://github.com/SubZzzero" target="_blank" rel="noopener noreferrer">
                                <img src={logo} alt="logo_header" width="34px" height="34px" />
                            </a>
                        </Box>
                        <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                            <MenuOutlinedIcon />
                        </IconButton>
                    </Box>
                )}

                {isCollapsed && (
                    <Box position={"relative"} left={"19px"} marginTop={"7px"}>
                        <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                            <MenuOutlinedIcon />
                        </IconButton>
                    </Box>
                )}



                {/* USER */}
                {!isCollapsed && (
                    <Box marginBottom="25px">
                        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                            <img
                                alt="user-avatar"
                                width="100px"
                                height="100px"
                                src={avatar}
                                style={{
                                    borderRadius: "50%",
                                }}
                            />
                        </Box>
                        <Box textAlign="center">
                            <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ marginTop: "10px" }} style={{ cursor: "default" }}>Admin</Typography>
                            <Typography variant="h5" color={colors.greenAccent[500]} style={{ cursor: "default" }}>John Doe</Typography>
                        </Box>
                    </Box>
                )}

                {/* SIDEBAR NAVIGATION */}
                <Menu iconShape="square">
                    <Box>
                        {sidebarConfig.map(({ title, to, icon: Icon }) => (
                            <SidebarNavItem
                                key={title}
                                title={title}
                                to={to}
                                icon={<Icon />}
                                selected={selected}
                                setSelected={setSelected}
                            />
                        ))}
                    </Box>
                </Menu>
            </ProSidebar>




        </Box >


    )
}


export default Sidebar;