import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#f7f0e8',
    alignItems: 'center',
    justifyContent: 'center'
  },
  scrollText: {
    fontSize: 28,
  },
  header: {
    paddingHorizontal: 10,
    backgroundColor: '#f7f0e8',
    width: '100%',
  },
  imageHolder: {
    position: 'relative',
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
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  headerText: {
    fontFamily: 'Lato-Regular',
    fontSize: 32,
    fontWeight: '700',
  },
  headerSubText: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
  },
  searchContainer: {
    flexDirection: 'row',
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
    backgroundColor: 'white',
  },
  searchInput: {
    position: 'absolute',
    left: 25,
    flexDirection: 'row',
    paddingHorizontal: 20,
    height: 40,
    width: 200,
    backgroundColor: 'white',
  },
  searchIcon: {
    padding: 10,
    position: 'absolute',
    left: 10,
    zIndex: 1,
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
  },
});
