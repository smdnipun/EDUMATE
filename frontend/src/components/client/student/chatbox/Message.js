import React, { useState, useEffect, useContext } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import axios from "axios";
import "./Message.css";
import { useParams } from "react-router";
import Navigation from "../../../common/Navigation/Navigation";
import { AuthContext } from "../../../../context/AuthContext";

export default function Message() {
  const params = useParams();
  const { user } = useContext(AuthContext);
  const userstream = user.stream;
  const [messageList, setMessageList] = useState([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [email, setEmail] = useState(user.email);
  const [username, setUsername] = useState(user.firstName);
  const subject = params.name;

  const loadData = () => {
    axios
      .post(`/chatbox/subject`, { subject: subject })
      .then((response) => {
        setMessageList(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const messageData = {
        subject: subject,
        author: username,
        email: email,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
      };
      axios
        .post("/chatbox/add", messageData)
        .then((res) => console.log(res.data));

      // setMessageList(...messageList, messageData)
      // setData(data.filter((el) => el._id != top._id))
      //   axios
      //     .get(`http://localhost:5000/message/${gid}`)
      //     .then((response) => {
      //       setMessageList(response.data)
      //       console.log(response.data)
      //     })
      //     .catch(function (error) {
      //       console.log(error)
      //     })

      setCurrentMessage("");
      window.location.reload();
    }
  };

  return (
    <div>
      <Navigation />
      <div data-testid="msg-1 my-5">
        <div className="container chat-window pt-4 my-5">
          <div className="chat-header">
            <p>Subject :- {subject}</p>
          </div>
          <div className="chat-body">
            <ScrollToBottom className="message-container">
              {messageList.map((messageContent) => {
                return (
                  // <Messages username={username} messageContent={messageContent} />
                  <div
                    className="message"
                    id={email === messageContent.email ? "you" : "other"}
                  >
                    <div>
                      <div className="message-content">
                        <p>{messageContent.message}</p>
                      </div>
                      <div className="message-meta">
                        <p id="author">{messageContent.author}</p>
                        <p id="time">{messageContent.time}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </ScrollToBottom>
          </div>
          <div className="chat-footer">
            <input
              type="text"
              value={currentMessage}
              placeholder="Hey..."
              onChange={(event) => {
                setCurrentMessage(event.target.value);
              }}
              onKeyPress={(event) => {
                event.key === "Enter" && sendMessage();
              }}
            />
            <button onClick={sendMessage}>SEND &#9658;</button>
          </div>
        </div>
      </div>
    </div>
  );
}
