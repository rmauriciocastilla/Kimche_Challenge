import logo from './logo.svg';
import './App.css';
import { gql, useQuery } from '@apollo/client';

const ALL_COUNTRIES = gql`
  query {
    countries{
      code
      name
      native
      phone
      continent{
        code
        name
      }
      currency
      languages{
        code
        name
        native
      }
      emoji
      emojiU
      states{
        code
        name
      }
    }
  }
`


function App() {
  const {data,error,loading} = useQuery(ALL_COUNTRIES);
  if(error) return <span style='color: red'>{error}</span>
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          {loading ? <p>loading</p> :(
            <>
            <p> GraphQL + React </p>
            {data && data.countries.map(c=>c.name).join(', ')}
            </>
            )}
      </header>
    </div>
  );
}

export default App;
