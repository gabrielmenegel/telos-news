import RouteHome from "../../components/routeHome"
import { Header } from "../../components/Header"
import { Link } from "react-router-dom"
import "./styles.css"

export function Home() {
  return (
    <>
     
      <div className="app">
        <Header />
        <div className="mainScroll">
          <RouteHome />
        </div>
      </div>
    </>
  )
}