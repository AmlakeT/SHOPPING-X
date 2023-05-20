import { useLoaderData } from 'react-router'
import { Link } from 'react-router-dom'

const Careers = () => {
    const careers = useLoaderData()
  return (
     <div>
        {careers.map(career => (
            <Link to={career.id.toString()} key={career.id}>
                <p>{career.title}</p>
                <p>Based in {career.location}</p>
            </Link>
        )) }
        
     </div>
     
  )
}

export default Careers


//loader function
export const careersLoader = async () => {
    //amlake@amlake-HP-ProBook-650-G1:~/my-project$ npm install -g json-server
    //amlake@amlake-HP-ProBook-650-G1:~/my-project$ json-server -p 4000 -w ./data/db.json 
    const res = await fetch('http://localhost:4000/careers/')
   
    return res.json()
 }
