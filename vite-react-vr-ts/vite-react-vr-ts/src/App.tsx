import './App.css'
import LogoReact from './LogoReact';

import VrScene from './VrScene';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <div id="texto">
          <h1>...MULTIVERSO...</h1>
        </div> 

        <div id="vrS">
          <VrScene/>
          <LogoReact/>
        </div> 



    </>
  )
}

export default App
