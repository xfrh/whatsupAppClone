import { Text, View,Image,TouchableWithoutFeedback } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { ChatRoom } from "../../types";
import  moment from "moment"
import styles from "./style";
export type ChatListItemProps ={
               chatRoom:ChatRoom;
}

const ChatListItem =(props:ChatListItemProps) =>{
               const {chatRoom } = props;
               const user= chatRoom.users[1];
               const navigation = useNavigation();
               const onClick=()=>{
                 navigation.navigate("ChatRoom",{name:user.name,myId:user.id,imageUri:user.imageUri});

               }
               return (
               <TouchableWithoutFeedback onPress={onClick}>     
               <View style={styles.container}>
                              <View style={styles.lefContainer}>
                              <Image source={{uri:user.imageUri}} style={styles.avatar} />
                              </View>
                              <View style={styles.midContainer}>
                               <Text style={styles.username}>{user.name}</Text>
                               <Text numberOfLines={2} style={styles.lastMessage} > {chatRoom.lastMessage.content}</Text>
               
                              </View>
                              <Text style={styles.time}>
                               {moment(chatRoom.lastMessage.createdAt).format("MM/dd/YYYY")}
                              </Text>

                    </View>
                    </TouchableWithoutFeedback> 
             
               )
              
}

export default ChatListItem;