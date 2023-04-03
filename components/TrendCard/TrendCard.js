import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const TrendCard = ({ topic, hashtag, count }) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.topCont}>
          <Text style={styles.trendText}>{topic}</Text>
          <MaterialCommunityIcons name="dots-vertical" color="gray" size={20} />
        </View>
        <View>
          <Text style={styles.hashtagText}>#{hashtag}</Text>
          <Text style={styles.tweetCountText}>{count} tweets</Text>
        </View>
      </View>
    </View>
  );
};

export default TrendCard;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  topCont: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  trendText: {
    color: "#807c7c",
    fontWeight: "700",
  },
  hashtagText: {
    color: "white",
    fontWeight: "700",
    marginTop: 3,
    marginBottom: 3,
  },
  tweetCountText: {
    color: "#807c7c",
  },
});
