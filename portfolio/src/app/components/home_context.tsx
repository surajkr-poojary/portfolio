import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface HomeContextType {
  isDarkTheme: boolean;
  setIsDarkTheme: Dispatch<SetStateAction<boolean>>;

}


const HomeContext = createContext<HomeContextType | undefined>(undefined);

export const useHomeContext = () => {
  const context = useContext(HomeContext);
  if (context === undefined) {
    throw new Error("use HomeContext must be used within a HomeContextProvider");
  }
  return context;
};

export const HomeContextProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true); 
 
  return (
    <HomeContext.Provider
      value={{
        isDarkTheme,
        setIsDarkTheme,

      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
