import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-black font-sans flex flex-col gap-4 p-4  shadow-md rounded bg-gray-200">
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(p) => setPassword(p.target.value)}
        />

        <p>{email === 'james' ? email : ''}</p>
        <p>{password === 'james' ? password : ""}</p>

        <input type="submit" value="Submit" className="bg-blue-900 text-white py-2 rounded" / >
      </div>
    </div>
  );
}

export default App;

