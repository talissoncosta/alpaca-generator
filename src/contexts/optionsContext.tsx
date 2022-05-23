import React, { createContext, useMemo, useReducer, useContext } from "react";
import {
  ACCESSORIES,
  BACKGROUND,
  BLUE,
  CURLS,
  DEFAULT,
  EARS,
  EYES,
  FLOWER,
  HAIR,
  LEG,
  MOUTH,
  NECK,
  NOSE,
} from "../constants";

const defaultState = {
  hair: CURLS,
  ears: DEFAULT,
  nose: NOSE,
  eyes: DEFAULT,
  mouth: DEFAULT,
  neck: DEFAULT,
  leg: DEFAULT,
  accessories: FLOWER,
  background: BLUE,
  component: HAIR,
  style: ''
};
const OptionsContext = createContext<{ state: State; dispatch: Dispatch }>({
  state: defaultState,
  dispatch: () => ({ type: HAIR, payload: {} }),
});

type Action = ({type: 'hair'} | 
  {type: 'ears'} |
  {type: 'nose'} |
  {type: 'eyes'} |
  {type: 'nose'} |
  {type: 'mouth'} |
  {type: 'neck'} |
  {type: 'leg'} |
  {type: 'accessories'} |
  {type: 'background'} | {type: 'component'} | {type: 'style'}) & { payload: any }
type Dispatch = (action: Action) => void;
type State = {
  hair: string;
  ears: string;
  nose: string;
  eyes: string;
  mouth: string;
  neck: string;
  leg: string;
  accessories: string;
  background: string;
  component: string;
  style: string;
};

function optionsReducer(state: State, action: Action) {
  switch (action.type) {
    case HAIR: {
      return { ...state, ...{ 'style': action.payload, 'hair': action.payload } };
    }
    case EARS: {
      return { ...state, ...{ 'style': action.payload, 'ears': action.payload } };
    }
    case NOSE: {
      return { ...state, ...{ 'style': action.payload, 'nose': action.payload } };
    }
    case EYES: {
      return { ...state, ...{ 'style': action.payload, 'eyes': action.payload } };
    }
    case MOUTH: {
      return { ...state, ...{ 'style': action.payload, 'mouth': action.payload } };
    }
    case NECK: {
      return { ...state, ...{ 'style': action.payload, 'neck': action.payload } };
    }
    case LEG: {
      return { ...state, ...{ 'style': action.payload, 'leg': action.payload } };
    }
    case ACCESSORIES: {
      return { ...state, ...{ 'style': action.payload, 'accessories': action.payload } };
    }
    case BACKGROUND: {
      return { ...state, ...{ 'style': action.payload, 'background': action.payload } };
    }
    case 'component': {
      return { ...state, ...{ 'style': action.payload, 'component': action.payload } };
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
}

function useOptions() {
  const context = useContext(OptionsContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a CountProvider");
  }
  return context;
}

const OptionsProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(optionsReducer, defaultState);

  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  );
  return (
    <OptionsContext.Provider value={value}>{children}</OptionsContext.Provider>
  );
};

export { OptionsProvider, OptionsContext, useOptions };
