import './App.css';
import Quiz from "./Quiz";
import Header from "./Header";
import Home from './Home'
import { useGobalContext } from "./Context";
function App() {
  const {isHome} = useGobalContext();

  // if (loading){
  //   return <Loading />
  // }

  return (
    <div className="App">
      <Header />
      { isHome? <Home />:
      <Quiz />}
    </div>
  );
}

export default App;
