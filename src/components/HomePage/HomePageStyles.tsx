import { StyleSheet } from "react-native";

const homepageStyles = (dimensions) => {
    return StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center'
      },
      scrolText: {
        color: 'black',
        fontSize: 14,
        marginRight: 10,
        fontWeight: '500'
      },
      buttonContainer: {
        justifyContent: "space-around",
        marginTop: 20,
        flexDirection: 'row'
      },
      itemBox: {
        borderWidth: 0.5,
        borderColor: '#959595',
        marginTop: 5,
        width: dimensions.width * 1,
        height: dimensions.height * 0.15,
        //backgroundColor: 'red',
        flexDirection: 'row',
        
      },

      itemCircle: {
        width: dimensions.width * 0.25,
        height: dimensions.height * 0.125,
        marginTop: 10,
      },
      imgItem: {
        marginLeft: 10,
        width: '100%',
        height: '100%',
        borderRadius: 200,
        borderWidth: 0.5,
        borderColor: '#959595',
      },
      itemDescription: {
        marginTop: 30,
        marginLeft: 20,
        width: dimensions.width * 0.4,
        height: dimensions.height * 0.08,
        
      },

      itemName: {
        flexDirection: 'row',
        width: '100%',
        height: dimensions.height * 0.04,
      },
      itemText: {
        marginLeft: 30,
        fontWeight: '500',
        fontSize: 16,
        color: '#00A6FB'
      },
      itemPriceText: {
        marginRight: 20,
        color: '#969696',
        fontWeight: '500',
        fontSize: 14,
      },

      optionBox: {
        justifyContent: 'space-evenly',
        left: 220,
        marginTop: 200,
        position: "absolute",
        backgroundColor: '#FCFCFC',
        height: 272,
        width: 172
      },

      option: {
        width: '100%',
        height: 30,
        alignItems: 'center',
        flexDirection: 'row',
      },

      optionText: {
        marginLeft: 20,
        fontSize: 14,
        color: 'black'
      }

      });
}

export default homepageStyles;