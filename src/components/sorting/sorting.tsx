import { useState, KeyboardEvent } from 'react';
import cn from 'classnames';

import { TSorting } from '../../types/sorting';
import { SortingMap } from '../../common/const';

type SortingProps = {
  activeSorting: TSorting;
  onChange: (newSorting: TSorting) => void;
}

function Sorting({activeSorting, onChange}: SortingProps) {
  const [isOpened, setIsOpened] = useState(false);

  const iconStyle = {
    transform: `translateY(-50%) ${isOpened ? 'rotate(180deg)' : ''}`
  };

  function handleKeydown(evt: KeyboardEvent) {
    if (evt.key === 'Escape' && isOpened) {
      evt.preventDefault();
      setIsOpened(false);
    }
  }

  function handleTypeClick() {
    setIsOpened((prevIsOpened) => !prevIsOpened);
  }

  function handleSortingItemClick(type: TSorting) {
    onChange(type);
    setIsOpened(false);
  }

  return ()
}
