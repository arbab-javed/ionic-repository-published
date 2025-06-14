import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SignUpScreen } from './screens/SignUp';
import { LoginScreen } from './screens/Login';
import { ForgotPasswordScreen } from './screens/ForgotPassword';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUpScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
        <Route path="/" element={<LoginScreen />} />
      </Routes>
    </Router>
  );
}

export default App;