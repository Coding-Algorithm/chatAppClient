import { SearchOutlined } from '@mui/icons-material'
import { Box, Icon, Paper, Typography } from '@mui/material'
import React from 'react'

function ChatListsHeader() {
    return (
            <Box display="flex" width="100%" alignItems="center" justifyContent="space-between" p={2} boxSizing="border-box">
                <Typography sx={{ fontWeight: "bold" }} variant='h4' component='h1'>Messages</Typography>

                <SearchOutlined fontSize='large' />
            </Box >
    )
}

export default ChatListsHeader