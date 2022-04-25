import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import cars from "./Cars";
import CarItem from "../CarItem";
export default function CarsList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        snapToAlignment={"start"}
        decelerationRate={"normal"}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get("screen").height}
        renderItem={({ item }) => <CarItem car={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
