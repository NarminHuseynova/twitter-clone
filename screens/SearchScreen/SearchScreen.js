import {
  StyleSheet,
  View,
  TextInput,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import TrendCard from "../../components/TrendCard/TrendCard";
import SearchListcard from "../../components/SearchListCard/SearchListCard";
import { TwitterData, TrendingData } from "../../data/TWITTER_DATA";

const ScreenWidth = Dimensions.get("window").width;

const SearchScreen = ({ navigation }) => {
  const [user, setUser] = useState([]);
  const data = TwitterData;

  useEffect(
    () =>
      navigation.setOptions({
        headerTitle: () => (
          <TextInput
            placeholder="Search Twitter"
            placeholderTextColor="#807c7c"
            style={styles.searchText}
            onChangeText={searchUser}
          />
        ),
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
            style={styles.settingIcon}
          />
        ),
        headerStyle: {
          backgroundColor: "black",
        },
      }),
    []
  );

  const searchUser = (e) => {
    if (e) {
      setUser(data.filter((item) => item.id.includes(e)));
    } else {
      setUser([]);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {user?.map((item) => (
          <SearchListcard
            key={item.key}
            prof={item.prof}
            id={item.id}
            name={item.name}
            verified={item.verified}
          />
        ))}
        {TrendingData.map((item) => (
          <TrendCard
            id={item.id}
            key={item.key}
            topic={item.topic}
            hashtag={item.hashtag}
            count={item.count}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  logo: {
    width: 35,
    height: 35,
    borderRadius: 35,
  },
  searchScreen: {
    paddingVertical: 15,
    paddingHorizontal: 16,
  },
  searchText: {
    flex: 2,
    backgroundColor: "#262626",
    paddingLeft: 15,
    textAlignVertical: "center",
    height: "100%",
    width: ScreenWidth - 115,
    marginTop: 15,
    marginBottom: 15,
    borderRadius: 50,
    color: "white",
    borderWidth: 0,
  },
  settingIcon: {
    marginRight: 15,
  },
});
