import React from 'react';

const Button = ({ type, text, ...props }: any) => {
  return (
    <div>
      {type === 'info' ? (
        <button {...props} className="btn btn-info">
          {text}
        </button>
      ) : type === 'success' ? (
        <button {...props} className="btn btn-success">
          {text}
        </button>
      ) : type === 'warning' ? (
        <button {...props} className="btn btn-warning">
          {text}
        </button>
      ) : (
        <button {...props} className="btn btn-error">
          {text}
        </button>
      )}
    </div>
  );
};

export default Button;
