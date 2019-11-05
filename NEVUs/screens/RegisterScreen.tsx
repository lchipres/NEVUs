import * as React from 'react';
import { StyleSheet, View, Image,KeyboardAvoidingView, Text } from "react-native";
import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import strings from "../config/strings";
import constants from "../config/constants";

interface State {
    email: string;
    password: string;
    confirmPassword:string;
    emailTouched: boolean;
    passwordTouched: boolean;
    passwordConfTouched: boolean;
  }

interface Props{
  navigation:any
}

class RegisterScreen extends React.Component<Props,State>{
    passwordInputRef= React.createRef<FormTextInput>();
    passwordConRef= React.createRef<FormTextInput>();
  
  state: State = {
    email: "",
    password:"",
    emailTouched:false,
    passwordTouched:false,
    passwordConfTouched:false,
    confirmPassword:""
  };

  handleEmailChange = (email: string) =>{
    this.setState({email:email});
  };

  handlePasswordChange = (password: string) =>{
    this.setState({password:password});
  };

  handlePasswordConChange = (confirmPassword:string)=>{
    this.setState({confirmPassword:confirmPassword})
  };

  handleRegisterPress = () => {
    this.props.navigation.navigate('Login');
    console.log("Register button pressed");
    };

  handleEmailSubmitPress = () => {
    if (this.passwordInputRef.current){
      this.passwordInputRef.current.focus();
    }
  };

  handlePasswordSubmitPress = () =>{
        if (this.passwordConRef.current){
        this.passwordConRef.current.focus();
      }
  };


  handleEmailBlur = () => {
    this.setState({emailTouched:true});
  };

  handlePasswordBlur = () => {
    this.setState({passwordTouched:true});
  };

  handlePasswordConfBlur = () => {
    this.setState({passwordConfTouched:true});
  };


    render(){
      const {
        email,
        password,
        confirmPassword,
        emailTouched,
        passwordTouched,
        passwordConfTouched
      } = this.state;

      const {navigate} = this.props.navigation;

      const emailError =
        !email && emailTouched
          ? strings.EMAIL_REQUIERED
          : undefined;
      const passwordError = 
        !password && passwordTouched
          ? strings.PASSWORD_REQUIERED
          : undefined;
      const passwordConfError =
        !confirmPassword && passwordConfTouched
          ? strings.PASSWORD_MATCH_REQUIERED
          :undefined;

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
      <View style={styles.container}>
        <View style = {styles.logoContainer}>
          <Image 
          source={require('../assets/images/registrate.png')}  
          style={styles.logo} />
        </View>
        <View style={styles.form}>
          <Text>Correo:</Text>
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
            blurOnSubmit={constants.IS_IOS}
          />
          <Text>Contraseña:</Text>
          <FormTextInput
            ref={this.passwordInputRef}
            value = {this.state.password}
            onChangeText={this.handlePasswordChange}
            placeholder={strings.PASSWORD_PLACEHOLDER}
            onSubmitEditing={this.handlePasswordSubmitPress}
            secureTextEntry={true}
            returnKeyType="next"
            onBlur={this.handlePasswordBlur}
            error={passwordError}
            blurOnSubmit={constants.IS_IOS}
          />
          <Text>Confirme su Contraseña:</Text>
          <FormTextInput
            ref={this.passwordConRef}
            value = {this.state.confirmPassword}
            onChangeText={this.handlePasswordConChange}
            placeholder={strings.PASSWORD_PLACEHOLDER}
            secureTextEntry={true}
            returnKeyType="done"
            onBlur={this.handlePasswordConfBlur}
            error={passwordConfError}
            blurOnSubmit={constants.IS_IOS}
          />
          <Button label={strings.REGISTER} onPress={() => navigate('Login')}
          disabled={!email||!password||!confirmPassword}
          
          />
        </View>
      </View>
      </KeyboardAvoidingView>
    );
    }
  }
   // Edite algunos estilos -SztyLe
  const styles = StyleSheet.create({
    container:{
      zIndex: 0,
      flex: 1,
      padding: 15,
      display: "flex",
      backgroundColor: '#b33939'
    },
    logoContainer: {
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center',
      zIndex: 1,
      
    },
    logo: {
      // flex: 1,
       width:"100%",
       height: '27.5%',
       top: '-30%',
       zIndex: 1,
       borderRadius: 50
      // bottom: '-5%',
      // alignSelf:"center",
      // justifyContent: 'flex-start',
      // resizeMode: 'contain',
      // display: 'flex',
      
    },
    form: {
      flex:1,
      alignSelf:"center",
      justifyContent:"center",
      width:"95%",
      display: "flex",
      top: '-8%'
      
    },
    title:{
      alignSelf:"center",
    },
    btn: {
      bottom: '5%'
    }
  });

export default RegisterScreen;