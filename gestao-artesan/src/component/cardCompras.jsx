import { useTheme } from "@emotion/react";
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Avatar from '@mui/material/Avatar';

import { green, pink, deepOrange } from '@mui/material/colors';

function CardCompras({ name, title, icon, ...props }) {
    const theme = useTheme();
    return (
        <Box
            sx={{
                borderRadius: 5,
                display: "flex",
                alignItems: "center",
                gap: 3,
                padding: 2,
                //width:"max-content",
                backgroundColor: "#7B442A"
            }}
            {...props}
        >
            <Avatar sx={{ bgcolor: deepOrange[300] }}>
                {icon}
            </Avatar>
            <Stack>
                <Typography fontSize={18} color="white">{name}</Typography>
                <Typography fontSize={14} color="white">{title}</Typography>
            </Stack>
        </Box>
    );
}
export default CardCompras;