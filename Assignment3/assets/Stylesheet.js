import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f0e8',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
  }
});
