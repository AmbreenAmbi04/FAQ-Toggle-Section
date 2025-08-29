import {BrowserRouter, Route, Routes} from 'react-router-dom';
import FaqList from './components/FaqList';

const App = () => {
return (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<FaqList />} />
      </Routes>
  </BrowserRouter>
);
};

export default App;