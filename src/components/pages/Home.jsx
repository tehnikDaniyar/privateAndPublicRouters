import react from "react";
import Nav from '../Nav/Nav'
import { Outlet } from "react-router-dom";

export default function Home() {
	return (
		<>
			<h1>Home</h1>
			<Nav></Nav>
			<Outlet></Outlet>
		</>
	)
}