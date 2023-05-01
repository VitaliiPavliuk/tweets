import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectError, selectFilter, selectStatus } from '../redux/selectors';
import { Loader } from 'components/Loader/Loader';
import { TweetsList } from 'components/TweetsList/TweetsList';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { filterTweets } from 'redux/tweets/tweetsSlice';
import { Link } from 'react-router-dom';

function TweetsPage() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  const options = ['show all', 'follow', 'followings'];

  return (
    <>
      <Link to="/">Go back</Link>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {status === 'pending' && <Loader />}

        {error !== null ? (
          <b>Opps, some error occured: {error}</b>
        ) : (
          <>
            <h5>FILTER</h5>
            <Dropdown
              options={options}
              onChange={value => dispatch(filterTweets(value))}
              value={filter}
              placeholder="Select an option"
            />

            <TweetsList />
          </>
        )}
      </div>
    </>
  );
}

export default TweetsPage;
