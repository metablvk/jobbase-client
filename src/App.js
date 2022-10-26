import { Route, Routes } from 'react-router-dom';

// Firebase utils
import { onAuthStateChangedListener } from './utils/firebase/firebase.utils';

// Routes
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Auth from './routes/auth/auth.component';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log(user);
    });
    return unsubscribe;
  }, []);

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
