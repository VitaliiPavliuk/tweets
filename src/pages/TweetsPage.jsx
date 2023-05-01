import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectFilter,
  selectStatus,
  // selectTweets
} from '../redux/selectors';
import { Loader } from 'components/Loader/Loader';
import { TweetsList } from 'components/TweetsList/TweetsList';
import { Filter } from 'components/Filter/Filter';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { filterTweets } from 'redux/tweets/tweetsSlice';

function TweetsPage() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  // const tweets = useSelector(selectTweets);
  const status = useSelector(selectStatus);

  const options = ['show all', 'follow', 'followings'];

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Filter />

      <Dropdown
        options={options}
        onChange={value => dispatch(filterTweets(value))}
        value={filter}
        placeholder="Select an option"
      />
      {status === 'pending' && <Loader />}
      <TweetsList tweetsPerPage={3} />
    </div>
  );
}

export default TweetsPage;
