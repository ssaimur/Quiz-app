import React from 'react';
import './home.css';
import { useGobalContext } from './Context';
import { data } from './data';

const Home = () => {
  const {
    initialChange,
    initialValue,
    initialSubmit,
    handleClick,
  } = useGobalContext();

  // const {category, difficulty, type} = data;
  // if(isQuiz){
  //     return
  // }
  return (
    <div className='home'>
      <div className='home__header'>
        <h2>Participate an quiz and earn no reward</h2>
      </div>
      <div className='home__body'>
        <form className='form' onSubmit={(e) => initialSubmit(e)}>
          <div className='item'>
            <label htmlFor='num'>
              Select number of questions:
              <input
                type='number'
                id='num'
                placeholder='Maximum: 10'
                value={initialValue}
                onChange={(e) => initialChange(e)}
                required
              />
            </label>
          </div>
          {data.map((item) => {
            const { name, options } = item;
            return (
              <div className='item' key={name}>
                <label htmlFor={name}>
                  Select any {name}:
                  <select
                    name={name}
                    id={name}
                    onClick={(e) => handleClick(name, e.target.value)}
                    defaultValue=''
                    required
                  >
                    <option disabled value=''>
                      {name}
                    </option>
                    {options.map((item) => {
                      const { opt, value } = item;
                      return (
                        <option value={value} key={value}>
                          {opt}
                        </option>
                      );
                    })}
                  </select>
                </label>
              </div>
            );
          })}
          {/* <div className="category item">
                        <label htmlFor="cate">
                            Select any category:
                            <select name="cate" id="cate" defaultValue='Any category'>
                                <option value="category-1" disabled selected>Any Category</option>
                                {category.map((item, index) => {
                                    return <option value={item} key={index}>{item}</option>
                                })}
                            </select>
                        </label>
                    </div> */}
          {/* <div className="difficulty item">
                        <label htmlFor="diff">
                            Select difficulty:
                            <select name="diff" id="diff" defaultValue='Any category'>
                                <option value="diff-1" disabled>Any Difficulty</option>
                                {difficulty.map((item, index) => {
                                    return <option value={item} key={index}>{item}</option>
                                })}
                            </select>
                        </label>
                    </div>
                    <div className="type item">
                        <label htmlFor="type">
                            Select type: 
                            <select name="type" id="type" defaultValue='Any category'>
                                <option value="type-1" disabled>Any Type</option>
                                {type.map((item, index) => {
                                    return <option value={item} key={index}>{item}</option>
                                })}
                            </select>
                        </label>
                    </div> */}
          <div className='form__button'>
            <button type='submit'>Jump into a mock quiz</button>
          </div>
        </form>
      </div>
      <div className='home__footer'></div>
    </div>
  );
};

export default Home;
