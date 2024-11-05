import { useState } from "react";

import AuthPage from "./pages/AuthPage.jsx";

export default function App() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<AuthPage email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
	);
}
