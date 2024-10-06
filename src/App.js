import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Loader from './components/Loader'
import NotFound from './components/NotFound'
import Resume from "./pages/Resume"

const Main = lazy(() => import('./pages/Main'));

function App() {
  return (
    <div className="App">

      <Router>

        <Suspense fallback={<Loader />}>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/resume" element={<Resume />} />
            {/* for Not found */}
            <Route path="/*" element={<NotFound />} />


          </Routes>
        </Suspense>


      </Router>



    </div>
  );
}

export default App;
