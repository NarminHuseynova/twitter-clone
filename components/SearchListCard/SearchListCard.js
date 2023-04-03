import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const SearchListcard = ({ id, name, prof, verified }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftCont}>
        <Image
          source={{ uri: prof }}
          style={{ height: 30, width: 30, borderRadius: 30, marginRight: 10 }}
        />
        <View style={styles.rightCont}>
          <View style={styles.topCont}>
            <View style={styles.nameCont}>
              <Text style={styles.nameText}>{name}</Text>
              {verified && (
                <MaterialIcons name="verified" color="#4aa0f7" size={20} />
              )}
              <Text style={styles.idText}>@{id}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SearchListcard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingBottom: 5,
    borderBottomColor: "#2A2E30",
    borderBottomWidth: 1,
  },
  rightCont: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "column",
    justifyContent: "center",
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
  leftCont: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 15,
  },
});
