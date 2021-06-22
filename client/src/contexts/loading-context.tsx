import React, {
  createContext,
  useContext,
  useState,
  SetStateAction,
  Dispatch,
} from 'react';
import { Loader } from 'components';

interface ContextProps {
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const LoadingContext = createContext({} as ContextProps);
const useLoadingContext = (): ContextProps => useContext(LoadingContext);

const LoadingProvider: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const value: ContextProps = { setLoading, loading };

  return (
    <LoadingContext.Provider value={value}>
      {loading && <Loader />}
      {children}
    </LoadingContext.Provider>
  );
};

export { LoadingProvider, LoadingContext, useLoadingContext };
