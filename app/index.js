import { StyleSheet, Text, View, Image, ImageBackground, FlatList } from "react-native";
import UserCard from "../src/components/UserCard";
import users from "../assets/data/users";
import { Link } from "expo-router";
const user = users[0]
export default function Page() {

  return (
    <View style={styles.container}>
      {/* <UserCard user={users[0]}/>  */}
      <Link href={'/newPost'} style={{backgroundColor: 'royalblue', marginVertical: 10, padding: 10, color: 'white', textAlign: 'center', fontWeight: '500', fontSize: 20}}>New post +</Link>
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
