import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import { colors } from "../Themes/colors";

const Loader = (props) => {
    if (props.visible) {
        return (
            <View style={style.mainViewStyle}>
                <ActivityIndicator size={"large"} color={colors.whiteColor} />
            </View>
        )
    }
    else {
        return null;
    }
}
export default Loader;
const style = StyleSheet.create({
    mainViewStyle: {
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: "#80808066",
        alignItems: "center",
        justifyContent: "center"
    }
})