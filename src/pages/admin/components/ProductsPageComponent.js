import { Row, Col, Table,Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import AdminLinksComponent from "../../../components/admin/AdminLinksComponent";
import { useState,useEffect } from "react";
const ProductsPageComponent = ({fetchProducts}) => {

    const [products,setProducts] =useState([])

    const deleteHandler = ()=>{
        if(window.confirm("Are you sure you want to delete this product ?")) alert("Product deleted")
    }

    useEffect(()=>{
      
        const abctrl = new AbortController()
        fetchProducts(abctrl)
        .then((res)=>{
           setProducts(res) 
        })
        .catch((er)=>{
            console.log(er.response.data.message?er.response.data.message : er.response.data)
          })
          
          return () =>abctrl.abort()   

    },[])
  return (
    <Row className="m-5">
        <Col md={2}>
    <AdminLinksComponent/>
        </Col>
      <Col md={10}>

        <h1>Product List {" "}
        <LinkContainer to ="/admin/create-new-product">
        <Button variant="primary" size="lg">
            Create New 
        </Button>
        </LinkContainer>
        
        </h1>
        
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Edit/Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map(
              (product, idx) => (
                <tr key={idx}>
                  <td>{idx +1}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.category}</td>
                  <td>
                    <LinkContainer to ={`/admin/edit-product/$product._id`}>
                    <Button className="btn-sm">
                        <i className="bi bi-pencil-square"></i>
                    </Button>
                    </LinkContainer>{"|"}
                    
                    <Button variant="danger" className="btn-sm" onClick={deleteHandler}>
                        <i className="bi bi-x-circle"></i>
                    </Button>
                
                  </td>
    
                </tr>
              )
            )}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default ProductsPageComponent;

