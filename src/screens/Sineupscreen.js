import React from 'react'
import { View,Text,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button,Card } from 'react-native-elements'


function Sineupscreen({navigation}) {
    return (
        <View style={styles.viewStyle}>
           <Card>
                <Card.Title>Welcome to Auth App</Card.Title>
                <Card.Divider color="red" />
                <Input
                placeholder="Name"
                leftIcon={
                    <Icon 
                    name="user"
                    size={25}
                    color="oragne"
                    />
                }
                />
                <Input
                placeholder="Student ID"
                leftIcon={
                    <Icon 
                    name="graduation-cap"
                    size={25}
                    color="oragne"
                    />
                }
                />

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
                    name="user"
                    size={25}
                    style={{paddingRight:15,color:"black"}}
                    />} title="Sign in"   />

                <Button icon={ <Icon 
                    name="sign-in"
                    size={24}
                    style={{paddingRight:15,color:"black"}}
                    />} 
                    type="clear"
                    title="Don't have account"  />
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


export default Sineupscreen
