import { Text, View,Image,TouchableWithoutFeedback } from "react-native"
import { User } from "../../types";
import styles from "./style";
export type ContactListItemProps ={
               user:User;
}

const ContactListItem =(props:ContactListItemProps) =>{
               const { user } = props;

               return (
            
               <View style={styles.container}>
                              <View style={styles.lefContainer}>
                              <Image source={{uri:user.imageUri}} style={styles.avatar} />
                              </View>
                              <View style={styles.midContainer}>
                               <Text style={styles.username}>{user.name}</Text>
                               <Text numberOfLines={2} style={styles.status}>{user.status}</Text>
               
                              </View>
                             

                    </View>
                  
             
               )
              
}

export default ContactListItem;