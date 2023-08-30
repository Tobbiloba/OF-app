import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Scr
} from "react-native";
import users from "../../assets/data/users";
import UserProfileHeader from "../../src/components/UserProfileHeader";
import { useState } from "react";
import { Link, useRouter, useSearchParams } from "expo-router";
import Post from "../../src/components/Post";
import posts from "../../assets/data/posts";
import { Feather } from '@expo/vector-icons';
const ProfilePage = () => {

  const [isSubscribed, setIsSubscribed] = useState(false)


  // const router = useRouter();

  const { id } = useSearchParams();
  const user = users.find((u) => u.id === id);
  // console.log(user.coverImage);
  // console.log(posts[0].image)
  if (!user) {
    return <Text>User not found</Text>;
  }
  if (!isSubscribed) {
    return (
      <View>
        <UserProfileHeader user={user} isSubscribed={isSubscribed} setIsSubscribed={setIsSubscribed}/>
        <View style={{gap: 20, backgroundColor: 'gainsboro', alignItems: 'center', padding: 20}}>
        <Feather name="lock" size={50} color="gray" />
          <Text style={{backgroundColor: 'royalblue', color: 'white', padding: 10, borderRadius: 10, overflow: 'hidden'}} onPress={() => setIsSubscribed(true)}>SUBSCRIBE TO SEE USER'S POST </Text>
        
        </View>
        
      </View>
      
    )
  }

  return (

        <FlatList 
      data={posts}
      renderItem={({item}) => <Post post={item}/>}
      ListHeaderComponent={() => (
        <UserProfileHeader user={user} isSubscribed={isSubscribed} setIsSubscribed={setIsSubscribed}/>
      )}
    />
 
  );
};

export default ProfilePage;

const styles = StyleSheet.create({

});
