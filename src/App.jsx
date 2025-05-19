import './App.css'
import { HomePage } from './componetes/home/HomePage';
import ScrollableText from './componetes/ScrollableText';
import SplitText from './componetes/SplitText'
import { BrowserRouter } from 'react-router-dom';

const handleAnimationComplete = () => {
  console.log('All letters have animated!');
};

function App() {
  return (
    <>
    <BrowserRouter>
      <HomePage/>
      <ScrollableText/>
      <SplitText
      text="Hello, Tailwind!"
      className="text-2xl font-semibold text-center"
      delay={50}  
      animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
      animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
      easing="easeOutCubic"
      threshold={0.2}
      rootMargin="-50px"
      onLetterAnimationComplete={handleAnimationComplete}
      />
      </BrowserRouter>
    </>
  )
}

export default App
