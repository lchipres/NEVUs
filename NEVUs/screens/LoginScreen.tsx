import * as React from "react";
import { StyleSheet, Text, View, ImageBackground, Image,KeyboardAvoidingView, KeyboardAvoidingViewComponent } from "react-native";
import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import strings from "../config/strings";

interface State {
  email: string;
  password: String;
  emailTouched: boolean;
  passwordTouched: boolean;
}

class LoginScreen extends React.Component<{ }, State> {
  
  passwordInputRef= React.createRef<FormTextInput>();
  
  readonly state: State = {
    email: "",
    password:"",
    emailTouched:false,
    passwordTouched:false
  };

  handleEmailChange = (email: string) =>{
    this.setState({email:email});
  };

  handlePasswordChange = (password: string) =>{
    this.setState({password:password});
  };

  handleEmailSubmitPress = () =>{
    if(this.passwordInputRef.current){
      this.passwordInputRef.current.focus();
    }
  };

  handleEmailBlur = () => {
    this.setState({emailTouched:true})
  }

  handlePasswordBlur = () => {
    this.setState({passwordTouched:true})
  }
  handleLoginPress = () => {
    console.log("Login button pressed");
  };

    render(){
      const{
        email,
        password,
        emailTouched,
        passwordTouched
      } = this.state

      const emailError =
      !email && emailTouched
        ? strings.EMAIL_REQUIERED
        : undefined;
      const passwordError=
      !password && passwordTouched
        ? strings.PASSWORD_REQUIERED
        : undefined;
    return (
      <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      >
      <View style={styles.container}>
          <Image source={require('../assets/images/Nevus_logo.png')}  
          style={ styles.logo} />
        <View style={styles.form}>
          <FormTextInput
            value = {this.state.email}
            onChangeText={this.handleEmailChange}
            placeholder={strings.EMAIL_PLACEHOLDER}
            onSubmitEditing={this.handleEmailSubmitPress}
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
            onBlur={this.handleEmailBlur}
            error={emailError}
          />
          <FormTextInput
            ref={this.passwordInputRef}
            value = {this.state.password}
            onChangeText={this.handlePasswordChange}
            placeholder={strings.PASSWORD_PLACEHOLDER}
            secureTextEntry={true}
            returnKeyType="done"
            onBlur={this.handlePasswordBlur}
            error={passwordError}
          />
          <Button label={strings.LOGIN} 
            onPress={this.handleLoginPress}
            disabled={!email || !password}
          />
        </View>
      </View>
      </KeyboardAvoidingView>
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