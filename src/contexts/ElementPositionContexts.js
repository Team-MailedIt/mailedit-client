import { useState, createContext, useCallback } from 'react';

const ElementPositionContext = createContext({});

const PositionProvider = ({ children }) => {
  const [position, setPosition] = useState({ x: '', y: '' });

  const groupContext = {
    position: position,
    getPosition: useCallback(({ current }) => {
      const { x, y } = current.getBoundingClientRect();
      setPosition({ x: x, y: y });
    }, []),
  };

  return (
    <ElementPositionContext.Provider value={groupContext}>
      {children}
    </ElementPositionContext.Provider>
  );
};

export { ElementPositionContext, PositionProvider };
