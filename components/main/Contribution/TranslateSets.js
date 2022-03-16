import * as React from 'react';
import { View } from 'react-native';
import { Checkbox } from 'react-native-paper';

const MyComponent = () => (
  <View>
    <Checkbox.Item label="Item" status="checked" />
  </View>
);

export default MyComponent;