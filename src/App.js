import Jumbotron from './components/jumbotron';
import SearchField from './components/searchField';
import Images from './components/images';
import useAxios from './hooks/useAxios';
import { createContext, useState } from 'react';

export const ImageContext = createContext()

const App = () => {

  const [searchImage, setSearchImage] = useState('')
  const {response, isLoading, error, fetchData} = useAxios(`search/photos?page=1&query=cats&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
  console.log(response)

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }
  return (
    <ImageContext.Provider value = {value}>
      <Jumbotron>
        <SearchField/>
      </Jumbotron>
      <Images/>
    </ImageContext.Provider>
  );
}

export default App;
