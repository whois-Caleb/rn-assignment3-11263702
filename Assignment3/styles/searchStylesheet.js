import { StyleSheet } from "react-native";

export default searchComponentStyles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        position: 'relative',
        top: 15,
        padding: 20,
        border: 1,
      },
      searchInputContainer:{
        borderRadius: 12,
        position: 'relative',
        flexDirection: 'row',
        paddingHorizontal: 2,
        height: 40,
        width: 250,
        backgroundColor: '#FBF9F7',
      },
      searchInput: {
        position: 'absolute',
        left: 25,
        flexDirection: 'row',
        paddingHorizontal: 20,
        height: 40,
        width: 200,
        backgroundColor: '#FBF9F7',
      },
      searchIcon: {
        padding: 10,
        position: 'absolute',
        left: 10,
        zIndex: 1,
      },
      searchIconContainer: {

        position: 'relative',
        backgroundColor: '#fFBF9F7',
        paddingHorizontal: 5,
        zIndex: 1,
        left: -10,
      },
      filterIconBg: {
        position: 'absolute',
        right: 30,
        top: 20,
        borderRadius: 12,
        backgroundColor: '#F0522F',
        height: 40,
        width: 40,
    
      },
      filterIcon: {
        padding: 10,
        position: 'absolute',
        color: 'white',
      },
})