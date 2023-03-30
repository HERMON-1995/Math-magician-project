import './App.css';
import { Route, Routes, NavLink } from 'react-router-dom';
import HomePage from './component/home';
import QuotePage from './component/quote';
import Calculator from './component/calculator';

const App = () => (
  <>
    <nav>
      <h1>Math Magicians</h1>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/calculator">Calculator</NavLink>
        <NavLink to="/quote">Quote</NavLink>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/quote" element={<QuotePage />} />
    </Routes>
  </>
);

export default App;
