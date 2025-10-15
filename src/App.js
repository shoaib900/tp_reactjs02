import React, { lazy,Suspense } from 'react'

import Home from './components/Home'
// import Acomp from './components/abc/Acomp';
import Acomp from './components/Contextapi/Acomp';
import Pcback from './components/cbmemo/Pcback';
import Mdemo from './components/Memo/Mdemo';
import Reducer from './components/Reducers/Reducer';
import SHome from './components/ReduxComponents/SimpleRedux/SHome';
import RTKHome from './components/ReduxComponents/RTK/RTKHome';
// import About from './components/About'

// const About = lazy( ()=> import("./components/About"))

const App = () => {
  // const [num,setNum] = React.useState(10);
  return (
    <div>

      {/* <SHome /> */}

      <RTKHome />

      {/* <Pcback /> */}

      {/* <Mdemo /> */}

      {/* <Acomp /> */}

      {/* <Reducer /> */}
      
      {/* <Home />
      <Suspense fallback={<div>loading...</div>}>
      <About />
      </Suspense> */}

      {/* <Acomp number={num} /> */}
      
    </div>
  )
}

export default App
