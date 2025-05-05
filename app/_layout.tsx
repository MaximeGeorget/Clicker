import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack 
    screenOptions={{
      headerStyle: {
        backgroundColor: "#a0a023"
      },
      title: "Super Titre"
    }}
    ></Stack>;
}
