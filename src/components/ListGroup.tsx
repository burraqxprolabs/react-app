import { MouseEvent } from 'react';
import { useState } from 'react';

function ListGoup() {

  let items = [
    'Lahore',
    'Karachi',
    'Islamabad',
    'London',
    'Tokyo'
  ];
  
  //Hook or state mangement
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // const [name, setName] = useState('');


  // using the item array nil for the if statement
  // items = [];

  // using ternary operator for the if statement items length zero
  // const message = items.length === 0 ? <p> No item found </p> : null;

  // using function operator for the if statement items length zero as above and in function we send the 
  // const getMessage = () => {
  //   return items.length === 0 ? <p> No item found </p> : null;
  // }

  // event handler function
  // const handleClick = (event: MouseEvent) => console.log(event)

  return (
    <>
      <div className="list-group">
        <h1 className="container"> This is List Group </h1>
        {/* {message} */}
        {/* {getMessage} */}
        {/* this condition is always working on the true conddition and of the statement is false then the false section is woking */}
        {items.length === 0 && <p> No item found </p>}
        {items.map((item, index) => (
          <a 
            className={ selectedIndex === index ? "list-group-item list-group-item-action active" : "list-group-item list-group-item-action" }
            key={item}
            onClick={() => {setSelectedIndex(index)}}
          >
            {item}
          </a>
        ))}

      </div>
    </>
  );
}

export default ListGoup;
