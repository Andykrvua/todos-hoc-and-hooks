import './styles.css';
import { Routes, Route, Link } from 'react-router-dom';
import Hoc from './Hoc';
import Default from './Default';
import Hooks from './Hooks';
import { todos } from './data';

export default function App() {
  return (
    <div className="App">
      <Link to="/">Default</Link>
      <Link to="/hoc">HOC</Link>
      <Link to="/hooks">Hooks</Link>
      <Routes>
        <Route index element={<Default list={todos} />} />
        <Route path="hoc" element={<Hoc list={todos} />} />
        <Route path="hooks" element={<Hooks list={todos} />} />
      </Routes>
    </div>
  );
}
