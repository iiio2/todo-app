import React from 'react';

const Todo = ({ todo, deleteTodo }) => {
  return (
    <React.Fragment>
      {todo.length === 0 && <p className='lead'>You have no todo!</p>}
      <ul>
        {todo.map((t) => {
          return (
            <li key={t.id}>
              <p className='lead'>{t.title}</p>
              <button
                onClick={() => deleteTodo(t.id)}
                className='btn btn-danger btn-sm'
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default Todo;
