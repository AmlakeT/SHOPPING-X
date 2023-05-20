import { Link, NavLink, Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
   <div>
     <header className="py-4 px-5" >
        <nav className=" flex  justify-end gap-x-4 mx">
        <h1 className="mr-auto font-serif text-3xl flex-shrink-0"> <Link to = '/' >PracticeRouter</Link></h1>
        <NavLink to= "/" className=" rounded-md px-2  hover:bg-gray-200 font-serif text-3xl "  >Home</NavLink>
        <NavLink  to= "about" className=" rounded-md px-2  hover:bg-gray-200 font-serif text-3xl "  >About</NavLink>
        <NavLink  to= "help" className=" rounded-md px-2  hover:bg-gray-200  font-serif text-3xl "  >Help</NavLink>
        <NavLink  to= "careers" className=" rounded-md px-2  hover:bg-gray-200  font-serif text-3xl "  >Careers</NavLink>
        </nav>
     </header>

     <main>
        <Outlet/>
     </main>
   </div>
  )
 
}

export default RootLayout 