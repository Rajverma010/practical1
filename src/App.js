import { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobile: '',
    city: '',
  });
   const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((currentData) => ({...currentData,[name]: value,}));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Login form data:', formData);
  };

  return (
    <div className="app-shell">
  
      <form className="login-card" onSubmit={handleSubmit}>
        <h1>Library Subscription</h1>
        <h2>Register</h2>
        <p>Enter your details</p>

        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Enter your name"  required />
      
        <label htmlFor="Mobile">Mobile</label>
        <input id="mobile" name="mobile" type="text" value={formData.Mobile} onChange={handleChange} placeholder="Enter your name" required />
        <label htmlFor="City">City</label>
        <input
          id="city"
          name="city"
          type="text"
          value={formData.Ciry}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
