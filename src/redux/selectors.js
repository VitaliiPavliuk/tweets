import { createSelector } from '@reduxjs/toolkit';

export const selectStatus = state => state.tweets.status;
export const selectTweets = state => state.tweets.users;
export const selectFilter = state => state.tweets.filter;
export const selectTweetsOnPage = state => state.tweets.onPage;

export const selectFilteredTweets = createSelector(
  selectTweets,
  selectFilter,
  (tweets, filter) => {
    if (filter.value === 'show all') return tweets;
    if (filter.value === 'follow')
      return tweets.filter(
        user => user.followed === false || user.followed === undefined
      );
    if (filter.value === 'followings')
      return tweets.filter(user => user.followed === true);
  }
);
