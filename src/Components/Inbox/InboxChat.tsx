import { Box, Stack, Typography } from "@mui/material";
import { FC } from "react";
import InboxMsg from "./InboxMsg";


const InboxChat: FC = (): JSX.Element => {
    return (
        <Stack width="100%" paddingX={10} paddingTop={10} className="relative static box-border px-10">
            <InboxMsg sender={true} />
            <InboxMsg sender={false} />
            <InboxMsg sender={false} />
            <InboxMsg sender={true} />
            <InboxMsg sender={false} />
            <InboxMsg sender={false} />
            <InboxMsg sender={false} />
            <InboxMsg sender={false} />
        </Stack>
    );
};

export default InboxChat;
