import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Private } from './scenes/Layout/Private/Private'
import { Public } from './scenes/Layout/Public/Public'
import './main.scss';

export const App = () => {

  const { authentication } = useSelector(state => state.auth)

  return (
    <div>
      {!authentication && <Public />}
      {authentication && <Private />}
    </div>
  );
}
