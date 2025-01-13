
import './App.css';
import Card from './Component/Card';
import img1 from "./Image/pexels-stijn-dijkstra-1306815-29988886.jpg"
import img2 from "./Image/pexels-sanat-anghan-25736600-28435500.jpg"
import img3 from "./Image/pexels-redouan-charf-142956762-19962027.jpg"
import img4 from "./Image/pexels-maha-mestassi-546639725-16639219.jpg"
import img5 from "./Image/pexels-florian-kriechbaumer-1479976889-26926276.jpg"
import img6 from "./Image/pexels-ekrulila-30118135.jpg"
import img7 from "./Image/pexels-debphotography-25853775.jpg"
import img8 from "./Image/pexels-chris-f-38966-30102888.jpg"
import img9 from "./Image/pexels-bylukemiller-27692128.jpg"

function App() {
  const data=[
    {
      title:"Card 1",
      information:"Info 1",
      imgUrl:img1,
    },
    {
      title:"Card 2",
      information:"Info 2",
      imgUrl:img2,
    },
    {
      title:"Card 3",
      information:"Info 3",
      imgUrl:img3,
    },
    {
      title:"Card 4",
      information:"Info 4",
      imgUrl:img4,
    }
    ,
    {
      title:"Card 5",
      information:"Info 5",
      imgUrl:img5,
    },
    {
      title:"Card 6",
      information:"Info 6",
      imgUrl:img6,
    }
    ,  {
      title:"Card 7",
      information:"Info 7",
      imgUrl:img7,
    },
    {
      title:"Card 8",
      information:"Info 8",
      imgUrl:img8,
    },
    {
      title:"Card 9",
      information:"Info 9",
      imgUrl:img9,
    }
  ]
  return (
    <div className="App">
      <Card data={data}/>
      </div>
  );
}

export default App;
