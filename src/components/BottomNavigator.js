import React, {Component} from 'react';
import {View} from 'react-native';
import {Icon} from 'react-native-elements';
import {styles} from './theme/styles';
// import Icon from 'react-native-vector-icons/FontAwesome';
class BottomNavigator extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.holderStyle}>
          <Icon name="home" type="material" reverse size={28} />
        </View>
        <View style={styles.barStyle}>
          <Icon name="menu" type="material" color="#fff" />
          <Icon name="block" type="material" color="#fff" />
          <View style={styles.container1}>
            <Icon
              name="favorite"
              type="material"
              color="#fff"
              containerStyle={{marginHorizontal: 70}}
            />
            <Icon name="search" type="material" color="#fff" />
          </View>
        </View>
      </View>
    );
  }
}

export default BottomNavigator;
