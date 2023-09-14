import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './Global.css';
import { FormDataProvider } from './Hooks/FormContext';
import { Home } from './Pages/Home/Home';

function App() {
  return (
    <Router>
      <FormDataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Outras rotas podem ser adicionadas aqui */}
        </Routes>
      </FormDataProvider>
    </Router>
  );
}

export default App;
