import React from 'react';
import { SafeAreaView, ScrollView, Text, View, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import Icon from 'react-native-vector-icons/Ionicons';
import safeViewAndroid from "./styles/androidSafeView.js";
import taskStyles from './styles/taskStylesheet.js';
import searchComponentStyles from './styles/searchStylesheet.js';
import headerComponentStyles from './styles/headerStylesheet.js';
import categoriesContainerStyles from './styles/categoriesContainerStylesheet.js';
import parentScrollComponentStyles from './styles/parentScrollViewStylesheet.js';
import TASKS from './taskList.js';


const TaskItem = ({ title }) => (
  <View style={taskStyles.taskItem}>
    <Text style={taskStyles.taskTitle}>{title}</Text>
  </View>
);

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  });
  return (
    <SafeAreaView style={safeViewAndroid.androidSafeArea}>
      <StatusBar style="auto" />

      <View style = {headerComponentStyles.header}>
        <View style={headerComponentStyles.subHeader}>
          <Text style={headerComponentStyles.headerText}>Hello, Devs</Text>
          
          <View style ={headerComponentStyles.imageHolder}>
          <View style={headerComponentStyles.ellipse}/>
          <Image source={require('./assets/person.png')} style={headerComponentStyles.profileImage} />
          </View>
        </View>

        <Text style={headerComponentStyles.headerSubText}>14 tasks today</Text>

      </View>

      <View style={searchComponentStyles.searchContainer}>
        
        <View style={searchComponentStyles.searchInputContainer}>
        <TouchableOpacity style={searchComponentStyles.searchIconContainer}>
          <Icon name='search-outline' size={20} color={'#000000'} style={searchComponentStyles.searchIcon}/>
        </TouchableOpacity>
        <TextInput
        style={searchComponentStyles.searchInput}
        placeholder='Search'
        />
        </View>

        <TouchableOpacity style={searchComponentStyles.filterIconBg}>
        <Icon name='options-outline' size={20} colour={'#000000'} style={searchComponentStyles.filterIcon}/>
        </TouchableOpacity>
      </View>

      <FlatList
        style={{ flex: 1 }}
        data={TASKS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskItem title={item.title} description={item.description} />}
        ListHeaderComponent={
          <ScrollView contentContainerStyle={parentScrollComponentStyles.scrollContainer}>
            <View style={categoriesContainerStyles.categoriesContainer}>
              <Text style={categoriesContainerStyles.categoriesHeaderText}>Categories</Text>
              <ScrollView contentContainerStyle={categoriesContainerStyles.tabScrollContainer} horizontal={true}>
                <View style={categoriesContainerStyles.tab}>
                  <Text style={categoriesContainerStyles.tabNameText}>Exercise</Text>
                  <Text style={categoriesContainerStyles.tabSubText}>12 Tasks</Text>
                  <Image source={require('./assets/young woman working online.png')} style={categoriesContainerStyles.tabImage} />
                </View>
                <View style={categoriesContainerStyles.tab}>
                  <Text style={categoriesContainerStyles.tabNameText}>Study</Text>
                  <Text style={categoriesContainerStyles.tabSubText}>12 Tasks</Text>
                  <Image source={require('./assets/young woman working at desk.png')} style={categoriesContainerStyles.tabImage} />
                </View>
                <View style={categoriesContainerStyles.tab}>
                  <Text style={categoriesContainerStyles.tabNameText}>Code</Text>
                  <Text style={categoriesContainerStyles.tabSubText}>12 Tasks</Text>
                  <Image source={require('./assets/young man coding.png')} style={categoriesContainerStyles.tabImage} />
                </View>
                <View style={categoriesContainerStyles.tab}>
                  <Text style={categoriesContainerStyles.tabNameText}>Cook</Text>
                  <Text style={categoriesContainerStyles.tabSubText}>12 Tasks</Text>
                  <Image source={require('./assets/young man cooking.png')} style={categoriesContainerStyles.tabImage} />
                </View>
                <View style={categoriesContainerStyles.tab}>
                  <Text style={categoriesContainerStyles.tabNameText}>Write</Text>
                  <Text style={categoriesContainerStyles.tabSubText}>12 Tasks</Text>
                  <Image source={require('./assets/young woman writing.png')} style={categoriesContainerStyles.tabImage} />
                </View>
                <View style={categoriesContainerStyles.tab}>
                  <Text style={categoriesContainerStyles.tabNameText}>Paint</Text>
                  <Text style={categoriesContainerStyles.tabSubText}>12 Tasks</Text>
                  <Image source={require('./assets/young boy painting.png')} style={categoriesContainerStyles.tabImage} />
                </View>
                <View style={categoriesContainerStyles.tab}>
                  <Text style={categoriesContainerStyles.tabNameText}>Garden</Text>
                  <Text style={categoriesContainerStyles.tabSubText}>12 Tasks</Text>
                  <Image source={require('./assets/woman gardening.png')} style={categoriesContainerStyles.tabImage} />
                </View>
                <View style={categoriesContainerStyles.tab}>
                  <Text style={categoriesContainerStyles.tabNameText}>Read</Text>
                  <Text style={categoriesContainerStyles.tabSubText}>12 Tasks</Text>
                  <Image source={require('./assets/young man reading.png')} style={categoriesContainerStyles.tabImage} />
                </View>
              </ScrollView>
            </View>
            <View style={taskStyles.tasksHeaderContainer}>
              <Text style={taskStyles.tasksHeaderText}>Ongoing Tasks</Text>
            </View>
          </ScrollView>
        }
      />
      
      
    </SafeAreaView>
  );
}

