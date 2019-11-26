import * as React from "react";
import { StyleSheet,TextInputProps ,View ,Text} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import colors from "../../config/colors";
import { string } from "prop-types";

type Props = TextInputProps & Input &{
    error?: string;
};

class FormTextInput extends React.Component<Props>{

    textInputRef= React.createRef<Input>();

    focus = () =>{
        if(this.textInputRef.current){
            this.textInputRef.current.focus();
        }
    };
    render() {
        const {error,style, ...otherProps } = this.props;
        return(
            <View style={[styles.container,style]}>
            <Input
                ref={this.textInputRef}
                selectionColor={colors.DODGER_BLUE}
                style={[styles.textInput, style]}
                {...otherProps}
            />
            <Text style={styles.errorText}>{error || ""}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInput: {
        height: 40,
        borderColor: colors.SILVER,
        backgroundColor:'transparent',
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginBottom:20
    },
    container:{
        marginBottom:10
    },
    errorText:{
        height:20,
        color:colors.TORCH_RED
    }
});

export default FormTextInput;