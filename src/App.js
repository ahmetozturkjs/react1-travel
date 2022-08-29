import Nav from "./components/Nav.js";
import Card from "./components/Card.js"
import Data from "./components/data.js"


function App() {

  const cards=Data.map(card=>{
    return(
      <Card key={card.id} {...card}/>
    )
  })

  return (
    <div className="Appdiv mx-auto my-2">
      <Nav/>
      <div>         
          {cards}
      </div>
    </div>
  );
}

export default App;
