import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const UserContext = createContext();

function Context(props) {
  const [users, setusers] = useState([]);
  const fetchtheusers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setusers(res.data))
      .catch((err) => console.log(err))
  }
  useEffect(() => {
    fetchtheusers()
  }, [])
  // console.log(props);

  return (
    <UserContext.Provider value={{ users, setusers }}>{props.children}</UserContext.Provider>
  )
}

export default Context