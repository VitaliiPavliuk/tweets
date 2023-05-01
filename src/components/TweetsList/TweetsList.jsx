import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchTweets } from 'redux/tweets/tweets.operations';
import { setTweetsOnPage } from 'redux/tweets/tweetsSlice';
import {
  selectFilteredTweets,
  selectTweets,
  selectTweetsOnPage,
} from 'redux/selectors';

import { Tweet } from 'components/Tweet/Tweet';

import { List, ListItem, ListWrapper, LoadMoreBtn } from './TweetsList.styled';

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
        <ListWrapper>
          <List>
            {filteredTweets?.slice(0, onPage)?.map(user => {
              return (
                <ListItem key={user.id}>
                  <Tweet key={user.id} user={user} />
                </ListItem>
              );
            })}
          </List>

          {onPage < filteredTweets?.length && (
            <LoadMoreBtn
              onClick={() => dispatch(setTweetsOnPage(tweetsPerPage))}
            >
              Load more
            </LoadMoreBtn>
          )}
        </ListWrapper>
      )}
    </>
  );
};
