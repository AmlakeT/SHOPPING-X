import { useLoaderData, useParams } from "react-router"

const CareerDetails = () => {
   const { id } = useParams()
   const career = useLoaderData()
  return (
    <div>
      <h2>Career Details for { career.title }</h2>
      <p>Starting salary: { career.salary }</p>
      <p>Location: {career.location}</p>
      <div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A optio quis omnis iure aut magni. Ad tempore, dolorem ipsa esse omnis voluptatibus doloremque adipisci, perspiciatis fugiat rem facilis voluptate inventore!</p>
      </div>
    </div>
  )
}

export default CareerDetails
export const CareerDetailsLoader = async ({ params }) => {
    const { id } = params
    const res = await fetch ('http://localhost:4000/careers/' + id)
     
    return res.json()
}