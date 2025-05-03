import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 250,
      }}
      >Coucou Maxime</Text>
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
