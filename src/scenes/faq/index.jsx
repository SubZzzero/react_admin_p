import Header from "../../components/Header.jsx";
import { Box, useTheme, Typography } from "@mui/material";
import { themeTokens } from "../../theme";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const FAQ = () => {
    const theme = useTheme();
    const colors = themeTokens(theme.palette.mode);


    return (

        <Box >
            <Header title={"FAQ"} subtitle={"Questions and Answers"} />
            <Box margin={"20px"}>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography color={colors.greenAccent[500]} variant="h5">1. How do I get started with the system?</Typography>
                    </AccordionSummary>
                    <AccordionDetails >
                        After logging in, you will be redirected to the main dashboard. Use the sidebar navigation to access different sections and features.
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography color={colors.greenAccent[500]} variant="h5">2. How can I update my personal information?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        Go to the profile section, make the necessary changes, and save them. All updates are applied immediately.
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography color={colors.greenAccent[500]} variant="h5">3. Why is some data not displaying correctly in tables?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        Please check your internet connection and ensure you have access to the selected section. If the issue persists, try refreshing the page.
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography color={colors.greenAccent[500]} variant="h5">4. Is it possible to export data from the system?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        Yes, most tables support data export. Use the export option available in the table toolbar.
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                    >
                        <Typography color={colors.greenAccent[500]} variant="h5">5. Who should I contact if I encounter an issue?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        If you experience any problems, please contact the system administrator or technical support team.
                    </AccordionDetails>
                </Accordion>
            </Box>
        </Box>
    )
}


export default FAQ;