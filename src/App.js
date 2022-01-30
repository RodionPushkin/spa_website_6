import './App.scss';
import {Routes,Route,Link} from "react-router-dom";
import {Homepage} from './pages/home/index.js';
import {Notfoundpage} from './pages/404/index.js';

function App() {
  return (
    <div className="app mf m">
      <header className="header">
        <Link to="/">home</Link>
      </header>
      <main className="main padding">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Routes>
      </main>
      <footer className="footer">
        dfgdfhghdfhgdfgh
      </footer>
    </div>
  );
}
export default App;
