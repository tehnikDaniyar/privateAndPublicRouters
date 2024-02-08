import './App.css'
import privareRoutes from './routes/privateRoutes.jsx'
import publicRoutes from './routes/publicRoutes.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from './components/pages/ErrorPage.jsx'
import Nav from './components/Nav/Nav.jsx'



function App() {

	const isAuth = false;
	const router = createBrowserRouter([
		isAuth ? privareRoutes() : publicRoutes()
	])


	return (
		<>
			<RouterProvider router={router} />
		</>

	)
}

export default App
