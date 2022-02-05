import React, { useState } from "react";
import { nanoid } from "nanoid";
import Product from "./Product";

// 1

const initProds = [
  { id: nanoid(), name: "product1", cost: 100, catg: 'catg1', inCart: false, isEdit: false },
  { id: nanoid(), name: "product2", cost: 200, catg: 'catg2', inCart: false, isEdit: false },
  { id: nanoid(), name: "product3", cost: 300, catg: 'catg3', inCart: false, isEdit: false }
];

export default function Products() {
  const [prods, setProds] = useState(initProds);

  function addToCart(id) {
    setProds(
      prods.map((prod) => {
        if (prod.id === id) {
          prod.inCart = !prod.inCart;
        }

        return prod;
      })
    );
  }

  function toggleMode(id) {
    setProds(
      prods.map((prod) => {
        if (prod.id === id) {
          prod.isEdit = !prod.isEdit;
        }

        return prod;
      })
    );
  }

  function editProd(id, field, event) {
    setProds(
      prods.map((prod) => {
        if (prod.id === id) {
          prod[field] = event.target.value;
        }

        return prod;
      })
    );
  }

  function changeField(id, field, event) {
    setProds(
        prods.map(prod => {
        if (prod.id == id) {
            prod[field] = event.target.value;
        }
        
        return prod;
    }));
}

  const items = prods.map((prod) => {
    return (
      <Product
        key={prod.id}
        id={prod.id}
        name={prod.name}
        cost={prod.cost}
        catg={prod.catg}
        inCart={prod.inCart}
        addToCart={addToCart}
        isEdit={prod.isEdit}
        toggleMode={toggleMode}
        editProd={editProd}
        changeField={changeField}
      />
    );
  });

  return <div>
            {items}
        </div>;
}

// 2

// const initProds = [
// 	{id: nanoid(), name: 'prod1', cost: 'cost1', catg: 'catg1'},
// 	{id: nanoid(), name: 'prod2', cost: 'cost2', catg: 'catg2'},
// 	{id: nanoid(), name: 'prod3', cost: 'cost3', catg: 'catg3'},
// ];

// export default function Products() {
// 	const [prods, setProds] = useState(initProds);
	
// 	function changeField(id, field, event) {
// 		setProds(prods.map(prod => {
// 			if (prod.id == id) {
// 				prod[field] = event.target.value;
// 			}
			
// 			return prod;
// 		}));
// 	}
	
// 	const rows = prods.map(prod => {
// 		return <Product
// 			key ={prod.id}
// 			id  ={prod.id}
// 			name={prod.name}
// 			cost={prod.cost}
// 			catg={prod.catg}
// 			changeField={changeField}
// 		/>;
// 	});
	
// 	return <div>
// 		<table style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
// 			<tbody>
// 				{rows}
// 			</tbody>
// 		</table>
// 	</div>;
// }