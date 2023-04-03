import React, { useState, createContext, useContext, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import SearchScreen from "./screens/SearchScreen/SearchScreen";
import NotificationScrenn from "./screens/NotificationScreen/NotificationScreen";
import MessageScreen from "./screens/MessageScreen/MessageScreen";
import SpacesScreen from "./screens/SpacesScreen/SpacesScreen";
import Login from "./screens/LoginScreen/LoginScreen";
import SignUp from "./screens/SignUpScreen/SignUpScreen";
import Chat from "./screens/ChatScreen/ChatScreen";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const AuthenticatedUserContext = createContext({});

const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthenticatedUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};

function BottomStack() {
  return (
    <>
      <Tab.Navigator
        initialRouteName="home"
        screenOptions={{
          tabBarStyle: {
            height: 65,
            backgroundColor: "rgb(0,0,0)",
            borderTopWidth: 1,
            borderTopColor: "",
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: "white",
          headerStyle: {
            backgroundColor: "black",
            borderBottomColor: "",
          },
        }}
      >
        <Tab.Screen
          name="home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="search"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="search" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="spaces"
          component={SpacesScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="microphone" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="notification"
          component={NotificationScrenn}
          options={{
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="bell" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="mail"
          component={MessageScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="mail-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="chat"
          component={Chat}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="mail-outline" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator
      defaultScreenOptions={Login}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

function RootNavigator() {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authenticatedUser) => {
      authenticatedUser ? setUser(authenticatedUser) : setUser(null);
      setLoading(false);
    });
    return () => unsubscribe();
  }, [user]);
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <BottomStack /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  );
}

// export default function App() {
//   return (
//     <>
//       <StatusBar style="light" />
//       <NavigationContainer>
//         <Tab.Navigator
//           initialRouteName="home"
//           screenOptions={{
//             tabBarStyle: {
//               height: 65,
//               backgroundColor: "rgb(0,0,0)",
//               borderTopWidth: 1,
//               borderTopColor: "",
//             },
//             tabBarShowLabel: false,
//             tabBarActiveTintColor: "white",
//             headerStyle: {
//               backgroundColor: "black",
//               borderBottomColor: "",
//             },
//           }}
//         >
//           <Tab.Screen
//             name="home"
//             component={HomeScreen}
//             options={{
//               tabBarIcon: ({ color, size }) => (
//                 <FontAwesome name="home" size={size} color={color} />
//               ),
//             }}
//           />
//           <Tab.Screen
//             name="search"
//             component={SearchScreen}
//             options={{
//               tabBarIcon: ({ color, size }) => (
//                 <FontAwesome name="search" size={size} color={color} />
//               ),
//             }}
//           />
//           <Tab.Screen
//             name="spaces"
//             component={SpacesScreen}
//             options={{
//               tabBarIcon: ({ color, size }) => (
//                 <FontAwesome name="microphone" size={size} color={color} />
//               ),
//             }}
//           />
//           <Tab.Screen
//             name="notification"
//             component={NotificationScrenn}
//             options={{
//               tabBarIcon: ({ color, size }) => (
//                 <FontAwesome5 name="bell" size={size} color={color} />
//               ),
//             }}
//           />
//           <Tab.Screen
//             name="mail"
//             component={MessageScreen}
//             options={{
//               tabBarIcon: ({ color, size }) => (
//                 <MaterialIcons name="mail-outline" size={size} color={color} />
//               ),
//             }}
//           />
//         </Tab.Navigator>
//       </NavigationContainer>
//     </>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
