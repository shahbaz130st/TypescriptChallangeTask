import { StyleSheet,Dimensions } from "react-native";
let deviceHeight = Dimensions.get("window").height
let deviceWidth = Dimensions.get("window").width
const styles = StyleSheet.create(
    {
        buttonStyle: {
            marginTop: 20,
            width: "100%",
            height: deviceHeight*5.5/100,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 6
        },
        buttonTextStyle: {
            textAlign: "center",
            color: "white",
            fontSize: 17
        },
        shadowStyle: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,

            elevation: 24,
        }
    }
)
export default styles;