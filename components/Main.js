import React, { Component } from 'react'
import { 
    StyleSheet,
    View,
    Text,
  } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator } from "@react-navigation/stack";


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { 
  fetchUser 
} from '../redux/actions/index';

import FeedScreen from './main/Feed';
import ContributeScreen from './main/Contribute'
import ProfileScreen from './main/Profile'


const Tab = createBottomTabNavigator();
const StackT = createStackNavigator();

export class Main extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }
  render() {
    
    return (
      <Tab.Navigator 
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#215A88', tabBarStyle:{ backgroundColor: "#f2f2f2" } }}>
      {/* https://materialdesignicons.com/  LOOK FOR VECTOR ICONS HERE */}
            <Tab.Screen 
                name="Feed" 
                component={FeedScreen} 
                screenOptions={{ headerShown: false }}
                options={{
                  headerShown:false,
                  headerShadowVisible: false,
                  headerTintColor: "#fff",
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={26} />
                  ),
              }}/>
              

            {/* 5:50:14 Listener Navigation */}
            <Tab.Screen
                name="Data Collected"
                // listeners={({ navigation })}
                component={ContributeScreen}
                //navigation = {this.props.navigation}
                options={{
                  headerTintColor: "#fff",
                  headerStyle: {
                    backgroundColor: "#215A88",
                    borderBottomWidth: 0,
                  },
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                        name="book-open-page-variant"
                        color={color}
                        size={26}
                          />
                        ),
                      }}/>
             <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                //navigation = {this.props.navigation}
                options={{
                  headerTintColor: "#fff",
                  headerStyle: {
                    backgroundColor: "#215A88",
                    borderBottomWidth: 0,
                  },
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                        name="account"
                        color={color}
                        size={26}
                          />
                        ),
                      }}
              />

              

             
      </Tab.Navigator>
    )
  }
}

const mapStateToProps = (store)=>({
  currentUser:store.userState.currentUser
})

const mapDispatchProps = (dispatch) => 
    bindActionCreators({ 
        fetchUser 
    }, dispatch);

export default connect(mapStateToProps, mapDispatchProps)(Main);