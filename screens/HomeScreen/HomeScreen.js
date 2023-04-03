import { StyleSheet, View, ScrollView, Image } from "react-native";
import React, { useEffect } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import TweetCard from "../../components/TweetCard/TweetCard";
import { TwitterData } from "../../data/TWITTER_DATA";

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "center",
      headerLeft: () => (
        <Image
          style={{ height: 30, width: 30, borderRadius: 30, marginLeft: 15 }}
          source={{
            uri: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
          }}
        />
      ),
      headerTitle: () => (
        <FontAwesome5 name="twitter" size={25} color={"#00acee"} />
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {TwitterData.map((item) => (
          <TweetCard
            key={item.key}
            prof={item.prof}
            id={item.id}
            name={item.name}
            verified={item.verified}
            image={item.image}
            tweet={item.tweet}
            time={item.time}
            like={item.like}
            rt={item.rt}
            reply={item.reply}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});
