import ProductField from "./ProductField";

// 1

export default function Product({
  id,
  name,
  cost,
  catg,
  inCart,
  addToCart,
  isEdit,
  toggleMode,
  editProd,
  changeField 
}) {
  return (
    <tr>
      name:{" "}
      <ProductField
        id={id}
        text={name}
        type="name"
        isEdit={isEdit}
        editProd={editProd}
        changeField={changeField}
      />
      , cost:{" "}
      <ProductField
        id={id}
        text={cost}
        type="cost"
        isEdit={isEdit}
        editProd={editProd}
        changeField={changeField}
      />
      , catg:{" "}
      <ProductField
        id={id}
        text={catg}
        type="catg"
        isEdit={isEdit}
        editProd={editProd}
        changeField={changeField}
      />
      ----
      <button onClick={() => toggleMode(id)}>{isEdit ? "save" : "edit"}</button>
     
      <span>{inCart ? "in cart" : "not in cart"}</span> -----
      <button onClick={() => addToCart(id)}>
        {!inCart ? "add to cart" : "remove"}{" "}
      </button>
     
      </tr>
  );
}

// 2

// export default function Product({ id, name, cost, 
// 	catg, changeField }) { 
// 	return <tr>
// 		<ProductField id={id} text={name} 
// 			type="name" changeField={changeField} /> 
// 		<ProductField id={id} text={cost} 
// 			type="cost" changeField={changeField} /> 
// 		<ProductField id={id} text={catg} 
// 			type="catg" changeField={changeField} /> 
// 	</tr>;
// }