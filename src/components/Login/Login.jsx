import react from "react";
import styles from './loginStyle.module.scss'

export default function Login() {
	return (
		<>
			<form>
				<input type="text" placeholder="login" />
				<input type="password" placeholder="password" />
				<button>Login</button>
			</form>
		</>
	)
}