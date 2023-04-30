import React from 'react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';

import { NavLinkSt, NavSt, Wrapper } from './Navigation.styled';

export const Navigation = () => {
  return (
    <div>
      <NavSt>
        <Wrapper>
          <div>
            <NavLinkSt to="/">Home</NavLinkSt>
            <NavLinkSt to="/tweets">Tweets</NavLinkSt>
          </div>
        </Wrapper>
      </NavSt>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
