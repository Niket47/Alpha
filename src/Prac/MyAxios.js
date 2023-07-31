import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import axios from 'axios';

const MyAxios = () => {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    // const res = await axios({
    //   method: 'get',
    //   url: 'https://jsonplaceholder.typicode.com/posts',
    // }).then(response => {
    //   console.log(response.data);
    // });
    const res = await axios({
      method: 'post',
      url: 'https://jsonplaceholder.typicode.com/posts',
      data: {
        firstName: 'Fred',
        lastName: 'Flintstone',
      },
    }).then(response => {
      console.log(response.data);
    });
  };

  return (
    <View>
      <Text>Axios</Text>
    </View>
  );
};

export default MyAxios;
