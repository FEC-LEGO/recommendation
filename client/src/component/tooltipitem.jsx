import React from 'react';
import styled from 'styled-components';

const TooltipItem = ({details}) => (
  <div>
    <ul>
      <li>Description:</li>
      <span>
        {' '}
        {details.description}
        {' '}
      </span>
      <li> Shop more like this:</li>
      {details.show_most_like.map((show,i) => (
        <span style={{ textDecoration: 'underline' }} key={show + i}>
          {' '}
          {show}
          {' '}
        </span>
      ))}
    </ul>
  </div>
);

export default TooltipItem;
