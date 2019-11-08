import * as React from 'react';
import { StyleSheet, View, Image,KeyboardAvoidingView, Text } from "react-native";
import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import strings from "../config/strings";
import constants from "../config/constants";
import { string } from 'prop-types';
import firebase from 'firebase';


interface State {
    email: string;
    password: string;
    confirmPassword:string;
    emailTouched: boolean;
    passwordTouched: boolean;
    passwordConfTouched: boolean;
    registrado:boolean
  }

interface Props{
  navigation:any
}//Navegacion

class RegisterScreen extends React.Component<Props,State>{
    emailRef = React.createRef<FormTextInput>();
    passwordInputRef= React.createRef<FormTextInput>();
    passwordConRef= React.createRef<FormTextInput>();
  
  state: State = {
    email: "",
    password:"",
    emailTouched:false,
    passwordTouched:false,
    passwordConfTouched:false,
    confirmPassword:"",
    registrado:false
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

  handleRegisterPress = (email: string, password: string) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function() {
      alert("Registrado correctamente")
      return true;
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/email-already-in-use') {
        alert('Ya existe una cuenta asociada a este correo');
      }
      if (errorCode == 'auth/invalid-email') {
        alert('Escriba un correo valido');
      }
      else {
        alert(errorMessage);
      }
  console.log(error);
    // Handle error.
    });
  };

  handleEmailSubmitPress = () => {
    if (this.emailRef.current){
      this.emailRef.current.focus();
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

      const {navigate} = this.props.navigation;//Se encarga de la navegacion 

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
        <View style = {styles.logo}>
          <Image 
          source={require('../assets/images/registrate.png')}  
          style={styles.logo} />
        </View>
        <View style={styles.form}>

          <Text>Correo:</Text>

          <FormTextInput
            ref = {this.emailRef}
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

          <Button label={strings.REGISTER} onPress={() => {
                if(this.handleRegisterPress(email,password)!==null){
                  this.props.navigation.navigate('Login')
                }}}
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
      container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "space-between"
  },
  logo: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center"
  },
  form: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    width: "80%"
  }
  });

export default RegisterScreen;