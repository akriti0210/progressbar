import './styles.css';
import ProgressBar from './components/ProgressBar';
import { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState(0)
  const [sucsess, setSuccess] = useState(false)

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1)
    },100)
  }, [])
  
  return (
    <div className="app">
      <span>Progress Bar</span>
      <ProgressBar
        value={value}
        onComplete={() => setSuccess(true)}
      />
      <span>{sucsess ? "Complete!" : "Loading..."}</span>
    </div>
  );
}

export default App;
