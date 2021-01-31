import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputBase = styled.input`
    background-color: ${({ theme }) => theme.colors.pretoHallow};
    font-size: 14px;
    border: 1px solid ${({ theme }) => theme.colors.laranjaHallow};
    display: flex;
    margin: 20px 10px 20px 10px;
    min-width: 400px;
    padding: 4%;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.contrastText}

`;

export default function Input({ onChange, placeholder, ...props }) {
  return (
    <div>
      <InputBase
        placeholder={placeholder}
        onChange={onChange}
        // eslint-disable-next-line react/prop-types
        {...props}
      />
    </div>

  );
}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
};
