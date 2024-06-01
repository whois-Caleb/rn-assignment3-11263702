import { StyleSheet } from "react-native";

export default taskStyles = StyleSheet.create({
  tasksHeaderContainer: {
    backgroundColor: '#f7f0e8',
    padding: 2,
    width: '100%',
    flexDirection: 'column',
    position: 'relative',
  },
  tasksHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  taskItem: {
    backgroundColor: '#FBF9F7',
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 20,
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 60,
    alignContent: 'center',
    borderColor: '#E8D1BA',
  },
  taskTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
