import styled from "styled-components";
import check from "../../constants/icons/check.svg";
import { useState } from "react";

const CheckBox = ({ id }) => {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckBoxClick = (e) => {
    // setIsChecked(!isChecked);
    setIsChecked({ checked: e.target.checked });
    console.log(e.target.checked);
    console.log(e.target.id);
  };

  return (
    <input
      id={id}
      type="checkbox"
      value={isChecked}
      onChange={handleCheckBoxClick}
    />
  );
};

// const CheckBox = () => {
//   const [checkedList, setCheckedList] = useState([]);

//   const dataList = [
//     { id: 1, data: "aaa" },
//     { id: 2, data: "bbb" },
//     { id: 3, data: "ccc" },
//     { id: 4, data: "ddd" },
//     { id: 5, data: "eee" },
//     { id: 6, data: "fff" },
//   ];

//   const onCheckedAll = (checked) => {
//     if (checked) {
//       const checkedListArray = [];
//       dataList.forEach((list) => checkedListArray.push(list));

//       setCheckedList(checkedListArray);
//     } else {
//       setCheckedList([])
//     }
//   };

//   const onCheckedElement = (checked, list) => {
//     if (checked) {
//       setCheckedList([...checkedList, list]);
//     } else {
//       setCheckedList(checkedList.filter((el) => el !== list));
//     }
//   }

//   return <input type="checkbox" onChange={(e) => onCheckedAll(e.target.checked)}/>
// };

export default CheckBox;
