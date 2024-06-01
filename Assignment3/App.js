import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import safeViewAndroid from "./styles/androidSafeView.js";
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles/Stylesheet.js';
import searchComponentStyles from './styles/searchStylesheet.js';
import headerComponentStyles from './styles/headerStylesheet.js';
import categoriesContainerStyles from './styles/categoriesContainerStylesheet.js';
import parentScrollComponentStyles from './styles/parentScrollViewStylesheet.js';
import { Button, TouchableOpacity } from 'react-native';

export default function App() {
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

      
      <ScrollView contentContainerStyle={parentScrollComponentStyles.scrollContainer}>
        
        <View style={categoriesContainerStyles.categoriesContainer}>
            <Text style={categoriesContainerStyles.categoriesHeaderText}>
              Categories
            </Text>

          <ScrollView contentContainerStyle={categoriesContainerStyles.tabScrollContainer} horizontal= {true}>

           
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
        
        
      </ScrollView>
      
    </SafeAreaView>
  );
}
