/* eslint-disable react-hooks/exhaustive-deps */

import {useState, useEffect} from 'react';
import { MAX_REPOS, REPOS_INCREMENT} from '../constants/index';
import { debouncer } from '../utils/debouncer';

export const useInfiniteScroll = () => {
 // this hasnt to be a hook but i want to get more familiar with hooks

 // initialize state
 const [loading, setLoading] = useState(false);
 // first scroll 0->30, 2nd 0->60 - slice
  const [count, setCount] = useState(REPOS_INCREMENT);

  const handleScroll = debouncer(() => {
      // console.log('windows=====', window);
      if(window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight 
        || loading) {
          return false;
        }
        setLoading(true);
  }, 100);

  useEffect(() => {
    //if its not loading just return
    if(!loading) return;

    if(count + REPOS_INCREMENT >= MAX_REPOS) {
      setCount(MAX_REPOS);
    } else {
      setCount(count + REPOS_INCREMENT);
    }

    setLoading(false);
  },[loading]);

  useEffect(() => {
    // listen to scroll, once component in mount listen for scroll, prevent loading all the time
    window.addEventListener('scroll', handleScroll);
    // clean up remove the listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return { count };

}