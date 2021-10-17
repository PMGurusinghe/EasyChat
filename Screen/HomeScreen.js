import React from 'react'
import { TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useEffect, useState, useLayoutEffect } from 'react'
import CustomListItem from '../components/CustomListItem'
import { Avatar } from 'react-native-elements/dist/avatar/Avatar'
import { AntDesign, SimpleLineIcons } from '@expo/vector-icons'
import { auth, db } from '../firebase'


const HomeScreen = ({ navigation }) => {

    const [chats, setChats] = useState([]); 

    const signOutUser = () => {
        auth.signOut().then(() => {
            navigation.replace("Login");
        })
    }

    useEffect(() => {
        const unsubscribe = db.collection('chats').onSnapshot(snapshot => (
            setChats(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(), 
            })))
        ))
        return unsubscribe;
    },[])
     

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "EasyChat",
            headerStyle: { backgroundColor: "#fff" },
            headerTitleStyle: { color: "black" },
            headerTintColor: "black",
            // headerTitleAlign: "left",
            headerLeft: () => (
                <View style={{ marginLeft: 20 }}>
                    <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
                        <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
                    </TouchableOpacity>
                </View>
            ),
            headerRight: () => (
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: 50,
                        marginRight: 20,
                    }}>
                   
                    <TouchableOpacity 
                        onPress={() => navigation.navigate("AddChat")}
                        activeOpacity={0.5}>
                        <SimpleLineIcons name="pencil" size={24} color="black" />
                    </TouchableOpacity>

                </View>
            )
        })
    }, [navigation])

     const enterChat = (id, chatName) => {
         navigation.navigate("Chat",{
             id,
             chatName,
         })
     }

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                 {chats.map(({ id, data: { chatName } }) => (
                     <CustomListItem 
                     key={ id }  
                     id={ id } 
                     chatName={ chatName }
                     enterChat={enterChat}
                     />
                 ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        height: "100%",
        //  backgroundColor: "white"
    }
})
