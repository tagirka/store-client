import { createContext, Dispatch, FC, ReactNode, useReducer } from 'react';
import { AppReducer } from '../state/reducers/app.reducer';
import { AppStateType, initialState } from '../state/app.state/app.state';
import { ActionType, ItemActionEnum } from '../state/app.state/app.actions';

export interface AppContextType {
  state: AppStateType;
  dispatch: Dispatch<ActionType>;
}

interface AppContextProviderProps {
  children: ReactNode;
}

const initialContext: AppContextType = {
  state: initialState,
  dispatch: () => ({ type: ItemActionEnum.init }),
};

export const AppContext = createContext<AppContextType>(initialContext);

export const AppContextProvider: FC<AppContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>;
};
