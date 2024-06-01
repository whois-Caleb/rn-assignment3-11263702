import { StyleSheet } from "react-native";

export default StyleSheet.create({
  categoriesContainer: {
    padding: 20,
    flexDirection: 'column',
    alignContent: 'space-between',
    width: '100%',
    backgroundColor: '#f7f0e8',
  },
  categoriesHeaderText: {
    fontFamily: 'Lato-Regular',
    fontSize: 20,
  },
  tabScrollContainer: {
    paddingVertical: 20,
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tab: {
    flexDirection: 'column',
    padding: 20,
    height: 280,
    width: 280,
    backgroundColor: '#FBF9F7',
    marginHorizontal: 10,
  },
  tabNameText: {
    fontFamily: 'Lato-Regular',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  tabSubText: {
    fontFamily: 'Lato-Regular',
    fontSize: 12,
    color: '#000000',
  },
  tabImage: {
    padding: 5,
    alignSelf: 'center',
    top: 6,
    height: 212,
    width: 205,
  },
});
