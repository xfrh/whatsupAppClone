import { View,Text } from "react-native";
import { Message } from "../../types";
import styles from "./style";
import moment from "moment";

export type ChatMessageProps={
               message : Message;
               myId :String;
}
const ChatMessage =(props:ChatMessageProps) =>{
               const {message, myId } = props;
               const isMyMessage =()=>message.user.id=='u1';

               return (
                  <View style={styles.container} >
                              <View style={[styles.messageBox,{
                                     backgroundColor: isMyMessage()? '#DCF8C5' : 'white',
                                     marginLeft: isMyMessage()? 50:0,
                                     marginRight:isMyMessage()? 0:50       
                              }]}>
                            {!isMyMessage() && <Text style={styles.name}>{message.user.name}</Text> }
                              <Text style={styles.message}>{message.content}</Text>
                             <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
                              </View>
                  </View>
               );

            
}

export default ChatMessage;