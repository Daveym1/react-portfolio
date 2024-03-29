import Header from './Header';
import HomePage from './HomePage';
import ProjectsPage from './ProjectsPage';
import ContactPage from './ContactPage';
import Project from './Project';
import BlogPage from './BlogPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/projects' element={<ProjectsPage />} />
					<Route path='/project/:id' element={<Project />} />
					<Route path='/contact' element={<ContactPage />} />
					<Route path='/blog' element={<BlogPage />} />
				</Routes>
			</main>
		</BrowserRouter>
	);
}

export default App;
