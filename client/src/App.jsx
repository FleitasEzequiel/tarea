import {createBrowserRouter,RouterProvider} from "react-router"
import './App.css'
import Vip from "./Vip";
import Saludo from "./Saludo"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Saludo />,
  },
  {
    path:"/vip",
    element:<Vip />
  }
]);


function App() {

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
