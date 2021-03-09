export const reducer = (state, action) => {
  if (action.type === 'Category') {
    return { ...state, category: action.payload };
  }
  if (action.type === 'Difficulty') {
    return { ...state, difficulty: action.payload };
  }
  if (action.type === 'Type') {
    return { ...state, type: action.payload };
  }
  if (action.type === 'ISHOME') {
    return { ...state, isQuiz: true };
  }
  throw new Error('the action type does not matches');
};
