import { View, FlatList,StyleSheet } from "react-native";
import ContactListItem from "../components/ContactListItem";
import NewMessageButton from "../components/NewMessageButton";
import contacts from "../data/Users";
const ChatsScreen =() =>{
       
  return (
 
    <View style={styles.container}>
      <FlatList
        style={{width: '100%'}}
        data={contacts}
        renderItem={({ item }) => <ContactListItem user={item} />}
        keyExtractor={(item) => item.id}
      />
    
    </View>
   
  );      
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

});

export default ChatsScreen;