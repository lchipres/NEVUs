import * as React from "react";
import { NativeSyntheticEvent, Platform, StyleSheet, TextInput,TextInputFocusEventData, Text, TextInputProps,View, NativeTouchEvent } from "react-native";
import colors from "../config/colors";

type Props = TextInputProps & {
    error?:string;
};

interface State {
    isFocused: boolean;
}

class FormTextInput extends React.Component<Props>{
    textInputRef = React.createRef<TextInput>();
    
    readonly state: State = {
        isFocused:false
    };

    focus = () =>{
        if(this.textInputRef.current){
            this.textInputRef.current.focus();
        }
    };

    handleFocus = (
        e:NativeSyntheticEvent<TextInputFocusEventData>
    ) => {
        this.setState({isFocused: true});
        if(this.props.onBlur){
            this.props.onBlur(e);
        }
    };

    handleBlur = (
        e:NativeSyntheticEvent<TextInputFocusEventData>
    ) => {
        this.setState({isFocused: true});
        if(this.props.onBlur){
            this.props.onBlur(e);
        }
    };

    render() {
        const {error, onFocus,onBlur, style, ...otherProps } = this.props;
        const {isFocused} = this.state;
        return(
            <View style={[styles.container,style]}>
            <TextInput
                ref={this.textInputRef}
                selectionColor={colors.DODGER_BLUE}
                underlineColorAndroid={
                    isFocused
                        ? colors.TORCH_RED
                        : colors.BLACK
                }
                style={styles.textInput}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                {...otherProps}
            />
            <Text style={styles.errorText}>{error||""}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        ...Platform.select({
            ios:{
                borderColor: colors.SILVER,
                borderBottomWidth: StyleSheet.hairlineWidth
            },
            android:{
                paddingLeft:6
            }
        })
    },
    errorText: {
        height:20,
        color: colors.TORCH_RED,
        ...Platform.select({
            android:{
                paddingLeft:6
            }
        })
    },
    container:{
        marginBottom: 10
    }
});

export default FormTextInput;