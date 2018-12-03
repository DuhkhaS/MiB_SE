import React from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class SignupScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            passwordConfirm: "",
        };
    }

    onSignupPress = () => {

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
                <Text>Signup</Text>
                <TextInput style={{width: 200, height: 40, borderWidth: 1}} 
                 value={this.state.email}
                onChangeText={(text) => { this.setState({email: text}) }}
                  />

                <TextInput style={{width: 200, height: 40, borderWidth: 1}} 
                value={this.state.password}
                onChangeText={(text) => { this.setState({password: text}) }}
                />

                <TextInput style={{width: 200, height: 40, borderWidth: 1}} 
                value={this.state.passwordConfirm}
                onChangeText={(text) => { this.setState({passwordConfirm: text}) }}
                />

                <Button title="Signup" onPress={this.onSignupPress} />
                <Button title="Back to Login" onPress={this.onBackToLoginPress} />
            </View> 
        );
    }
}

const styles = StyleSheet.create({

});
