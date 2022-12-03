import axios from "axios";
import { useEffect,useState } from "react";
import EditProduct from "./editProduct";
import React from "react";
import { Alert } from "react-bootstrap"
const ProductDetails=({reloadData})=>{
    
    const [product,setProduct]=useState([{}]);
    const [showEdit, setShowEdit]=useState(false);
    const [prodtData, setProdtData]=useState('');
    const [message, setMessage] = useState('')
    const updation=(msg)=>{
        if(msg!==''){
            setShowEdit(false)
            getProduct()
            setMessage(msg)
        }
    }
  
    const showUpdateStatus = () => {
        if (message !== '') {
            return (
                <Alert variant="success">
                    <Alert.Heading>{ message }</Alert.Heading>
                </Alert>
            )
        }
    }
    const getProduct= async () => {
        await axios.get('http://localhost:8086/getAll')
        .then((res) => {
            setProduct(res.data)
            console.log(res.data)
        })
    }
    const editRecord=(productData)=>{
        setProdtData(productData)
      setShowEdit(true)
    
    }
    
    const enableEdit =()=>{
        if(showEdit){
            return(
                <EditProduct updation={updation} prodtData={prodtData}/>
            )
        }
    }
useEffect(() =>{
    if(reloadData){
        getProduct()
    }
},[reloadData])


const deleteRecord = async(country) => {
 
await axios.delete(`http://localhost:8086/delete/${country}`)
.then((res)=>{
    console.log(res)
 getProduct()
})
}
useEffect(()=>{
    getProduct()
},[])

return(
        <>
        {
                showUpdateStatus()
            }
        <h6>
         <div style={{marginLeft:"300px",marginRight:"300px",marginTop:"10px"}}>
                <h2>ProductDetails</h2>
                <table  className="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>Country</th>
                            <th>Item Type</th>
                            <th>Sales Channel</th>
                            <th>Order Priority</th>
                            <th>Order Id</th>
                            <th>units Sold</th>
                            <th>units Price</th>
                            <th>units Cost</th>
                            <th>Total Revenue</th>
                            <th>Total Cost</th>
                            <th>Total Profit</th>
                            <th><button className="btn btn-danger">Delete</button></th>
                            <th><button className="btn btn-info">Edit</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        product.map(productData => 
                                <tr key="{productData.country}">
                                    <td>{productData.country}</td>
                                    <td>{productData.itemType}</td>
                                    <td>{productData.sales}</td>
                                    <td>{productData.orderPriority }</td>
                                    <td>{productData.orderId}</td>
                                    <td>{productData.unitSold}</td>
                                    <td>{productData.unitPrice}</td>
                                    <td>{productData.unitCost}</td>
                                    <td>{productData.totalRevenue}</td>
                                    <td>{productData.totalCost}</td>
                                    <td>{productData.totalProfit}</td>
                                    <td><button className="btn btn-danger" onClick={()=> deleteRecord(productData.country)} >Delete</button></td>
                                    <td><button className="btn btn-info" onClick={()=> editRecord(productData)} >Edit</button></td>
                                
                                </tr>
                            )
                        }
                    </tbody>
                </table>
               
            </div>
            {
                enableEdit()
            }
            </h6>
        </>
    );
}
export default ProductDetails;