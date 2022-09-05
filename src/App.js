import logo from './logo.svg';
import './App.css';
import { gql, useQuery } from '@apollo/client';
import { Search } from './components/Search/Search';

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
      {loading ? <p>loading</p> :(
        <div>
          <h1>Country Search</h1>
          <p>Obtain information from all the countries of the world.</p>
          {data && <Search countries={data.countries}/>}
        </div>
      )}
    </div>
  );
}

export default App;
