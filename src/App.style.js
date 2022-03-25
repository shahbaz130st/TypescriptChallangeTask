import { StyleSheet } from "react-native";
export const markdownStyle = {
    collectiveMd: {
        heading1: {
            color: 'red'
        },
        heading2: {
            color: 'green',
            textAlign: "right"
        },
        strong: {
            color: 'blue'
        },
        em: {
            color: 'cyan'
        },
        text: {
            color: 'black',
        },
        blockQuoteText: {
            color: 'grey'
        },
        blockQuoteSection: {
            flexDirection: 'row',
        },
        blockQuoteSectionBar: {
            width: 3,
            height: null,
            backgroundColor: '#DDDDDD',
            marginRight: 15,
        },
        codeBlock: {
            fontFamily: 'Courier',
            fontWeight: '500',
            backgroundColor: '#DDDDDD',
        },
        tableHeader: {
            backgroundColor: 'grey',
        },
    }
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        margin: 10,
        padding: 20
    },
    scrollView: {
        backgroundColor: "white",
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    }
});
