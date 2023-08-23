import ProductsPageComponent from "./components/ProductsPageComponent";

import axios from "axios";


const AdminProductsPage = () => {

  const fetchProducts = async(abctrl) =>{
    const {data} = await axios.get("/api/products/admin",{
      signal:abctrl.signal,
    })
    return data
  }

  return <ProductsPageComponent fetchProducts={fetchProducts}/>
    

};

export default AdminProductsPage;

