import { StyleSheet, Text, View , SafeAreaView, TextInput, Button, Image} from 'react-native'
import React from 'react'
import { useState } from 'react';
import { Ionicons, Feather } from "@expo/vector-icons";
// import { Button } from 'react-native-web';
import { useRouter } from 'expo-router';
// import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker'
export default function NewPost() {
    const router = useRouter()
    const onPost = () => {
        console.warn('Post:', text)
        setText('')
    }
    const [text, setText] = useState('')
    const [image, setImage] = useState('')
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
          
        }
      };
  return (
    // <View>
      <SafeAreaView style={{ margin: 10,  }}>
          
          <View style={{flexDirection: 'row', gap: 15, alignItems: 'center'}}>
            <Ionicons
            name="arrow-back"
            size={28}
            color="black"
            onPress={() => router.back()}
            style={{ marginRight: 10 }}
          />
          <Text style={{fontWeight: '500', fontSize: 18}}>New Post</Text>
          </View>
          <TextInput placeholder='Compose new post...' numberOfLines={3} multiline value={text} onChange={setText} />
          <View style={{marginVertical: 15}}>
          <Feather onPress={pickImage} name="image" size={20} color="gray" />
          </View>
          { image && <Image src={image} style={{width: '100%', aspectRatio: 1}}/>}
          
            <Button title='Post' onPress={onPost}/>
        </SafeAreaView>
    // </View>
  )
}

const styles = StyleSheet.create({})