import './App.scss';
// import react from 'react';
import {Routes,Route} from "react-router-dom";
import {Homepage} from './pages/home/index';
import {Notfoundpage} from './pages/404/index';
import {Signin} from './pages/signin/index';
import {Signup} from './pages/signup/index';
import {Profile} from './pages/profile/index';
import {NavComponent} from './components/NavComponent/NavComponent';

function App() {
  return (
    <div className="app mf m">
      <header className="header">
        <NavComponent/>
      </header>
      <main className="main padding">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Notfoundpage />} />
        </Routes>
      </main>
    </div>
  );
}
export default App;
