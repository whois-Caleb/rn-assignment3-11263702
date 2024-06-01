import { StyleSheet } from "react-native";

export default StyleSheet.create({
  categoriesContainer: {
    paddingVertical: 10,
    flexDirection: 'column',
    width: '100%',
    backgroundColor: '#f7f0e8',
  },
  categoriesHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabScrollContainer: {   
    paddingVertical: 20,
    flexGrow: 1,
    flexDirection: 'row',
  },
  tab: {
    flexDirection: 'column',
    borderRadius: 20,
    padding: 20,
    height: 280,
    width: 280,
    backgroundColor: '#FBF9F7',
    marginHorizontal: 15,
  },
  tabNameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
  tabSubText: {
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
