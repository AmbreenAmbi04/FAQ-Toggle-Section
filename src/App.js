import {Route, Routes} from 'react-router-dom';
import FaqItem from './components/FaqItem';

const App = () => {

return (
      <Routes>
        <Route path="/" element={<FaqItem />} />
      </Routes>
);
};

export default App;