import React from 'react';
import { useSelector } from 'react-redux';

import { selectStatus } from '../redux/selectors';
import { Loader } from 'components/Loader/Loader';
import { TweetsList } from 'components/TweetsList/TweetsList';
import { Filter } from 'components/Filter/Filter';

function TweetsPage() {
  const status = useSelector(selectStatus);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Filter />

      {status === 'pending' && <Loader />}

      <TweetsList tweetsPerPage={3} />
    </div>
  );
}

export default TweetsPage;
