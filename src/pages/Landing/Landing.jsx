import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <>
      {/* All the <Link> components should live here */}
      <h1>All-The-Things</h1>
      <Link to="/the-manliest-things">Ben's Things</Link><br/>
      <Link to="/the-well-styled-things">David's Things</Link><br/>
      <Link to="/the-silly-things">Hunter's Things</Link><br/>
      <Link to="/the-musical-things">Callum's Things</Link><br/>
      <Link to="/the-tool-things">Nicholas' Things</Link><br/>
      <Link to="/the-cat-things">Suzanne's Things</Link><br/>
    </>
  )
}

export default Landing