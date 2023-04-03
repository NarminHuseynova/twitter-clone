import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

const TweetCard = ({
  id,
  name,
  verified,
  tweet,
  image,
  prof,
  time,
  like,
  rt,
  reply,
}) => {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{ height: 30, width: 30, borderRadius: 30, margin: 8 }}
          source={{
            uri: prof,
          }}
        />
      </View>
      <View style={styles.rightCont}>
        <View style={styles.topCont}>
          <View style={styles.nameCont}>
            <Text style={styles.nameText}>{name}</Text>
            {verified && (
              <MaterialIcons name="verified" color="#4aa0f7" size={20} />
            )}
            <Text style={styles.idText}>@{id}</Text>
            <Text style={styles.idText}>· {time}</Text>
          </View>
          <View>
            <MaterialCommunityIcons
              name="dots-vertical"
              color="gray"
              size={20}
            />
          </View>
        </View>
        <View style={styles.tweetCont}>
          <Text style={styles.tweetText}>{tweet}</Text>
          {image && (
            <Image
              style={{
                height: 300,
                width: "100%",
                borderRadius: 10,
                marginTop: 10,
              }}
              source={{
                uri: image,
              }}
            />
          )}
        </View>
        <View style={styles.actionCont}>
          <View style={styles.iconCont}>
            <MaterialCommunityIcons
              name="message-reply-outline"
              color="gray"
              size={20}
            />
            <Text style={styles.idText}>{reply}</Text>
          </View>
          <View style={styles.iconCont}>
            <AntDesign name="retweet" color="gray" size={20} />
            <Text style={styles.idText}>{rt}</Text>
          </View>
          <TouchableOpacity
            onPress={() => setLiked((a) => !a)}
            style={styles.iconCont}
          >
            <MaterialCommunityIcons
              name="heart"
              color={liked ? "red" : "lightgray"}
              size={20}
            />
            <Text style={styles.idText}>{like}</Text>
          </TouchableOpacity>
          <MaterialCommunityIcons
            name="share-variant-outline"
            color="gray"
            size={20}
          />
        </View>
      </View>
    </View>
  );
};

export default TweetCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingBottom: 5,
    borderBottomColor: "#2A2E30",
    borderBottomWidth: 1,
  },
  rightCont: {
    flex: 1,
    paddingTop: 6,
    paddingBottom: 5,
    marginLeft: 5,
    flexDirection: "column",
  },
  nameCont: {
    flexDirection: "row",
  },
  actionCont: {
    marginTop: 10,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 15,
  },
  iconCont: {
    flexDirection: "row",
  },
  topCont: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    color: "white",
  },
  nameText: {
    color: "#E7E9EA",
    fontWeight: "bold",
    marginRight: 5,
  },
  idText: {
    marginLeft: 5,
    color: "gray",
  },
  tweetText: {
    color: "#DDDFDF",
  },
  tweetCont: {
    paddingRight: 15,
  },
});
