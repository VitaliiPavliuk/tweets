import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import {
  selectFilteredTweets,
  selectTweets,
  selectTweetsOnPage,
} from 'redux/selectors';
import { fetchTweets } from 'redux/tweets/tweets.operations';
import { setTweetsOnPage, toggleFollowed } from 'redux/tweets/tweetsSlice';

export const tweetsPerPage = 3;

export const TweetsList = () => {
  const tweets = useSelector(selectTweets);
  const filteredTweets = useSelector(selectFilteredTweets);
  const onPage = useSelector(selectTweetsOnPage);

  const dispatch = useDispatch();

  useEffect(() => {
    if (tweets.length === 0) {
      dispatch(fetchTweets());
      return;
    }
  }, [dispatch, tweets]);

  return (
    <>
      {filteredTweets && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <List dense sx={{ width: '100%', maxWidth: 480 }}>
            {filteredTweets?.slice(0, onPage)?.map(user => {
              return (
                <ListItem key={user.id}>
                  <img src={user.avatar} alt={user.user} />
                  <ListItemText
                    divider="true"
                    primary={`${user.tweets} TWEETS : ${user.followers} FOLLOWERS`}
                  />
                  <button onClick={() => dispatch(toggleFollowed(user.id))}>
                    {user.followed ? 'FOLLOWING' : 'FOLLOW'}
                  </button>
                </ListItem>
              );
            })}
          </List>

          {onPage < filteredTweets?.length && (
            <button onClick={() => dispatch(setTweetsOnPage(tweetsPerPage))}>
              Load more
            </button>
          )}
        </div>
      )}
    </>
  );
};
