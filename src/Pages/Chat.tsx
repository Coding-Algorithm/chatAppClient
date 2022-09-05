import React from 'react'
import ChatLists from '../Components/Chat/ChatLists'
import ChatListsHeader from '../Components/Chat/ChatListsHeader'
import MenuBar from '../Components/Chat/MenuBar'

function Chat() {
    return (
        <>
        <ChatListsHeader />
        <ChatLists />
        <MenuBar />
        </>
    )
}

export default Chat