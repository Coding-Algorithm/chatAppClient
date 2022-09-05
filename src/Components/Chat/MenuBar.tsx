import { AccountCircle, Chat, Feed } from '@mui/icons-material'
import { IconButton, Stack } from '@mui/material'

const MenuBar = () => {
    return (
        <Stack direction="row" bgcolor="#F2F3FA" spacing={2}
            justifyContent="space-around" px={20} py={5} >
            <IconButton aria-label="Chat">
                <Chat />
            </IconButton>

            <IconButton aria-label="Feed">
                <Feed />
            </IconButton>

            <IconButton aria-label="Profile">
                <AccountCircle />
            </IconButton>
        </Stack>
    )
}

export default MenuBar