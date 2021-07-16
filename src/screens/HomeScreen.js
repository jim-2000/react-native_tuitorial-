import React from 'react'
import { View,Button,StyleSheet,Text,SafeAreaView } from 'react-native'
function HomeScreen({navigation}) {
    return (
        <View>
            <SafeAreaView>
                <Text>Wellcome to Home</Text>
                <Button title="Sign up" 
                color="orange"
                onPress={()=>navigation.navigate('Signup')}
            />
            </SafeAreaView>            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10,
    },
    text:{
        fontSize:22,
        color:'orange'
    }
})

export default HomeScreen;
