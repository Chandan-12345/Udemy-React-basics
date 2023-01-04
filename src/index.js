import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


const Books = [
  {
    id:1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdghMbVJiiZVpZdNKdEX1j_UHC3yECh8UAzg&usqp=CAU",
    Author: "Author of the Book",
    title: 'Title of the book"',
  },

 {
  id:2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdghMbVJiiZVpZdNKdEX1j_UHC3yECh8UAzg&usqp=CAU",
    Author: "Author of the Book",
    title: 'Title of the book',
  },
  {
    id:3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdghMbVJiiZVpZdNKdEX1j_UHC3yECh8UAzg&usqp=CAU",
    Author: "Author of the Book",
    title: 'Title of the book"',
  },

 {
  id:4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdghMbVJiiZVpZdNKdEX1j_UHC3yECh8UAzg&usqp=CAU",
    Author: "Author of the Book",
    title: 'Title of the book',
  },
]



const MiniBook = () => {
  return (
    <section className="booklist">
       {Books.map( (book) =>{
        /* const {img, title, Author} = book; */
        return <FirstBook key={book.id} {...book} ></FirstBook>
      })}
    </section>
  );
};

const FirstBook = (props) => {
  console.log(props.book,"ppppppp");
  const { img, title, Author } = props; //object destructring
  return (
    <article className="book">
      <img src={img} alt="bookImg" />
      <h3>{title}</h3>
      <h2>{Author}</h2>
    </article>
  );
};

//  ReactDOM.render(<MiniBook />, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MiniBook />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
