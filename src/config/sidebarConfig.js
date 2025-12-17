import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

export const sidebarConfig = [
    { section: "Main" },

    { title: "Dashboard", to: "/", icon: HomeOutlinedIcon },

    { section: "Data" },

    { title: "Team", to: "/team", icon: PeopleOutlinedIcon },
    { title: "Contacts", to: "/contacts", icon: ContactsOutlinedIcon },
    { title: "Invoices", to: "/invoices", icon: ReceiptOutlinedIcon },

    { section: "Actions" },

    { title: "Form", to: "/form", icon: PersonOutlinedIcon },
    { title: "Calendar", to: "/calendar", icon: CalendarTodayOutlinedIcon },

    { section: "Analytics" },

    { title: "Bar", to: "/bar", icon: BarChartOutlinedIcon },
    { title: "Line", to: "/line", icon: TimelineOutlinedIcon },
    { title: "Pie", to: "/pie", icon: PieChartOutlineOutlinedIcon },
    { title: "Geography", to: "/geography", icon: MapOutlinedIcon },

    { section: "Help" },

    { title: "FAQ", to: "/faq", icon: HelpOutlineOutlinedIcon },
];
