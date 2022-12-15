import { ProductElementWrapper, ProductsSorting } from "./products.component.style";
import ProductElement from "../../../components/product-element/product-element.component";

const Products = () => {

  return (
    <div className="products__wrapper">
        <ProductsSorting>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <div><span>Found:</span><span>100</span></div>
          <input type="text" placeholder="Search product"></input>
          <div></div>
          <div></div>
        </ProductsSorting>
        <ProductElementWrapper>
          <ProductElement />
          <ProductElement />
          <ProductElement />
        </ProductElementWrapper>
      </div>
  )
}

export default Products;