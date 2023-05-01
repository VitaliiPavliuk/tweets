import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import ReactPaginate from 'react-paginate';

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

  // const [currentTweets, setCurrentTweets] = useState(null);
  // const [pageCount, setPageCount] = useState(0);
  // const [itemOffset, setItemOffset] = useState(0);

  // useEffect(() => {
  //   if (tweets.length === 0) {
  //     dispatch(fetchTweets());
  //     return;
  //   }

  //   const endOffset = itemOffset + tweetsPerPage;
  //   setCurrentTweets(filteredTweets.slice(itemOffset, endOffset));
  //   setPageCount(Math.ceil(filteredTweets.length / tweetsPerPage));
  // }, [dispatch, itemOffset, tweetsPerPage, tweets, filteredTweets]);

  // const handlePageClick = event => {
  //   const newOffset = (event.selected * tweetsPerPage) % filteredTweets.length;
  //   setItemOffset(newOffset);
  // };

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
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}
      >
        {/* <ReactPaginate
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel="<"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        /> */}
      </div>

      {/* {users.length !== 0 && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <List dense sx={{ width: '100%', maxWidth: 480 }}>
            {users.map(user => {
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
        </div>
      )} */}
    </>
  );
};
