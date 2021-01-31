import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
    font-size: 14px;
    display: flex;
    margin: 10px;
    min-width: 400px;
    padding: 2%;
    background: green;
    border-radius: 5px;
    color: white;
    cursor: pointer;

  &:hover,
  &:focus {
      opacity: .5;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.mainBg};
    opacity: .5;
    font-size: 14px;
    display: flex;
    margin: 10px;
    min-width: 400px;
    padding: 2%;
    color: white;
    cursor: default;

`;

Button.propTypes = {
  type: PropTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
