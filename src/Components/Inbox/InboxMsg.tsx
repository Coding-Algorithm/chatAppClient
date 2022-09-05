import { Box, Stack, Typography } from "@mui/material"
import { FC } from "react"

interface ChatProps {
    sender: boolean
}


const InboxMsg: FC<ChatProps> = ({ sender }) => {
    return (
        <Stack direction="row" className={`relative ${sender ? "self-start" : "self-end justify-end"} sm:w-full md:w-4/5 lg:w-full my-5`}>
            {
                sender &&
                <Box
                    width={35}
                    height={35}
                    sx={{ overflow: "hidden" }}
                    borderRadius={10}
                    mr={2}
                >
                    <img
                        src={require("../../assets/profilePic.png")}
                        loading="lazy"
                        alt="profilePic"
                        width={40}
                        height="auto"
                    />
                </Box>
            }

            <Box className={`${sender ? "rounded-tr-3xl" : "rounded-tl-3xl"} w-3/5 rounded-b-3xl ${sender ? "bg-active" : "bg-primary"} p-2`}>
                <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
                    molestiae dolorum quasi dicta. Perferendis quaerat quae assumenda
                    eos harum dolorum.
                </Typography>
            </Box>
        </Stack>
    )
}

export default InboxMsg