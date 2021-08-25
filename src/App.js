import React,{ Suspense } from 'react';
import 'App.css';
import { Link, Route } from "wouter";
import Detail from 'pages/Detail';
import SearchResults from 'pages/SearchResults';
import StaticContext from 'context/StaticContext'
import { GifsContextProvider } from 'context/GifsContext';

const HomePage = React.lazy( ()=> import('./pages/Home'))

function App() {
  return (
      <StaticContext.Provider value={{
          name: 'messi',
          queOnda: true
        }}>
        <div className="App">
          <Suspense fallback={null}>
            <section className="App-content">
              <Link to="/"><h1>App</h1></Link>
              {/* <Link to="/gif/messi">Gifs de Messi</Link>
              <Link to="/gif/diego maradona">Gifs de Diego</Link>
              <Link to="/gif/boca juniros">Gifs de Boca</Link> */}
              <GifsContextProvider>
                <Route 
                  component={HomePage} 
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
                <Route 
                  component={()=><h1>404 Error :-(</h1>}
                  path="/404"
                />
              </GifsContextProvider>
              {/* <Route path="/gif/:keyword" component={ListOfGifs} /> */}
            </section>
          </Suspense>
        </div>
      </StaticContext.Provider>
    )
  }

export default App;
