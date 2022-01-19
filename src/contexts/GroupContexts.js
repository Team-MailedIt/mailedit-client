import { useState, createContext, useCallback } from 'react';

const GroupContext = createContext({});

const GroupProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);

  const groupContext = {
    groupListContext: groups,
    setGroupList: useCallback((arrayFromAPI) => {
      setGroups([...arrayFromAPI]);
    }, []),
  };

  return (
    <GroupContext.Provider value={groupContext}>
      {children}
    </GroupContext.Provider>
  );
};

export { GroupContext, GroupProvider };
