import React from 'react';
import { StyleSheet, Image, View, Text, TextInput, Alert, TouchableOpacity } from 'react-native';
import { NavigationActions } from 'react-navigation';
import * as firebase from 'firebase';
import PasswordInputText from 'react-native-hide-show-password-input';
export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            titleText: "Welcome to",
            titleText_logo: "Meeting Interactive Board",
            hidePassword: true,
        };
    }

    managePasswordVisibility = () =>
    {
       this.setState({ hidePassword: !this.state.hidePassword });
    }

    onCreateLoginPress = () => {
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {

            }, (error) => {
                Alert.alert(error.message);
            });
    }

    onCreateAccountPress = () => {
        var navActions = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: "Signup"})
            ]
        });

        this.props.navigation.dispatch(navActions);
        
    }

    onForgotPasswordPress = () => {
        var navActions = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: "ForgotPassword"})
            ]
        });

        this.props.navigation.dispatch(navActions);
        
    }

    render() {
        return (
        <View style={{flexDirection: 'row'}}>
        <Image style={{width: 300, height: 500, marginRight:400, marginTop:100, marginLeft:100}} 
        source={require('../../assets/images/side_img.png')}
        />
        <View style={styles.boxRight}>
            <View style={{paddingTop:10, marginLeft: 'auto'}}>
                <Text style={styles.titleText}>
                {this.state.titleText}{'\n'}
                 </Text>
                    <View style={{justifyContent: 'center', alignItems: 'center', paddingBottom:10}}>
                        <Image style={{width: 200, height: 125}}
                         source={require('../../assets/images/icon.png')}
                        />
                    </View>
                <Text style={styles.titleText_logo}>
                {this.state.titleText_logo}{'\n'}
                 </Text>

                <View style={{paddingTop:5}} />

                <Text style={styles.follow}>Fewer walk, More talk, All your ideas connected</Text>

                <View style={{paddingTop:30}} />

                <Text>Email</Text>
                <TextInput style={{width: 360, height: 35, borderWidth: 1}} 
                 value={this.state.email}
                 onChangeText={(text) => { this.setState({email: text}) }}
                 placeholder = "example@email.com"
                  />

                <View style={{paddingTop:10}} />

                <PasswordInputText style={{width: 350, height: 40, borderWidth: 1}} 
                value={this.state.password}
                onChangeText={(text) => { this.setState({password: text}) }}
                />
               <TouchableOpacity
                 style={styles.Button}
                 activeOpacity = { .5 }
                 onPress={this.onCreateLoginPress} 
                 >  
                <Text style={styles.TextStyle}> Sign In </Text>
                </TouchableOpacity>
                <Text style={styles.TextLink} onPress={this.onForgotPasswordPress} >Forgot Password?</Text>
            </View> 
        </View></View>
        ); 
    }
}

const styles = StyleSheet.create({
      boxRight: {
        marginRight: 150,
      },
      TextStyle:{
        color:'#fff',
        textAlign:'center',
        fontSize: 25,
      },
      TextLink:{
        marginTop: 30,
        color:'#369EFD',
        textAlign:'center',
        fontSize: 15,
      },
      Button: {
        marginTop: 50,
        padding:25,
        backgroundColor:'#369EFD',
        borderRadius:50,
        borderWidth: 1,
        borderColor: '#fff'
      },
      titleText: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 60,
      },
      titleText_logo: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
      },
      follow:{
          color: "#808080",
          fontSize: 17,
          textAlign: 'center',
      }
});
