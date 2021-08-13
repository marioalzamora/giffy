import './App.css';
import { Link, Route } from "wouter";
import Detail from './pages/Detail';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext';

function App() {
  return (
      <StaticContext.Provider value={{
          name: 'messi',
          queOnda: true
        }}>
        <div className="App">
          <section className="App-content">
            <Link to="/"><h1>App</h1></Link>
            {/* <Link to="/gif/messi">Gifs de Messi</Link>
            <Link to="/gif/diego maradona">Gifs de Diego</Link>
            <Link to="/gif/boca juniros">Gifs de Boca</Link> */}
            <GifsContextProvider>
              <Route 
                component={Home} 
                path="/" 
              />
              <Route 
                component={SearchResults} 
                path="/search/:keyword"
              />
              <Route 
                component={Detail} 
                path="/gif/:id" 
              />
            </GifsContextProvider>
            {/* <Route path="/gif/:keyword" component={ListOfGifs} /> */}
          </section>
        </div>
      </StaticContext.Provider>
    )
  }

export default App;
