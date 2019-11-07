import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  KeyboardAvoidingViewComponent
} from "react-native";
import Button from "../components/Button";
import FormTextInput from "../components/FormTextInput";
import strings from "../config/strings";

import keys from "../config/keys";
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs

// Add the Firebase products that you want to use
require("firebase/auth");
require("firebase/firestore");


firebase.initializeApp(keys);

interface State {
  email: string;
  password: string;
  emailTouched: boolean;
  passwordTouched: boolean;
}

interface Props{
  navigation:any
}

class LoginScreen extends React.Component<Props, State> {
  passwordInputRef = React.createRef<FormTextInput>();

  readonly state: State = {
    email: "",
    password: "",
    emailTouched: false,
    passwordTouched: false
  };

  handleEmailChange = (email: string) => {
    this.setState({ email: email });
  };

  handlePasswordChange = (password: string) => {
    this.setState({ password: password });
  };

  handleEmailSubmitPress = () => {
    if (this.passwordInputRef.current) {
      this.passwordInputRef.current.focus();
    }
  };

  handleEmailBlur = () => {
    this.setState({ emailTouched: true });
  };

  handlePasswordBlur = () => {
    this.setState({ passwordTouched: true });
  };
  handleLoginPress = (email:string, password:string) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function(result) {
      this.props.navigation.navigate('Login');
      alert("TU COLA")
    // result.user.tenantId should be ‘TENANT_PROJECT_ID’.
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;

    // Handle error.
    });
  };

  render() {
    const { email, password, emailTouched, passwordTouched } = this.state;

    const {navigate} = this.props.navigation;
     
    const emailError =
      !email && emailTouched ? strings.EMAIL_REQUIERED : undefined;
    const passwordError =
      !password && passwordTouched ? strings.PASSWORD_REQUIERED : undefined;

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View style={styles.container}>
          <Image
            source={require("../assets/images/nevus_logo_2.png")}
            style={styles.logo}
          />
          <View style={styles.form}>
            <FormTextInput
            
              value={this.state.email}
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
              value={this.state.password}
              onChangeText={this.handlePasswordChange}
              placeholder={strings.PASSWORD_PLACEHOLDER}
              secureTextEntry={true}
              returnKeyType="done"
              onBlur={this.handlePasswordBlur}
              error={passwordError}
            />
            <Button
              label={strings.LOGIN}
              onPress={()=>{this.handleLoginPress(email,password)}}
              disabled={!email || !password}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

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

export default LoginScreen;
