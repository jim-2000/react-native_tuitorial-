import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button,Card } from 'react-native-elements'


//
function SignIn({navigation}) {
    return (
        <View style={styles.viewStyle}>
            <Card>
                <Card.Title>Well come to Auth App</Card.Title>
                <Card.Divider color="red" />
                <Input
                placeholder="jimsim@gmail.com"
                leftIcon={
                    <Icon 
                    name="envelope"
                    size={25}
                    color="oragne"
                    />
                }
                />

                <Input 
                placeholder="Password"
                secureTextEntry={true}
                leftIcon={
                    <Icon 
                    name="key"
                    size={25}
                    color="oragne"
                    />
                }
                />

                <Button icon={ <Icon 
                    name="sign-in"
                    size={25}
                    style={{paddingRight:15,color:"white"}}
                    />} title="log in"   />

                <Button icon={ <Icon 
                    name="user"
                    size={24}
                    style={{paddingRight:15,color:"black"}}
                    color="deeporange"
                    />} 
                    onPress={()=>{
                        navigation.navigate("Signup")
                    }}
                    type="clear"
                    title="Alrady have an account"  />
            </Card>
        </View>
    )
}

const styles =StyleSheet.create({
    viewStyle:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#4de63a'
    },
})


export default SignIn;
