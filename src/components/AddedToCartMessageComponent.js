import { Alert, Button } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

const AddedToCartMessageComponent = () =>{

    const [show,setShow] = useState(true);
    return(
       <Alert show={show} variant="success" onClose={()=> setShow(false) } dismissible>

        <Alert.Heading style={{color:"green"}}>The product was added successifully</Alert.Heading>
        <p>
            <Link to="/product-details">
            <Button variant="success">Go Back</Button>{" "}
            </Link>
            <Link to="/cart">
            <Button variant="danger"> Go to Cart</Button>
            </Link>
            
        </p>

       </Alert>


    )
} ;
export default AddedToCartMessageComponent;