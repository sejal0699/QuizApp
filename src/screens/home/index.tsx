import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {generateQuestions} from '../../utils/common';
import LevelSelector from '../../components/LevelSelector';
import Header from '../../components/Header';
import {Icons, Images} from '../../assets';
import {styles} from './styles';

const Home = () => {
  const [level, setLevel] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => setTimer(prev => prev - 1), 1000);
    // console.log(interval);
    return () => clearInterval(interval);
  }, [timer]);

  const startQuiz = selectedLevel => {
    console.log(selectedLevel);
    console.log(questions);
    setTimer(30);
    setLevel(selectedLevel);
    setQuestions(generateQuestions(4, selectedLevel));
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizCompleted(false);
  };

  const handleAnswer = selectedOption => {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
      setScore(prev => prev + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      {!level ? (
        <LevelSelector onSelectLevel={startQuiz} />
      ) : quizCompleted ? (
        <View style={styles.result}>
          <View style={styles.score}>
            <Text style={styles.text2}>
              Your Score: {'\n'} {score} / {questions.length}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => setLevel(null)}
            style={styles.buttons1}>
            <Text style={styles.text}>Restart</Text>
          </TouchableOpacity>
          <Image source={Images.completedImage} style={styles.image} />
        </View>
      ) : (
        <View style={styles.quiz}>
          <ImageBackground
            source={Icons.circleIcon}
            style={styles.imageBackground}>
            <Text style={styles.timer}>{timer}</Text>
          </ImageBackground>

          <View style={styles.questionView}>
            <Text style={styles.question}>
              What is {questions[currentQuestionIndex]?.question} ?
            </Text>
          </View>

          {questions[currentQuestionIndex]?.options.map((option, index) => (
            <TouchableOpacity style={styles.buttons}>
              <Text
                key={index}
                style={styles.text}
                onPress={() => handleAnswer(option)}>
                {' '}
                {`${option}`}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default Home;
