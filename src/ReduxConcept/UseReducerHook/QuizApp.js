import { View, Text } from 'react-native';
import React, { useReducer, useEffect, useState } from 'react';
import newdata from '../FakeData/Data';

initionalState = {
  questations: [],
  status: 'loding',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        action: action.payload,
        status: 'ready',
      };
  }
};

const QuizApp = () => {
  const [state, dispatch] = useReducer(reducer, initionalState);
  console.log(state);
  const [getdata, setGetdata] = useState('');

  const questionsdata = [
    {
      question: 'Which is the most popular JavaScript framework?',
      options: ['Angular', 'React', 'Svelte', 'Vue'],
      correctOption: 1,
      points: 10,
    },
  ];

  const GetApiData = () => {
    setGetdata(questionsdata);
    console.log(getdata)
  };

  useEffect(() => {
    // dispatch({ type: 'dataReceived', payload: questionsdata });
    GetApiData()
  }, []);

  return (
    <View>
      <Text>QuizApp </Text>
    </View>
  );
};

export default QuizApp;
