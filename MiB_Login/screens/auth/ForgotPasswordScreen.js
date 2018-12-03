import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import * as firebase from 'firebase';
export default class ForgotPasswordScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
        };

    }

    onResetPasswordPress = () => {
        firebase.auth().sendPasswordResetEmail(this.state.email)
            .then(() => {
                Alert.alert("Password reset, please check your email")
            }, (error) => {
                Alert.alert(error.message);
            });
    }

    onBackToLoginPress = () => {
        var navActions = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: "Login"})
            ]
        });

        this.props.navigation.dispatch(navActions);
    }

    render() {
        return (
            <View style={{paddingTop:50, alignItems:"center"}}>
                <Text>Forgot Password</Text>
                
                <View style={{paddingTop:10}} />

                <TextInput style={{width: 200, height: 40, borderWidth: 1}} 
                value={this.state.email}
                onChangeText={(text) => { this.setState({email: text}) }}
                 />

                 <View style={{paddingTop:10}} />

                 <Button title="Reset Password" onPress={this.onResetPasswordPress} />

                 <View style={{paddingTop:10}} />

                 <Button title="Back to Login" onPress={this.onBackToLoginPress} />

            </View> 
        ); 
    }
}

const styles = StyleSheet.create({

});
