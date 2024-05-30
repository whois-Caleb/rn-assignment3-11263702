import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TextInput } from 'react-native';
import safeViewAndroid from "./assets/androidSafeView.js";
import styles from './assets/Stylesheet.js';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  return (
    <SafeAreaView style={safeViewAndroid.androidSafeArea}>
      <StatusBar style="auto" />

      <View style = {styles.header}>
        <View style={styles.subHeader}>
          <Text style={styles.headerText}>Hello, Devs</Text>
          
          <View style ={styles.imageHolder}>
          <View style={styles.ellipse}/>
          <Image source={require('./assets/person.png')} style={styles.profileImage} />
          </View>
        </View>

        <Text style={styles.headerSubText}>14 tasks today</Text>

      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
        <Icon name='search-outline' size={20} color={'black'} style={styles.searchIcon}/>
        <TextInput
        style={styles.searchInput}
        placeholder='Search'
        />
        </View>

        <View style={styles.filterIconBg}>
        <Icon name='options-outline' size={20} colour={'black'} style={styles.filterIcon}/>
        </View>
      </View>

      
      <View>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <Text style={styles.scrollText}>
          
          </Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
