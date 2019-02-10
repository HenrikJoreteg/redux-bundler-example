import { render } from 'preact'
import getStore from './bundles'
import root from './components/root'
import cache from './utils/cache'

// this is entirely optional, but here we try to pull starting data
// from our local cache. We're using a util called money-clip here that
// will only return if the version number is a match and it's not
// older than the specified maxAge.
cache.getAll().then(initialData => {
  if (initialData) {
    console.log('starting with locally cache data:', initialData)
  }
  render(root(getStore(initialData)), document.getElementById('app'))
})
