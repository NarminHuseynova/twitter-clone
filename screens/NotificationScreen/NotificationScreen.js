import { StyleSheet, View, Image, ScrollView } from "react-native";
import React, { useEffect } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { NotificationData } from "../../data/TWITTER_DATA";
import NotificationCard from "../../components/NotificationCard/NotificationCard";

const NotificationScrenn = ({ navigation }) => {
  useEffect(() =>
    navigation.setOptions({
      headerTitle: "Notification",
      headerLeft: () => (
        <Image
          style={{ height: 30, width: 30, borderRadius: 30, marginLeft: 15 }}
          source={{
            uri: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
          }}
        />
      ),
      headerRight: () => (
        <MaterialIcons
          name="settings"
          color="white"
          size={25}
          style={{ marginRight: 15 }}
        />
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

  return (
    <View style={styles.container}>
      <ScrollView>
        {NotificationData.map((item) => (
          <NotificationCard
            id={item.id}
            type={item.type}
            pic={item.pic}
            title={item.title}
            desc={item.desc}
            color={item.color}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default NotificationScrenn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
