import React from 'react';

import { PhoneListItem } from 'components/PhoneListItem/PhoneListItem';
import { List } from './PhoneList.style';

export const PhoneList = ({ contacts, onRemove }) => {
  return (
    <List>
      {contacts.map(({ firstName, number, id }) => (
        <PhoneListItem
          key={id}
          id={id}
          firstName={firstName}
          number={number}
          onRemove={onRemove}
        />
      ))}
    </List>
  );
};