import React from 'react';

interface IProps {}

const InputComponent: React.FC<IProps> = () => {
  return (
    <React.Fragment>
      <div style={{ width: '90%', margin: ' 20px auto' }}>
        <input
          style={{
            width: '100%',
            boxShadow: '0 1px 8px 0 rgba(0, 0, 0, 0.2)',
            border: 'none',
            borderRadius: 10,
            padding: 8,
            fontSize: 18,
            outline: 'none',
            fontWeight: 600
          }}
          type='text'
          name='location'
        />
      </div>
    </React.Fragment>
  );
};

export default InputComponent;
