
import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import HomePage from './pages/HomePage';
import RootPage from './pages/RootPage';

function App() {

  return (
    <RouterProvider router={
    createBrowserRouter(
      createRoutesFromElements(
          <Route path="/" element={<RootPage/>}>
              <Route index element={<HomePage/>}/>
              <Route path="test" element={<HomePage/>}/>
          </Route>
      ), {
          basename: "/asmat/"
      })
}/>
     
  )
}

export default App
