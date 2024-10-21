import { useState } from 'react'

function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  

  return (
    <div className="flex flex-col w-[100px]">






  <label htmlFor="fname">Email:</label>
  <input type="text" id="fname" name="fname" value={email} onChange={(e) => {setEmail(e.target.value)}}></input>

  
  <label htmlFor="fname">Password:</label>
  <input type="password" id="fname" name="fname" value={password} onChange={(p) => {setPassword(p.target.value)}}></input>






  <input type="submit" value="Submit"></input>
<p>{email === "james" ? email : "wrong"}</p>
<p>{password === "james" ? password : "lagyan mo ng password bobo"}</p>


    </div>
   
  )
}

export default App
