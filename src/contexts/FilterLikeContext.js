import { createContext, useState, useCallback } from 'react';

export const FilterLikeContext = createContext({
  state: { likes: false },
  actions: {
    setLikes: () => {},
  },
});

const FilterLikeProvider = ({ children }) => {
  const [likes, setLikes] = useState(false);

  const setLikesHandler = useCallback((likes) => {
    setLikes(likes);
  }, []);

  return (
    <FilterLikeContext.Provider value={{ likes, setLikesHandler }}>
      {children}
    </FilterLikeContext.Provider>
  );
};

export default FilterLikeProvider;
