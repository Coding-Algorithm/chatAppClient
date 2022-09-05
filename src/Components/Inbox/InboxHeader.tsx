import { ArrowBackIos, Call, Videocam } from "@mui/icons-material"
import { Box, IconButton, Stack, Typography } from "@mui/material"

const InboxHeader = () => {
  return (
    <Stack direction="row" width="100%" className="fixed z-10 box-border shadow-lg bg-white px-10 py-5">
      <Stack direction="row" width="100%" className="justify-between items-center">
        <Stack direction="row" >
          <IconButton>
            <ArrowBackIos />
          </IconButton>

          <Stack direction="row">

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
              <Typography variant="body2" color="grey" fontSize={13}>Seen 5 minutes ago</Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack direction="row" >
          <IconButton>
            <Call />
          </IconButton>

          <IconButton>
            <Videocam />
          </IconButton>
        </Stack>
      </Stack>
    </ Stack>
  )
}

export default InboxHeader