import chats from '../data/Chats'; 
import { FlatList, View } from 'react-native';
import ChatMessage from '../components/ChatMessage';
import { useRoute } from '@react-navigation/native';
import styles from '../components/ChatListItem/style';
import InputBox from '../components/InputBox';
const ChatRoomScreen =() =>{
 const route =useRoute();
 const myId = route.params.myId;
 return (
      <View style={{width: '100%', height: '100%'}}  >
       <FlatList
        data={chats.messages}
        renderItem={({ item }) => <ChatMessage message={item} myId={myId} />}
        inverted
      />
      <InputBox/>
      </View>
       )
};

export default ChatRoomScreen;