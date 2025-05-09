import './App.css'
import {useState} from "react";


const user = {
    name: 'Hedy Lamarr',
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
};

const products = [
    { title: 'Cabbage', isFruit: false, id: 1 },
    { title: 'Garlic', isFruit: false, id: 2 },
    { title: 'Apple', isFruit: true, id: 3 },
];

function MyButton() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1)
    }
    return (
        <button onClick={handleClick}>
            You clicked me, {count} times
        </button>
    );
}

function Profile() {
    return (
        <>
            <h1>Hello, {user.name}!</h1>
            <img
                className={"avatar"}
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
                />
        </>
    )
}

function ShoppingList() {
    const listItems = products.map((product) =>
        <li
            key={product.id}
            style={{
                color: product.isFruit ? 'magenta' : 'darkgreen'
            }}
        >
            {product.title}
        </li>
    );

    return (
        <ul>{listItems}</ul>
    );
}


export default function MyApp() {

  return (
      <div>
          <Profile />
          <h1>Welcome to my app</h1>
          <div>
              <h1>Counters that update separately</h1>
              <MyButton/>
              <MyButton/>
          </div>
          <ShoppingList />
      </div>
  )
}