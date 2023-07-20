import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
// import Friends from '../screens/Friends';
// import Home from '../screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
// import Downloads from '../screens/Downloads';
// import Messages from '../screens/Messages';
// import Settings from '../screens/Settings';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import * as Animatable from 'react-native-animatable';

import F5 from 'react-native-vector-icons/FontAwesome5';
import Downloads from './Downloads';
import PanDetails from './DocxDetails';
import AadhaarDetails from './AadhaarDetails';
import CongratulationPage from './CongratulationPage';
import Selfie from './Selfie';
import Transaction from './Transaction';
import MainHome from './MainHome';

const Tab = createBottomTabNavigator();

const TabStack = () => {
  const tabIcons = [
    'user-friends',
    'comment',
    'home',
    'arrow-circle-down',
    'cog',
  ];
  const TabData = [
    {
      main_icon: tabIcons[0],
      icon: F5,
      activeIcon: 'active',
      name: 'Home1',
      component: Home,
      header_color: '#BB57EA',
    },
    {
      main_icon: tabIcons[3],

      icon: F5,
      activeIcon: 'active',
      name: 'Downloads',
      component: Downloads,
      header_color: '#FF4343',
    },
  ];
  const TabButton = (props: {item: any; focused: any}) => {
    const {item, focused} = props;

    // console.log(props);

    const viewRef = useRef<any>(null);
    // useEffect(() => {
    //   if (focused) {
    //     viewRef?.current?.bounce();
    //   }
    // }, [focused]);

    return (
      <View
        style={{
          // width: '100',
          // flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          // width: focused ? 55 : 'auto',
          // height: focused ? 55 : 'auto',
          // elevation: focused ? 5 : 0,
          // padding: 10,
          // justifyContent: 'center',
          flexDirection: 'row',
          backgroundColor: focused ? '#008A9E' : 'transparent',
          // borderRadius: 50,
          transform: [
            // {scale: focused ? 1.3 : 1},
            // {translateY: focused ? -50 : 0},
          ],
        }}
        ref={viewRef}>
        {/* <F5
          name={item.main_icon}
          size={20}
          style={{
            shadowOffset: {
              height: 0,
              width: 0,
            },

            transform: [
              {scale: focused ? 1.3 : 1},
              // {translateY: focused ? 0 : 0},
            ],
            color: focused ? 'white' : '#00454F',
          }}
        /> */}
      </View>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="Congo"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 3,

          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,

          // borderRadius: 50,
          height: 60,
          position: 'absolute',
          // bottom: 10,
          // right: 15,
          // left: 15,
        },
      }}>
      <Tab.Screen
        name={'Home1'}
        component={PanDetails}
        options={{
          // tabBarHideOnKeyboard: true,
          headerShown: false,

          // header: prop => {
          //   if (tab.name == 'Home1') {
          //     return;
          //   }
          //   return tab.name != 'Home' ? (
          //     <View
          //       style={{
          //         justifyContent: 'center',
          //         flexDirection: 'row',
          //         backgroundColor: '#F4F4FC',
          //       }}>
          //       <View
          //         style={{
          //           marginVertical: 10,
          //           // paddingHorizontal: 35,
          //           // paddingVertical: 5,

          //           // backgroundColor: tab.header_color,
          //           // borderRadius: 20,
          //         }}>
          //         <Text
          //           style={{
          //             color: tab.header_color,
          //             fontSize: 20,
          //             letterSpacing: 0.8,
          //             fontFamily: 'Poppins-Medium',
          //           }}>
          //           {tab.name}
          //         </Text>
          //       </View>
          //     </View>
          //   ) : (
          //     <View style={styles.head_container}>
          //       <View style={styles.head}>
          //         {/* <TouchableOpacity
          //           onPress={() => prop.navigation.navigate('Home')}
          //           style={styles.svg_btn}>
          //           <Svg
          //             style={{width: 45, height: 45}}
          //             viewBox="0 0 245 204">
          //             <Path
          //               fill={'#00899C'}
          //               d="M122.5 102L31.115 64.005L36.75 204H12.25L18.13 58.5225L0 51L122.5 0L245 51L122.5 102ZM122.5 38.25C115.762 38.25 110.25 41.055 110.25 44.625C110.25 48.195 115.762 51 122.5 51C129.237 51 134.75 48.195 134.75 44.625C134.75 41.055 129.237 38.25 122.5 38.25ZM122.5 114.75L190.732 86.3175C199.43 98.3025 205.433 112.71 207.393 128.392C203.718 127.882 199.92 127.5 196 127.5C164.762 127.5 137.445 144.968 122.5 170.978C114.914 157.727 104.152 146.754 91.2683 139.133C78.3843 131.511 63.8195 127.503 49 127.5C45.08 127.5 41.2825 127.882 37.6075 128.392C39.5675 112.71 45.57 98.3025 54.2675 86.3175L122.5 114.75Z"
          //               fill-opacity="0.86"
          //             />
          //           </Svg>
          //         </TouchableOpacity> */}
          //         <View
          //           style={{
          //             flexDirection: 'row',
          //             alignItems: 'center',
          //             justifyContent: 'space-between',
          //           }}>
          //           <Text style={styles.user_greet}>Hey, Jessica</Text>

          //           <View style={styles.img_container}>
          //             {/* <Image
          //               source={require('../assets/img/scarlet.jpg')}
          //               style={styles.user_img}
          //             /> */}
          //           </View>

          //           {/* <TouchableOpacity>
          //             <Ionicons
          //               name="menu"
          //               style={{
          //                 color: '#00606D',
          //               }}
          //               size={32}
          //             />
          //           </TouchableOpacity> */}
          //         </View>
          //       </View>
          //       {/* <SearchBar /> */}
          //     </View>
          //   );
          // },

          tabBarIcon: props => {
            return (
              // <TabButton item={undefined} {...props} />
              <F5
                name={'home'}
                size={20}
                style={{
                  transform: [{scale: props.focused ? 1.3 : 1}],
                  color: props.focused ? '#008A9E' : '#00454F',
                }}
              />
            );
          },

          // tabBarButton: props => <TabButton item={tab} {...props} />,
        }}
      />
      <Tab.Screen name={'Home2'} component={AadhaarDetails} />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name={'Congo'}
        component={CongratulationPage}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name={'Selfie'}
        component={Selfie}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name={'Transactions'}
        component={Transaction}
      />
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name={'MainHome'}
        component={MainHome}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  head_container: {
    backgroundColor: '#F4F4FC',
    paddingHorizontal: 20,
    paddingVertical: 11,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    alignItems: 'center',
  },
  svg_btn: {
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  user_greet: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    color: '#006C7B',
    letterSpacing: 0.2,
  },
  img_container: {
    elevation: 5,
    shadowColor: 'aqua',
    borderRadius: 20,
    marginLeft: 20,
  },
  user_img: {borderRadius: 50, width: 40, height: 40},
});

export default TabStack;