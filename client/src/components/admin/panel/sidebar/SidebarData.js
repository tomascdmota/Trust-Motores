import React from "react";
import HomeIcon from "@material-ui/icons/Home";
import MailIcon from '@mui/icons-material/Mail';
import BarChartIcon from '@mui/icons-material/BarChart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SettingsIcon from '@mui/icons-material/Settings';

export const SidebarData = [
   
    {
        title: "Home",
        icon: <HomeIcon/>,
        link: "/home"
    },

    {
        title: "Mail",
        icon: <MailIcon/>,
        link: "/mailbox"
    },
    
    {
        title: "Analytics",
        icon: <BarChartIcon/>,
        link: "/analytics"
    },

    {
        title: "Dashboard",
        icon: <DashboardIcon/>,
        link: "/dashboard"
    },

    {
        title: "Settings",
        icon: <SettingsIcon/>,
        link: "/settings"
    }
]