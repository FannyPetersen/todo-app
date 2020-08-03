import React from 'react';

const TodoCard = props => {
  const buttonDisplay = props.checked === true ? 'button--show' : 'button--no-show';
  const textDecoration = props.checked === true ? 'item--done' : '';

  return (
    <article id={props.id} className='item' onClick={props.handleClick}>
      <p id={props.id} className={`item__text ${textDecoration}`}>{props.text}</p>
      <button id={props.id} className={`item__button ${buttonDisplay}`} onClick={props.removeCard}>
        Remove
      </button>
    </article>
  );
};

export default TodoCard;
