import React from 'react';
import {Item} from './Item';

export const TaskList = (props) => {
  console.log(props);
  return(
    <div className="ui items divided">
       {props.items.map( (e,i) => <Item key={i} item={e} deleteItem={props.deleteItem} /> )}
    </div>
  );
};
