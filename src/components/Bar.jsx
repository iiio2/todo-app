import React from 'react';

const Bar = ({ todo, todoLimit }) => {
  const todoLength = (todo.length / todoLimit) * 100;
  return (
    <React.Fragment>
      {todo.length === 0 ? null : (
        <div className='progress'>
          <div
            className='progress-bar bg-success'
            role='progressbar'
            style={{ width: todoLength + '%' }}
          ></div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Bar;
