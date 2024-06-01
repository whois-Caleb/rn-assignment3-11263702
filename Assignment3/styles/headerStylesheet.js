import { StyleSheet } from "react-native";

export default headerComponentStyles = StyleSheet.create({
    header: {
        paddingHorizontal: 10,
        backgroundColor: '#f7f0e8',
        width: '100%',
      },
      imageHolder: {
        position: 'relative',
        top: 20,
        width: 52,
        height: 52,
        justifyContent: 'center',
        alignItems: 'center',
      },
      ellipse: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'white',
    
      },
      subHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      },
      profileImage: {
        position: 'absolute',
        top: -2,
        height: 50,
        width: 50,
        borderRadius: 25,
      },
      headerText: {
       fontSize: 32,
        fontWeight: '700',
      },
      headerSubText: {
        fontSize: 12,
      },
    
})