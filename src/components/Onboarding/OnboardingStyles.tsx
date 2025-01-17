import { StyleSheet } from "react-native";

const onboardingStyles = (dimensions) => {
    return StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
      },
    
      person: {
        width: dimensions.width * 1,
        height: '60%'
      },

      stepIndicatorContainer: {
        position: 'absolute',
        width: dimensions.width * 0.8,
        alignSelf: 'center',
        marginTop: dimensions.height * 0.56,
        flexDirection: "row",
    },

    stepIndicator: {
        flex: 1,
        height: dimensions.height * 0.006, 
        backgroundColor: '#D9D9D9',
        borderRadius: 10
    },
    
    overviewContainer: {
        width: dimensions.width * 1,
        height: dimensions.height * 0.16,
       
        flexDirection: "row",
    },

    numberBox: {
        width: dimensions.width * 0.4,
        height: '100%',
        marginLeft: 6,
        justifyContent: 'center',
    },
    onboardText: {
        width: '60%',
        height: '100%',
        justifyContent: 'center',
    },

    welcomeText: {
        color: 'black',
        fontSize: 16,
        fontWeight: "700"
    },

    spinGoText: {
        color: "#00A6FB"
    },

    descriptionBox: {
        width: dimensions.width * 0.9,
        height: 38,
        alignSelf: "center",
        marginBottom: 20
    },

    descriptionText: {
        fontSize: 14,
        color: 'black'
    }
    

      });
}

export default onboardingStyles;