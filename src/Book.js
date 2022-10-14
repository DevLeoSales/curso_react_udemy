import React from 'react'

const Book = ({ img, title, author }) => {
    //attribute, eventHandler
    //onClick, onMouseOver
    const clickHandler = () => {
        alert('hello world');
    }
    const complexExample = (author) => {
        console.log(author);
    }
    return (
        <article className='book' onMouseOver={() => {
            console.log(title);
        }}>
            <img src={img} />
            <h1 onClick={() => console.log(title)}>{title}</h1>
            <h4>{author}</h4>
            <button typ e='button' onClick={clickHandler}>
                click here
            </button>
            <button type='button' onClick={() => complexExample(author)}>
                click also here
            </button>
        </article>
    )
}


export default Book