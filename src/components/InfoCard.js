import {View, Text} from 'react-native';
import React from 'react';

const InfoCard = ({title, value}) => {
  return (
    <View
      style={{
        width: 200,
        alignItems: 'center',
        paddingVertical: 28,
      }}>
      <Text style={{fontSize: 25}}>{value}</Text>
      <Text style={{fontSize: 16, color: 'black'}}>{title}</Text>
    </View>
  );
};

export default InfoCard;
