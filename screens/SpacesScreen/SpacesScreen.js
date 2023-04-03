import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { SpacesData } from "../../data/TWITTER_DATA";
import SpacesCard from "../../components/SpacesCard/SpacesCard";

const SpacesScreen = ({ navigation }) => {
  useEffect(() =>
    navigation.setOptions({
      headerTitle: "Spaces",
      headerLeft: () => (
        <Image
          style={{ height: 30, width: 30, borderRadius: 30, marginLeft: 15 }}
          source={{
            uri: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
          }}
        />
      ),
      headerTitleStyle: {
        color: "white",
        fontWeight: "bold",
      },
    })
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <View>
            <Text style={styles.liveText}>Happening Now</Text>
            <Text style={styles.subText}>Spaces going on right now</Text>
          </View>
          <View>
            {SpacesData.map((item) => (
              <SpacesCard
                key={item.id}
                title={item.title}
                tags={item.tags}
                pic1={item.pic1}
                pic2={item.pic2}
                pic3={item.pic3}
                hostName={item.hostName}
                hostPic={item.hostPic}
                listenCount={item.listenCount}
                desc={item.desc}
                color={item.color}
                hostColor={item.hostColor}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SpacesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 15,
  },
  liveText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  subText: {
    marginTop: 4,
    fontSize: 14,
    color: "gray",
    fontWeight: "700",
  },
});
