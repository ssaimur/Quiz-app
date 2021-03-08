import React, { useRef } from 'react'
import './answers.css'
import { useGobalContext } from "./Context";
import { FaCheck } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

const Answers = () => {
    const {answers} = useGobalContext();
    return (
        <div className='answers'>
            <div className="answers__header">
                <h2>There goes your answers</h2>
            </div>
            <div className="answers__body">
                {answers.map((item, index) => {
                    const {ans, correct_answer, your_answer, question} = item;
                    return (
                        <div className='answers__body__item' key={`${index}${correct_answer}`}>
                            <div className="question">
                                <h3>{`${index + 1}. ${question}`}</h3>
                                <p className='skip'>{your_answer === '' && '(Skipped)'}</p>
                            </div>
                            {ans.map((item, index) => {
                                const show = your_answer === correct_answer;
                                return (
                                    <div className="each__item" key={item}>
                                        <div className="answer">
                                            <p>{`${index + 1}. ${item}`}</p>
                                            {(ans.indexOf(your_answer) === index) && <div className="indicator">
                                                <p className="common">Your Answer</p>
                                                {show ? <FaCheck className='blue' />: <CgClose className='red' />}
                                            </div>}
                                            <p className='green common'>{(correct_answer === item && !show) && 'Correct Answer'}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
            <div className="answers__footer"></div>
        </div>
    )
}

export default Answers
