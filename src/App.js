import { Route, Routes } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Auth from './routes/auth/auth.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route path='/' index element={<Home />} />
        <Route path='/auth' element={<Auth />} />
      </Route>
    </Routes>
  );
};

export default App;
