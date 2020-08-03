import React from 'react';
import TodoCard from './TodoCard';

const TodoList = props => {
  return (
    <main>

      <form className='form' onSubmit={props.handleSubmit}>
        Register New ToDo:
        <br/>
        <input
          type='text'
          className='form__textfield'
          placeholder='I probably should...'
          value={props.value}
          onChange={props.handleChange}
        />
        <input className='form__button' type='submit' value='Submit' onSubmit={props.handleSubmit} />
      </form>

      <section className='item-container'>
        {props.list.map(el => {
          const cardOrder = el.checked === true ? 'item--bottom' : 'item--top';
          return (
            <section className={`${cardOrder}`} key={el.id}>
              <TodoCard
                text={el.text}
                checked={el.checked}
                id={el.id}
                handleClick={props.handleClick}
                removeCard={props.removeCard}
              />
            </section>
          );
        })}
      </section>

    </main>
  );
};

export default TodoList;
