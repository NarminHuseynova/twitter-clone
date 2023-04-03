import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState, useLayoutEffect } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { auth, database } from "../../config/firebase";
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot,
} from "firebase/firestore";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import colors from "../../colors";
import { ChatData } from "../../data/TWITTER_DATA";
import MessageCard from "../../components/ChatCard/ChartCard";

const MessageScreen = () => {
  const navigation = useNavigation();

  const [messages, setMessages] = useState([]);

  const onSignOut = () => {
    signOut(auth).catch((error) => console.log(error));
  };

  useLayoutEffect(() =>
    navigation.setOptions({
      headerTitle: "Messages",
      headerLeft: () => (
        <Image
          style={{ height: 30, width: 30, borderRadius: 30, marginLeft: 15 }}
          source={{
            uri: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
          }}
        />
      ),
      headerRight: () => (
        <TouchableOpacity style={{ marginRight: 10 }} onPress={onSignOut}>
          <AntDesign
            name="logout"
            size={24}
            color={colors.gray}
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
      ),
      headerStyle: {
        backgroundColor: "black",
        color: "white",
        borderBottomWidth: 0,
      },
      headerTitleStyle: {
        color: "white",
      },
    })
  );

  useLayoutEffect(() => {
    const collectionRef = collection(database, "chats");
    const q = query(collectionRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      console.log("snapshot");
      setMessages(
        snapshot.docs.map((doc) => ({
          _id: doc.id,
          createdAt: doc.data().createdAt.toDate(),
          text: doc.data().text,
          user: doc.data().user,
        }))
      );
    });
    return unsubscribe;
  }, []);

  return (
    <>
      <View style={{ backgroundColor: "black" }}>
        {ChatData.map((item) => (
          <MessageCard
            prof={item.prof}
            id={item.id}
            name={item.name}
            verified={item.verified}
            image={item.image}
            msg={item.msg}
            time={item.time}
          />
        ))}
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Chat")}
          style={styles.chatButton}
        >
          <Entypo name="chat" size={24} color={colors.lightGray} />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: "black",
  },
  chatButton: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    marginRight: 20,
    marginBottom: 50,
  },
});
