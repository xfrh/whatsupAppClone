import { Entypo, FontAwesome5, Fontisto, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons"
import { useState } from "react";
import { TextInput, View } from "react-native";

import styles from "./style";

const InputBox =() =>{
               const[message,setMessage] =useState('');
               return <View style={styles.container}>
               <View style={styles.mainContainer} >
               <FontAwesome5 name="laugh-beam" size={24} color="grey" />
             
               <TextInput placeholder="Input a message" style={styles.textInput} value={message} onChangeText={setMessage}/>
               <Entypo name="attachment" size={24} color="grey" style={styles.icon} />
               <Fontisto name="camera" size={24} color="grey" style={styles.icon} />
               </View>
               <View style={styles.buttonContainer}>
              {!message?
               <MaterialCommunityIcons name="microphone" size={28} color="white"/>
              :
              <MaterialIcons name="send" size={28} color="white" />
               }
               </View>
               </View>
}

export default InputBox;