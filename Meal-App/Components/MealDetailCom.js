import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const MealDetailCom = ({
  duration,
  affordability,
  complexity,
  style,
  textstyle,
}) => {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailsitem, textstyle]}>{duration}M</Text>
      <Text style={[styles.detailsitem, textstyle]}>{affordability}</Text>
      <Text style={[styles.detailsitem, textstyle]}>{complexity}</Text>
    </View>
  );
};

export default MealDetailCom;
const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailsitem: {
    marginHorizontal: 4,
    fontSize: 15,
  },
});
