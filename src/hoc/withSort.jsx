import { useState } from 'react';

export function withSort(Component, propSort) {
  return function (props) {
    const { list, ...otherProps } = props;

    const [sortMode, setSortMode] = useState(null);

    const sortedItems = !sortMode
      ? list
      : list.slice().sort((a, b) => {
          if (sortMode === 'asc' && a[propSort] > b[propSort]) {
            return 1;
          } else if (sortMode === 'asc') {
            return -1;
          } else if (sortMode === 'desc' && a[propSort] > b[propSort]) {
            return -1;
          } else {
            return 1;
          }
        });

    return (
      <Component
        list={sortedItems}
        {...otherProps}
        sortMode={sortMode}
        setSortMode={setSortMode}
      />
    );
  };
}
