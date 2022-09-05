import React from 'react'
import InboxAction from './InboxAction'
import InboxChat from './InboxChat'
import InboxHeader from './InboxHeader'

const Inbox = () => {
    return (
        <>
            <InboxHeader />
            <InboxChat />
            <InboxAction />
        </>
    )
}

export default Inbox