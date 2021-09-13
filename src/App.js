import Quiz from './Pages/quiz/Quiz';
import Header from './Components/header/Header';
import Home from './Pages/homePage/Home';
import { useGobalContext } from './contexts/Context';
function App() {
  const { isHome } = useGobalContext();

  // if (loading){
  //   return <Loading />
  // }

  return (
    <div className='App'>
      <Header />
      {isHome ? <Home /> : <Quiz />}
    </div>
  );
}

export default App;
