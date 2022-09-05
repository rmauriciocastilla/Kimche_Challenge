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
    <div className='app'>
      {loading ? <p>loading</p> :(
        <div className='container-app'>
          <h1 className='title'>Country Search</h1>
          {data && <Search countries={data.countries}/>}
        </div>
      )}
    </div>
  );
}

export default App;
