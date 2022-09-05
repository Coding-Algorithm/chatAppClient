import { Box, Icon, Typography, Stack, Button } from '@mui/material'
import React from 'react'

const ChatItem = () => {
    return (
        <Box bgcolor="white" display="flex"
            sx={{
                '&:hover': {
                    bgcolor: "#F2F3FA",
                    cursor: "pointer"
                }
            }} p={2} alignItems="center">

            <Box width={50} height={50}
                sx={{ overflow: "hidden" }}
                borderRadius={20} mr={2} >
                <img
                    src={require("../../assets/profilePic.png")}
                    loading="lazy"
                    alt="profilePic"
                    width={60}
                    height="auto"
                />
            </Box>


            <Stack>
                <Typography variant="h4" fontSize={18} fontWeight="bold" mb={0.2}>Devin Glover</Typography>
                <Typography variant="body1" fontSize={13}>Sent an attachment - 14:24</Typography>
            </Stack>
        </Box>

    )
}

export default ChatItem