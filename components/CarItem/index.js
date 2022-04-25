import { View, Text, ImageBackground } from "react-native";
import styles from "./style";
import StyledButton from "../StyledButton";

export default function CarItem(props) {
  const { name, info, image, infoCTA } = props.car;
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {info} <Text style={styles.subtitleCTA}>{infoCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <StyledButton
          type='primary'
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom Order");
          }}
        />
        <StyledButton
          type='secondary'
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("Existing Inventory");
          }}
        />
      </View>
    </View>
  );
}
