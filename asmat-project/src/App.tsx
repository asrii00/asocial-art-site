
import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import HomePage from './pages/HomePage';
import RootPage from './pages/RootPage';
import LoginPage from './pages/LoginPage';
import GuestBook from './pages/GuestBook';
import PostArtPage from './pages/PostArtPage';

function App() {

  return (
    <RouterProvider router={
    createBrowserRouter(
      createRoutesFromElements(
          <Route path="/" element={<RootPage/>}>
              <Route index element={<HomePage/>}/>
              <Route path="test" element={<HomePage/>}/>
              <Route path="login" element={<LoginPage/>}/>
              <Route path="guestbook" element={<GuestBook/>}/>
              <Route path="post-art" element={<PostArtPage/>}/>
          </Route>
      ), {
          basename: "/asmat/"
      })
}/>
     
  )
}

export default App
