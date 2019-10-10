import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity} from "react-native";
import colors from "../config/colors";

interface Props {
    disabled?:boolean;
    label: String;
    onPress: () => void;
}

class Button extends React.Component<Props> {
    render() {
        const {disabled, label, onPress} = this.props;
        
        const containerStyle=[
            styles.container,
            disabled
                ? styles.containerDisabled
                : styles.containerEnabled
        ];
        return(
            <TouchableOpacity style={styles.container} onPress={onPress} disabled={disabled}>
                <Text style={styles.text}>{label}</Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width:"100%",
        alignItems:"center",
        justifyContent: "center",
        backgroundColor: colors.DODGER_BLUE,
        marginBottom: 12,
        paddingVertical: 12,
        borderRadius: 4,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "rgba(255,255,255,0.7)"
    },
    text: {
        color: colors.WHITE,
        textAlign: "center",
        height:20
    },
    containerEnabled:{
        opacity:1
    },
    containerDisabled:{
        opacity:0.3
    }
})

export default Button;