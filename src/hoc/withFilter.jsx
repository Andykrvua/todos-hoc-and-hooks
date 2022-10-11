import { useState, useEffect } from 'react';

export function withFilter(Component, propFilter) {
  return function (props) {
    const { list, ...otherProps } = props;

    const [enteredSearchValue, setEnteredSearchValue] = useState('');
    const [activeSearchValue, setActiveSearchValue] = useState('');

    const availableItems = activeSearchValue
      ? list.filter((item) =>
          RegExp(activeSearchValue, 'i').test(item[propFilter])
        )
      : list;

    useEffect(() => {
      const handler = setTimeout(() => {
        setActiveSearchValue(enteredSearchValue);
      }, 300);

      return () => {
        clearTimeout(handler);
      };
    }, [enteredSearchValue]);

    return (
      <Component
        list={availableItems}
        {...otherProps}
        enteredSearchValue={enteredSearchValue}
        setEnteredSearchValue={setEnteredSearchValue}
      />
    );
  };
}
