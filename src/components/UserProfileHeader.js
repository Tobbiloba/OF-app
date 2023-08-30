import { StyleSheet, Text, View, ImageBackground, SafeAreaView, Image, Pressable } from 'react-native'
import React from 'react'
import { Ionicons, Feather } from "@expo/vector-icons";
import { Link, useRouter, useSearchParams } from "expo-router";
const UserProfileHeader = ({user, isSubscribed, setIsSubscribed}) => {
    // const user = users[0]
    const router = useRouter();

  return (
    <View>
          <ImageBackground source={{ uri: user.coverImage }} style={styles.cover}>
        <View style={styles.overLay} />
        <SafeAreaView style={{ margin: 10, flexDirection: "row" }}>
          <Ionicons
            name="arrow-back"
            size={28}
            color="white"
            onPress={() => router.back()}
            style={{ marginRight: 10 }}
          />
          <View>
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "500",
                marginBottom: 5,
              }}
            >
              {user.name}
            </Text>
            <Text style={{ color: "white" }}>
              1.4k Posts · 64.3k likes ·15.2 Fans
            </Text>
          </View>
        </SafeAreaView>
      </ImageBackground>

<View style={{padding: 10}}>
<View style={{flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: -50}}>
<Image src={user.avatar} style={styles.userImage}/>
{/* <View> */}
  <Feather name="share" size={24} color="royalblue" />
{/* </View> */}
</View>
  
<Text style={{fontSize: 20, fontWeight: '600', marginVertical: 3}}>{user.name}</Text>
<Text style={{color: 'gray', marginBottom: 20}}>@{user.handle}</Text>
<Text style={{lineHeight: 22}}>{user.bio}</Text>

<Text style={{color: 'gray', marginTop: 20, fontWeight: 'bold', fontSize: 22}}>SUBSCRIPTION</Text>

<Pressable style={{...styles.button, backgroundColor: isSubscribed ? 'white' : 'royalblue'}} onPress={() => setIsSubscribed(true)}>
<Text style={{...styles.buttonText, color:isSubscribed ? 'royalblue' : 'white'}}>{isSubscribed ? 'SUBSCRIBED' : 'SUBSCRIBE'}</Text>
<Text style={{...styles.buttonText, color:isSubscribed ? 'royalblue' : 'white'}}>{user.subscriptionPrice === 0 ? 'FOR FREE' : `${user.subscriptionPrice} / month`}</Text>
</Pressable>
</View>
    </View>

  )
}

export default UserProfileHeader

const styles = StyleSheet.create({
    cover: {
        height: 200,
        width: "100%",
      },
      overLay: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        ...StyleSheet.absoluteFill,
      },
      userImage: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 3,
        marginRight: 20
      },
      
  buttonText: {
    color: 'royalblue',
    fontWeight: '600'
  },
  button: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'gainsbro',
    padding: 15,
    borderRadius: 50,


    justifyContent: 'space-between',
    marginVertical: 15
  }
})