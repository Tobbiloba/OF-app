import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { Entypo, AntDesign, FontAwesome5 } from '@expo/vector-icons';
const Post = ({post}) => {
    console.log(post)
  return (
    <View style={{marginVertical: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center', padding: 5}}>
            <Image src={post.User.avatar} style={{width: 50, aspectRatio: 1, borderRadius: 50, marginRight: 10}}/>
        <View>
            <Text style={{fontWeight: '600', marginBottom: 3, fontSize: 16}}>{post.User.name}</Text>
      <Text style={{color: 'gray'}}>@{post.User.handle}</Text>
        </View>

        <View style={{marginLeft: 'auto', flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <Text style={{color: 'gray'}}>3 hours ago</Text>
            <Entypo name="dots-three-horizontal" size={18} color="gray" />
        </View>
        </View>
        
        <Text style={{margin: 18, lineHeight: 18}}>{post.text}</Text>
      


      <Image src={post?.image} style={{width: '100%', aspectRatio: 1}}/>
      <View style={{margin: 10, flexDirection: 'row'}}>

      <AntDesign name="hearto" size={20} color="gray" style={{marginRight: 10}}/>
      {/* <View> */}
      <FontAwesome5 name="dollar-sign" size={20} color="gray" style={{marginHorizontal: 10}}/>
      {/* <Text>send tip</Text>
      </View> */}
      
        
      </View>
      <Text style={{fontWeight : '500', marginHorizontal: 10}}>{post.likes} likes</Text>
    </View>
  )
}

export default Post

const styles = StyleSheet.create({})