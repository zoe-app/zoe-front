import styled from 'styled-components';

export const Button = styled.button`
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  background-color: #00a8e8;

  border-radius: 10px;
  border: none;
  padding: 0.5rem;

  :hover {
    filter: brightness(110%);
    cursor: pointer;
  }
`;

export const DeleteButton = styled.button`
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  background-color: #fb4d3d;

  border-radius: 10px;
  border: none;
  padding: 0.5rem;

  :hover {
    filter: brightness(90%);
    cursor: pointer;
  }
`;
