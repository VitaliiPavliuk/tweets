import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectFilteredTweets,
  selectTweets,
  selectTweetsOnPage,
} from 'redux/selectors';
import { fetchTweets } from 'redux/tweets/tweets.operations';
import { setTweetsOnPage } from 'redux/tweets/tweetsSlice';
import { Tweet } from 'components/Tweet/Tweet';
import { LoadMoreBtn } from './TweetsList.styled';

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
          <ul
            style={{
              display: 'grid',
              gridGap: '30px',
              gridTemplateColumns: 'repeat(3, 1fr)',
              marginTop: '50px',
              marginBottom: '50px',
              padding: '0',
            }}
          >
            {filteredTweets?.slice(0, onPage)?.map(user => {
              return (
                <li style={{ display: 'flex' }} key={user.id}>
                  <Tweet key={user.id} user={user} />
                </li>
              );
            })}
          </ul>

          {onPage < filteredTweets?.length && (
            <LoadMoreBtn
              onClick={() => dispatch(setTweetsOnPage(tweetsPerPage))}
            >
              Load more
            </LoadMoreBtn>
          )}
        </div>
      )}
    </>
  );
};
