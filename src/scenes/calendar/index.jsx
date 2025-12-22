import { useState } from "react";
import {
    Box,
    List,
    ListItem,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";

import FullCalendar from "@fullcalendar/react";
import { formatDate } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

import Header from "../../components/Header";

const Calendar = () => {

    return (
        <Box >
            <Header title={"Calendar"} subtitle={"Lorem ipsum"}></Header>
            <Box margin={"20px"}>
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}

                />
            </Box>
        </Box>
    )
}


export default Calendar;