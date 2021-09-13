import React from 'react';
import './quiz.css';
import { useGobalContext } from './Context';
import Complete from './Complete';
import Loading from './Loading';
import Oops from './Oops';

const Quiz = () => {
  const {
    arr,
    question,
    handleSubmit,
    handleSkip,
    handleChange,
    end,
    percent,
    loading,
    error,
  } = useGobalContext();

  // useEffect(() => {
  // }, [value]);

  // if (loading) {
  return <Loading />;
  // }

  // if (error){
  //     return <Oops />;
  // }

  return error ? (
    <Oops />
  ) : end ? (
    <Complete />
  ) : (
    <div className='quiz'>
      <div className='quiz__header'>
        <h3>ReactQuiz</h3>
        <p>{Math.round(percent)}% completed</p>
      </div>
      <div className='quiz__body'>
        <div className='quiz__question'>
          <h3>{question}</h3>
        </div>
        <form className='quiz__form' onSubmit={(e) => handleSubmit(e)}>
          <div className='form__body'>
            {arr.map((item, index) => {
              return (
                <div className='form__item' key={index}>
                  <label htmlFor={`option-${index}`}>
                    <input
                      type='radio'
                      name='options'
                      id={`option-${index}`}
                      value={item}
                      onClick={(e) => handleChange(e)}
                      // onChange={(e) => handleChange(e)}
                      required
                    />{' '}
                    {item}
                  </label>
                </div>
              );
            })}
            {/* <div className="form__item">
                            <label htmlFor="option-1">
                                <input type="radio" name="options" id="option-1"/> option-1
                            </label>
                        </div>
                        <div className="form__item">
                            <label htmlFor="option-2">
                                <input type="radio" name="options" id="option-2"/> option-2asdf adf
                            </label>
                        </div>
                        <div className="form__item">
                            <label htmlFor="option-3">
                                <input type="radio" name="options" id="option-3"/> option-3
                            </label>
                        </div>
                        <div className="form__item">
                            <label htmlFor="option-4">
                                <input type="radio" name="options" id="option-4"/> option-4
                            </label>
                        </div> */}
          </div>
          <div className='form__footer'>
            <div className='form__footer__buttons'>
              <button type='reset' onClick={handleSkip}>
                skip
              </button>
              <button type='submit reset'>submit</button>
            </div>
          </div>
        </form>
      </div>
      <div className='quiz__footer'></div>
    </div>
  );
};

export default Quiz;
