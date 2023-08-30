import { StyleSheet, Text, View, Image, ImageBackground, FlatList } from "react-native";
import UserCard from "../src/components/UserCard";
import users from "../assets/data/users";
const user = users[0]
export default function Page() {

  return (
    <View style={styles.container}>
      {/* <UserCard user={users[0]}/>  */}
      <FlatList 
        data={users}
        renderItem={({item}) => <UserCard user={item}/>}
        showsVerticalScrollIndicator={false}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    padding: 24,
  },

});
