import React, { useState, useEffect, useReducer, useCallback } from 'react';
import { data } from "./data";
import {reducer} from './reducer'
const api = '';

const AppContext = React.createContext();

const Context = ({children}) => {

    const [i, setI] = useState(0);
    const [url, setUrl] = useState(api);
    const [info, setInfo] = useState([]);
    const [end, setEnd] = useState(false);
    const [value, setValue] = useState('');
    const [percent, setPercent] = useState(0);
    const [error, setError] = useState(false);
    const [answers, setAnswers] = useState([]);
    const [isHome, setIsHome] = useState(true);
    const [loading, setLoading] = useState(false);
    const [youAnswered, setYouAnswered] = useState(0);
    const [initialValue, setInitialValue] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState(0);

    // let youAnswered = 0;
    // let correctAnswer = 0;
    // let wrongAnswer = 0;

    // this place is for useReducer and the home component
    const initialState = {
        category: '',
        difficulty: '',
        type: '',
    };


    const [state, dispatch] = useReducer(reducer, initialState);

    const handleClick = (val, event) => {
        data.map(item => {
            const {name} = item;
            if (val === name) {
                dispatch({type: val, payload: event})
            }
            return item;
        });
    };
    // there it ends


    const fetchUrl = useCallback(async() => {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setInfo(data.results);
        if (data.response_code === 1){
            setError(true);
        }
        setLoading(false);
    }, [url]);

    useEffect(() => {
        fetchUrl();
    }, [url, fetchUrl]);
    
    const {correct_answer, incorrect_answers = [], question} = info[i] || {};
    const arr = [correct_answer, ...incorrect_answers].sort((a, b) => a.length - b.length);

    // useEffect(() => {
        
    // }, [info]);


    const eachAnswer = {
        ans: arr,
        correct_answer,
        your_answer: value,
        question
    };

    const checkI = (i) => {
        if (i < info.length - 1) {
            setI(i + 1);
        }
        // else if (i === info.length) {
        //     setEnd(true);
        //     setI(i);
        // } 
        else {
            setEnd(true);
            setI(i);
        }
    };

    const numOfNum = () => {
        const {correct_answer, your_answer} = eachAnswer;
        if (correct_answer === your_answer) {
           setCorrectAnswer(correctAnswer + 1);
        }
        if (your_answer) {
            setYouAnswered(youAnswered + 1);
        }
        return;
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        answers.push(eachAnswer);
        e.target.reset();
        setValue('');
        checkI(i);
        percentage();
        numOfNum();
    };

    const handleSkip = () => {
        answers.push({...eachAnswer, your_answer: ''});
        checkI(i);
        setValue('');
        percentage();
        numOfNum();
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const initialChange = (e) => {
        if (e.target.value > 10 || e.target.value < 0){
            return;
        }
        setInitialValue(e.target.value);
    };

    const percentage = () => {
        setPercent(100 / info.length * answers.length);
    };

    const initialSubmit = (e) => {
        e.preventDefault();
        const {category, difficulty, type} = state;
        setUrl(`https://opentdb.com/api.php?amount=${initialValue}&category=${category}&difficulty=${difficulty}&type=${type}`)
        setIsHome(false)
        setInitialValue('')
    };

    const handleHome = () => {
        setIsHome(true);
        setEnd(false)
        setI(0);
        setAnswers([]);
        setYouAnswered(0);
        setCorrectAnswer(0);
        setPercent(0);
        setError(false)
    };

    return (
        <AppContext.Provider value={{
            arr, 
            question, 
            handleSubmit,
            handleSkip,
            handleChange, 
            answers, 
            value,
            i,
            info,
            end,
            percent,
            correctAnswer,
            youAnswered,
            loading,
            initialChange,
            initialValue,
            handleClick,
            initialSubmit,
            isHome,
            handleHome,
            error,
        }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGobalContext = () => {
    return React.useContext(AppContext);
};

export default Context;
