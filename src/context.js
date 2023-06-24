import React, { useState, useContext, useEffect } from "react";
import data from './data';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [db, setDb] = useState(data);

    const posts = db.posts;

return <AppContext.Provider value={{db, setDb, posts}}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}
export {AppContext, AppProvider};