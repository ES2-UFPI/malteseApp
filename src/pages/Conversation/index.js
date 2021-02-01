/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import api from '~/services/api';


const AvatarURL = `https://picsum.photos/100`;
const SenderID = {
    Provider: 0,
    Deliveryman: 1,
    Client: 2
}

const buildMessage = (sender, messageId, content) => {
    let senderName = "Unknown";
    switch (sender) {
        case SenderID.Provider:
            senderName = "Provider";
            break;
        case SenderID.Deliveryman:
            senderName = "Deliveryman";
            break;
        case SenderID.Client:
            senderName = "Client";
            break;
        default:
            break;
    }

    const messageObj = {
        _id: messageId,
        text: content,
        createdAt: Date.now(),
        user: {
          _id: sender,
          name: senderName,
          avatar: AvatarURL,
        },
        // additional custom parameters
    }
    return messageObj;
}

const Conversation = ({conversationId, userId, typeId }) => {
    const [conversationData, setConversationData] = useState();
    const [messages, setMessages] = useState([]);
    const [actualMessage, setActualMessage] = useState("");

    const retrieveMessages = async () => {
        const conversation = await api.get(`/conversation/${conversationId}`);
        if (conversation) {
            setConversationData(conversation.data);
            let msgs = []
            if (typeId === 0) {
                msgs = conversation.data.retrieve_chat;
            }
            if (typeId === 1) {
                msgs = conversation.data.deliver_chat;
            }
            let msgindex = 0;
            const messageArray = msgs.map(
                (message) => {
                    msgindex += 1;
                    return buildMessage(message.sender, msgindex, message.message);
                }
            );

            // console.log(`Built message array: ${JSON.stringify(messageArray)}`);
            setMessages(messageArray);
            return messageArray;
        }
        return null;
    }

    const handleSend = async (newmsgs = []) => {
        console.log("sending messages");
        const messageList = GiftedChat.append(messages, newmsgs);
        setMessages(messageList);

        const api_msg = messageList.map(
            (msg) => {
                return {
                    sender: msg.user.id,
                    message: msg.text,
                    date: msg.createdAt
                }
            }
        );
        
        let conversation = conversationData;
        if (typeId === 0) {
            conversation.retrieve_chat = api_msg;
        }
        else if (typeId === 1) {
            conversation.deliver_chat = api_msg;
        }

        const result = await api.put(`/conversation/${conversationId}`, conversation);
        if (!result) {
            console.error("Failed to update messages.");
        } else {
            console.log("Messages updated.");
        }
    };

    useEffect(
        () => {
            retrieveMessages(conversationId, typeId).then(
                (response) => {
                    // console.log(`Messages retrieved successfully: ${response}`);
                }
            )
            .catch(
                (reason) => {
                    console.error(`Failed to retrieve messages: ${reason}`);
                }
            );
        }
    );

    return (<GiftedChat
            messages={messages}
            onSend={newMessages => handleSend(newMessages)}
            user={{
                _id: userId,
            }}
        />);
};


export default Conversation;