import React, { lazy,Suspense } from 'react'

import Home from './components/Home'
// import Acomp from './components/abc/Acomp';
import Acomp from './components/Contextapi/Acomp';
import Pcback from './components/cbmemo/Pcback';
import Mdemo from './components/Memo/Mdemo';
import Reducer from './components/Reducers/Reducer';
// import About from './components/About'

// const About = lazy( ()=> import("./components/About"))

const App = () => {
  // const [num,setNum] = React.useState(10);
  return (
    <div>
      {/* <Pcback /> */}

      {/* <Mdemo /> */}

      {/* <Acomp /> */}

      <Reducer />
      
      {/* <Home />
      <Suspense fallback={<div>loading...</div>}>
      <About />
      </Suspense> */}

      {/* <Acomp number={num} /> */}
      
    </div>
  )
}

export default App
