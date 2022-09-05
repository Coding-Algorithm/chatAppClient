import { CameraAlt, East, Image, MoreHoriz } from "@mui/icons-material"
import { Button, Stack, TextField } from "@mui/material"

const InboxAction = () => {
    return (
        <Stack paddingX={5} boxSizing="border-box" className="fixed bottom-0 w-full bg-primary py-3 shadow-lg">
            <Stack className="w-11/12">
                <TextField label="Type a message" sx={{
                    border: "none",
                    marginBottom: 1.5
                }}
                >

                </TextField>

                <Stack direction="row">
                    <Button variant="text">
                        <MoreHoriz className="text-post" />
                    </Button>
                    <Button variant="text">
                        <Image className="text-post" />
                    </Button>
                    <Button variant="text">
                        <CameraAlt className="text-post" />
                    </Button>
                </Stack>
            </Stack>
            <Stack className="absolute right-10 bottom-10 bg-active p-3 rounded-lg shadow-lg shadow-active-500">
                <East className="text-white" />
            </Stack>
        </Stack>
    )
}

export default InboxAction