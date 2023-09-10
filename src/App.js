import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Loader from './Component/Loader'
import NotFound from './Component/NotFound'



const Main = lazy(() => import('./Component/Main'));



function App() {
  return (
    <div className="App">

      <Router>

        <Suspense fallback={<Loader />}>
          <Routes>
            <Route exact path="/" element={<Main />} />

            {/* for Not found */}
            <Route path="/*" element={<NotFound />} />


          </Routes>
        </Suspense>


      </Router>



    </div>
  );
}

export default App;
