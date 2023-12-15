import logo from './logo.svg';
import './App.css';
import Comp1 from './C1';
import { TodoList } from './C1';
import { Avatar } from './C1';
import { getImageUrl } from './utils.js';


function Profile({ name, src, width, height, numAwards, awards, profession, discovered }){
  return (<section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={src}
          alt={name}
          width={width}
          height={height}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {profession}
          </li>
          <li>
            <b>Awards: {numAwards} </b> 
            {awards}
          </li>
          <li>
            <b>Discovered: </b>
            {discovered}
          </li>
        </ul>
      </section>);
  
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Comp1/>
        <TodoList/>
        <Avatar/>
        <h1>Notable Scientists</h1>
      <Profile
        name={"Katsuko Saruhashi"}
        src={getImageUrl('YfeOqp2')}
        width={70}
        height={70}
        profession={"geochemist"}
        numAwards={"2"}
        awards={"(Miyake Prize for geochemistry, Tanaka Prize)"}
        discovered={"a method for measuring carbon dioxide in seawater"}
      />
      <Profile
        name={"Maria Skłodowska-Curie"}
        src={getImageUrl('szV5sdG')}
        width={70}
        height={70}
        profession={"physicist and chemist"}
        numAwards={"4"}
        awards={"(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"}
        discovered={"polonium (chemical element)"}
      />
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
