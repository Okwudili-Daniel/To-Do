import {createBrowserRouter} from "react-router-dom"
import Body from "../pages/Body"
import Layout from "../components/Dashboard/Layout"


export const MainRouter = createBrowserRouter([

    {

        path: "/",
        element: <Layout/>,
        children: ([
            {
                index: true,
                element: <Body/>
            }
        ])
    }

])