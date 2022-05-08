import logo from './logo.svg';
import './App.css';
import Countries from './components/Countries/Countries';
import Counter from './components/Counter/Counter';
import ExternalUsers from './components/ExternalUsers/ExternalUsers';

function App() {

  const numbers = [1, 2, 3, 4];

  const fighters = [ 
    {name: 'Khabib Nurmagomedov', job: 'Former Mixed Martial Artist, Businessman, and MMA Promoter', age: 33},
    {name: 'Islam Makhachev',job: 'Mixed Martial Artist and Horse Rider', age: 30},
    {name: 'Justin Gaethje', job: 'Mixed Martial Artist', age: 33},
    {name: 'Daniel Cormier', job: 'Mixed Martial Artist and Commentator', age: 43}
  ];

return (
<div className="App" style={{border: "2px solid cyan"}}>


  <Name></Name>


  <header className="App-header" style={{borderTop: "2px solid cyan"}}>
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>

    <ExternalUsers></ExternalUsers>

    <Counter></Counter>

    {
      numbers.map(num => <li>{num}</li>)
    }

    {
      fighters.map((fighter,index) => <MMA serial={index+1 + ". "} name={fighter.name} job={fighter.job} age={fighter.age}></MMA>)
    }

    {/* <MMA number={number[0] + ". "} name={fighter.name[0]} job={fighter.job} age={fighter.age[0]}></MMA>
    <MMA number={number[1] + ". "} name={fighter.name[1]} job={fighter.job} age={fighter.age[1]}></MMA>
    <MMA number={number[2] + ". "} name={fighter.name[2]} job={fighter.job} age={fighter.age[2]}></MMA> */}

    <Countries></Countries>

    <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
      style={{fontWeight: "bold", textShadow: "0 0 4px cyan", marginBottom: '30px'}}
    >
      Learn React
    </a>
  </header>
</div>
)

}

function Name() {
  return (
  <div>
    <h1>AOWLAD</h1>
  </div>
  )
}

function MMA(props) {

  const style = {
    lineHeight: '1.8em',
    width: '450px',
    padding: '25px 20px',
    background: 'black',
    borderRadius: "15px",
    boxShadow: "inset 0 0 15px 3px cyan"
  }

  return (
        <p style={style}>{props.serial}{props.name} is a {props.job} and he is {props.age} years old.</p>
  );
}

export default App;
