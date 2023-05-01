import React from 'react';

import { toggleFollowed } from 'redux/tweets/tweetsSlice';
import { useDispatch } from 'react-redux';
import {
  Background,
  EllipseStyled,
  LineStyled,
  Logo,
  TweetCard,
  Wrapper,
} from './Tweet.styled';
import avatar from '../../images/avatar.png';
import logo from '../../images/logo.png';
import bg from '../../images/background.png';

export const Tweet = ({ user }) => {
  const dispatch = useDispatch();
  return (
    <TweetCard>
      <Background src={bg} alt="" />
      <Logo src={logo} alt="" />
      <LineStyled />
      <EllipseStyled>
        <div>
          <img src={user.avatar || avatar} alt={user.user} />
        </div>
      </EllipseStyled>
      <Wrapper>
        <span>{`${user.tweets.toLocaleString('en-US')} tweets`}</span>
        <span>{`${user.followers.toLocaleString('en-US')} followers`}</span>
        <button
          style={
            user.followed
              ? { background: '#5CD3A8' }
              : { background: '#EBD8FF' }
          }
          onClick={() => dispatch(toggleFollowed(user.id))}
        >
          <p>{user.followed ? 'following' : 'follow'}</p>
        </button>
      </Wrapper>
    </TweetCard>
  );
};
