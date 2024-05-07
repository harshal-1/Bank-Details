import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import { Dashboard, Links, Summary, Bank } from './pages/index.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Bank />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="links" element={<Links />} />
          <Route path="summary" element={<Summary />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
