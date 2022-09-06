import { gql, useQuery } from '@apollo/client';
import { Search } from './components/Search/Search';
import './App.css';
import loadingImage from './loading.gif';

const ALL_COUNTRIES = gql`
  query {
    countries{
      code
      name
      native
      phone
      capital
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
  if(error) return <span style={{color:'red'}}>{error}</span>
  return (
    <div className='app'>
      {loading ?<div className='center-img'><img className='loading'alt='loading gif' src={loadingImage}/></div> :(
        <div className='container-app'>
          <h1 className='title'>Country Search</h1>
          <p className='title-p'>The best place to search</p>
          {data && <Search countries={data.countries}/>}
        </div>
      )}
    </div>
  );
}

export default App;
