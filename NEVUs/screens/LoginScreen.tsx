import * as React from "react";
import { StyleSheet, Text, View, ImageBackground, Image } from "react-native";
import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import strings from "../config/strings";

interface State {
  email: string;
  password: String;
}

class LoginScreen extends React.Component<{ }, State> {
  readonly state: State = {
    email: "",
    password:""
  };

  handleEmailChange = (email: string) =>{
    this.setState({email:email});
  };

  handlePasswordChange = (password: string) =>{
    this.setState({password:password});
  };

  handleLoginPress = () => {
    console.log("Login button pressed");
  };

    render(){
    return (
      <View style={styles.container}>
          <Image source={require('../assets/images/Nevus_logo.png')}  
          style={ styles.logo} />
        <View style={styles.form}>
          <FormTextInput
            value = {this.state.password}
            onChangeText={this.handleEmailChange}
            placeholder={strings.EMAIL_PLACEHOLDER}
          />
          <FormTextInput
            value = {this.state.password}
            onChangeText={this.handlePasswordChange}
            placeholder={strings.PASSWORD_PLACEHOLDER}
          />
          <Button label={strings.LOGIN} onPress={this.handleLoginPress}/>
        </View>
      </View>
    );
    }
  }
  
  const styles = StyleSheet.create({
    container:{
      flex: 1,
      width:"100%",
      height:"100%",
      alignItems: "center",
      justifyContent: "space-between"
    },
    logo: {
      flex:1,
      width:"100%",
      resizeMode:"contain",
      alignSelf:"center"
    },
    form: {
      flex:1,
      alignSelf:"center",
      justifyContent:"center",
      width:"80%"
    }
  });

export default LoginScreen;