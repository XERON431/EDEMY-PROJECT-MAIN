import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FaSpinner } from 'react-icons/fa';
import Link from 'next/link';
import { Context } from '../context';
import { useRouter } from 'next/router';

const Register = () => {
  const [name, setName] = useState('Siddhant');
  const [email, setEmail] = useState('siddhantgoyal.iitg@gmail.com');
  const [password, setPassword] = useState('123456789');
  const [loading, setLoading] = useState(false);
  const {
    state: { user },  
  } = useContext(Context);
  const router = useRouter();
  useEffect(() => {
    if(user !== null)router.push("/");
  }, [user]);


  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      toast.error('Please fill in all the fields');
      return;
    }

    setLoading(true);

    try {
      const { data } = await axios.post(`/api/register`, {
        name,
        email,
        password,
      });

      console.log('Register Response', data);
      toast.success('Registration successful! Please login');
      // Clear form after submission
      setName('');
      setEmail('');
      setPassword('');
    } catch (err) {
      toast.error(err.response.data);
      // Handle error if needed
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="jumbotron text-center bg-primary square">Register</h1>
      <div className="container d-flex justify-content-center align-items-center flex-column">
        <form onSubmit={handleSubmit} className="w-50">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
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
            {loading ? <FaSpinner className="spinner" /> : 'Submit'}
          </button>
        </form>
        <p className="mt-3 text-center">
          Already registered?{' '}
          <Link href="/login">
            <span className="text-primary">Go to Login</span>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Register;
