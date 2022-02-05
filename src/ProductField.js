// 1

export default function ProductField({ id, text, type, isEdit, editProd, }) {
    return isEdit ? (
      <input value={text} onChange={(event) => editProd(id, type, event)} />
    ) : (
      <span>{text}</span>
    );
  }

// 2
// import React, { useState } from "react";

// export default function ProductField({ id, text, 
// 	type, changeField }) { 
// 	const [isEdit, setIsEdit] = useState(false);
	
// 	return <td style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
// 		{
// 			isEdit
// 			? <input
// 				value={text}
// 				onChange={event => changeField(id, type, event)}
// 				onBlur={() => setIsEdit(false)}
// 			/>
// 			: <span onClick={() => setIsEdit(true)}>{text}</span>
// 		}
// 	</td>;
// }