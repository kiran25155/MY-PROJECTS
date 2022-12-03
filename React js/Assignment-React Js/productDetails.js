import axios from "axios";
import { useEffect,useState } from "react";
import React from "react";
import ProductForm from "./productForm";
const ProductDetails=({reloadData})=>{
    const [product,setProduct]=useState([{}]);

      

        useEffect(() => {
          axios.get('http://localhost:8086/getAll').then(
              response=>{
                  setProduct(response.data)
                  console.log(response.data)
               } )
        }, [])
      
    
  
return(
        <>
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

                                
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            </h6>
        </>
    );
}
export default ProductDetails;