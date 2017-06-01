let store = null

const run = () => {
  setInterval( () => {
    store.dispatch({type: 'STEP'})
  }, 100)
}

const setStore = (str) => {
  store = str
}

module.exports = {setStore, run}