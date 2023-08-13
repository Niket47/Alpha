import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import Input from './Input';

const Form = ({ submit }) => {
  const [data, setData] = useState({
    title: '',
    amount: '',
  });

  const onchangehanler = (name, enter) => {
    setData({ ...data, [name]: enter });
    console.log(data);
  };
  const submithandler = () => {
    console.log(data);
    submit(data);
  };
  return (
    <View>
      <Input
        ConFig={{
          onChangeText: enter => onchangehanler('title', enter),
          value: data.title,
        }}
      />
      <Input
        ConFig={{
          onChangeText: enter => onchangehanler('amount', enter),
          value: data.amount,
        }}
      />
      <Button title="submit" onPress={submithandler} />
    </View>
  );
};

export default Form;
