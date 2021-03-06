/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome, Fontisto, MaterialIcons,FontAwesome5, MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Image, ShadowPropTypesIOS, TouchableWithoutFeedback, View } from 'react-native';
import { TabBar } from 'react-native-tab-view';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ChatsScreen from '../screens/ChatsScreen';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { useNavigation } from '@react-navigation/native';
import ContactListItem from '../components/ContactListItem';
import ContactsScreen from '../screens/ContactsScreen';
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const  navigate  =useNavigation();
  return (
    <Stack.Navigator
      screenOptions={
        {
          headerStyle:{
            backgroundColor: Colors.light.tint,   
          },
          headerTintColor: Colors.light.background,
          headerTitleAlign:"left",
          headerTitleStyle:{
            fontWeight:"bold"
          }  
        }
      }
     >
      <Stack.Screen name="Root" 
      component={MainTabNavigator} 
      options={{ 
        title:'WhatsApp',
        headerRight:()=>(<View 
          style={{flexDirection:'row',justifyContent:'space-between',width:60,margin:10}}
         >
          <Octicons name="search" size={22} color={'white'} />
          <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'} />

        </View>),
        headerShadowVisible:false,
        headerShown: true 
        }} />
      <Stack.Screen name="ChatRoom" component={ChatRoomScreen} 
       options={({ route })  => ({
        title: route.params.name,
        headerLeft:()=>(
          <View style={{
            flexDirection: 'row',
            width: 100,
            justifyContent: 'space-between',
            marginLeft: 10,
          }}>
          <TouchableWithoutFeedback onPress={()=>navigate.goBack()}>
          <MaterialIcons name="arrow-back" size={28} color="white" />
          </TouchableWithoutFeedback>
          <Image source={{uri:route.params.imageUri}} style={{width:40,height:40,borderRadius:40/2}} />
          </View>
        ),
        headerRight: () => (
          <View style={{
            flexDirection: 'row',
            width: 100,
            justifyContent: 'space-between',
            marginRight: 10,
          }}>
            <FontAwesome5 name="video" size={22} color={'white'} />
            <MaterialIcons name="call" size={22} color={'white'} />
            <MaterialCommunityIcons name="dots-vertical" size={22} color={'white'} />
          </View>
        )
      })}
      />
      <Stack.Screen name ="Contacts" component={ContactsScreen} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const MainTab = createMaterialTopTabNavigator<RootTabParamList>();

function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Chats"  
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].background,
        tabBarStyle:{
          backgroundColor:Colors[colorScheme].tint,
        },
        tabBarIndicatorStyle:{
          backgroundColor:Colors[colorScheme].background,
          height: 4,
        },
        tabBarLabelStyle:{
          fontWeight:"bold"
        },
        tabBarShowIcon:true
        
      }}>
      <MainTab.Screen
        name="Camera"
        component={TabOneScreen}
        options={{
          tabBarIcon:({color})=><Fontisto name='camera' size={18} color={color} />,
          tabBarLabel:()=>null
          
        }}
      />
      <MainTab.Screen
        name="Chats"
        component={ChatsScreen}
        options={{
          title: 'Chats',
          
        }}
      />
      <MainTab.Screen
        name="Status"
        component={TabTwoScreen}
        options={{
          title: 'Status',
          
        }}
      />
      <MainTab.Screen
        name="Calls"
        component={TabTwoScreen}
        options={{
          title: 'Calls',
         
        }}
      />
    </MainTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
