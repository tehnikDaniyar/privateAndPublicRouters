import { Navigate } from "react-router-dom";
import Posts from "../components/pages/Posts";
import Home from "../components/pages/Home";
import { lazy } from "react";
const DashBoard = lazy(() => import('../components/pages/Posts.jsx'))
// const Dashboard = lazy(() => import("../../components/Dashboard"));


export default function privareRoutes() {
	return {
		element: <Home></Home>,
		children: [
			{ path: "/posts", element: <DashBoard></DashBoard> },
			{ path: '*', element: <Navigate to='/' replace ></Navigate> },
		]
	}
}



