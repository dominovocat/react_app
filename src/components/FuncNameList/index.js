import React, { useState, useEffect } from "react";
import { getUsers, getUsersJSON } from "../../api";

const NameList = (props) => {
  const [users, setUsers] = useState();
  const [error, setError] = useState();
  const [isFetching, setIsFetching] = useState();

  useEffect(() => {
    setIsFetching(true);
    getUsersJSON()
      .then((data) => setUsers(data))
      .catch((err) => setError(err))
      .finally(() => setIsFetching(false));
  }, []);
  if (error) {
    return <p>{error}</p>;
  }
  if (isFetching) {
    return <p>Loading...</p>;
  }
  return (
    <ol>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ol>
  );
};

export default NameList;
