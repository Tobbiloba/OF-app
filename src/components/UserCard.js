import { StyleSheet, Text, View, ImageBackground, Image, Pressable } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
// const user = users[0];
const UserCard = ({user}) => {
  // console.log(user.avatar)
    // const user = props.user
  return (
    <Link href={`/user/${user.id}`} asChild>
      <Pressable>
    <ImageBackground source={{uri: user.coverImage}} style={styles.userCard}>
    <View style={styles.overLay}/>
      {/* Image */}
      <Image src={user.avatar} style={styles.userImage}/>

      {/* Name and handle */}
      <View>
        <Text style={{color: 'white', fontSize: 22, fontWeight: '500'}}>{user.name}</Text>
      <Text style={{color: 'white'}}>@{user.handle}</Text>


      
      </View>
      

    </ImageBackground>
    </Pressable>
    </Link>
  )
}

export default UserCard

const styles = StyleSheet.create({
    userCard: {
        backgroundColor: 'gray',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'flex-end',
        borderRadius: 10,
        overflow: 'hidden'
      },
      userImage: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 3,
        marginRight: 20
      },
      overLay: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        // position: 'absolute',
        // top: 0,
        // bottom: 0,
        // left: 0,
        // right: 0
        ...StyleSheet.absoluteFill
      }
})