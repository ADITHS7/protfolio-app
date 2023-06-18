import "./ProductionList.css"
import Product from "../Product/Product"
import {products} from "../../Data"

const ProductionList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create and Inspire. Its Adith</h1>
        <p className="pl-desc">Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, explicabo? ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus sit accusamus laborum ab est. Nam est ipsa recusandae perferendis!</p>
      </div>
      <div className="pl-list">
        {products.map((item)=>(
        <Product key={item.id}  img={item.img} link={item.link}/>
        ))}
        
        
      </div>
    </div>
  )
}

export default ProductionList