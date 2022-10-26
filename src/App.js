import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// Firebase utils
import { onAuthStateChangedListener } from './utils/firebase/firebase.utils';

// Routes
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import Auth from './routes/auth/auth.component';

import { setCurrentUser } from './store/user/user.action';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      dispatch(setCurrentUser(user));
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
