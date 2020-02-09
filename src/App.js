import React, { useEffect } from 'react';
import './main.scss';
import { useSelector } from 'react-redux'

import { Private } from './scenes/Layout/Private/Private'
import { Public } from './scenes/Layout/Public/Public'

export const App = () => {

  const { authentication } = useSelector(state => state.auth)

  return (
    <div>
      {!authentication && <Public />}
      {authentication && <Private />}
    </div>
  );
}
