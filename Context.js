import React, {useState} from "react";

const SongContext = React.createContext();

const SongProvider = ({children}) => {
    const [actualSongId, setActualSongId] = useState('5');
    return(
        <SongContext.Provider value={{actualSongId,setActualSongId}}>
            {children}
        </SongContext.Provider>
    )
}

export {SongContext, SongProvider}