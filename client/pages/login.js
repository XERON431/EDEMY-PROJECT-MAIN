import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaSpinner } from 'react-icons/fa';
import Link from 'next/link';
import { Context } from '../context'; // Import your UserContext
import { useRouter } from 'next/router';

const Login = () => {
  const { state, dispatch } = useContext(Context); // Accessing setUser from the UserContext

  const {user} = state;

  const router = useRouter();
  // this use effect makes sure loggedin user doesnt go to login page again before logging out
  useEffect(() => {
    if(user !== null)router.push("/user");
  }, [user]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);



  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Email and password are required');
      return;
    }

    setLoading(true);

    try {
      const { data } = await axios.post(`/api/login`, {
        email,
        password,
      });

      dispatch({
        type: 'LOGIN',
        payload: data,
      });

      window.localStorage.setItem('user', JSON.stringify(data));
      //redirect
      router.push('/'); 
      // Clear fields after successful login
      setEmail('');
      setPassword('');
    } catch (err) {
      toast.error(err.response.data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="jumbotron text-center bg-primary square">Login</h1>
      <div className="container d-flex justify-content-center align-items-center flex-column">
        <form onSubmit={handleSubmit} className="w-50">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-block btn-primary form-control" disabled={loading}>
  {loading ? <FaSpinner className="spinner" /> : 'Login'}</button>

        </form>
        <p className="mt-3 text-center">
  Not registered?{' '}
  <Link href="/register">
    <span className="text-primary">Go to Register</span>
  </Link>
</p>
<p className="text-center mb-2">
  <Link href="/forgot-password">
    <span className="text-danger">Forgot Password</span>
  </Link>
</p>

      </div>
    </>
  );
};

export default Login;
