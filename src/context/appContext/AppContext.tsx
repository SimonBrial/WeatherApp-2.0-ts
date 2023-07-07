import { createContext } from "react";
import { initialState } from "../initialState";
import { InitialState } from "../../interface/interface";

const AppContext = createContext<InitialState>(initialState);

export default AppContext;
