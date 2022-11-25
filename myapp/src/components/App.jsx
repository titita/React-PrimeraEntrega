import { MantineProvider, Text } from '@mantine/core';
import './App.css';
import Navbar from './Navbar/Navbar';
import ItemListContainer from './ItemListContainer/ItemListContainer';
import ProductCard from './ProductCard/ProductCard';
//import ItemCount from "./ItemCount/ItemCount";
const App = () => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Navbar/>
      <ItemListContainer greeting={"Bienvenid@"}/>
      <Text>Welcome to Mantine!</Text>
      <ProductCard/>
     
  
    </MantineProvider>
      
  );
}

export default App;