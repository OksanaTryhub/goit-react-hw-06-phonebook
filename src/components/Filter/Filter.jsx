import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getFilter } from './../redux/filter/filter-selectors';
import { setFilter } from 'components/redux/filter/filter-slice';

import css from './Filter.module.css';

export default function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <label className={css.filter__label}>
      Find contacts by name
      <input
        className={css.filter__input}
        type="text"
        value={filter}
        placeholder={'Enter name'}
        onChange={changeFilter}
      ></input>
    </label>
  );
}
