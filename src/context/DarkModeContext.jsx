import React, {useState} from "react";

const DarkContext = React.createContext({
    dark: false,
    darkHandler: ()=>{}
});

export const DarkContextProvider = (props) => {
    const [dark, isDark] = useState(false);

    const darkHandler = () => isDark(prevState=>!prevState);

    return (
        <DarkContext.Provider value={{
           dark: dark,
           darkHandler : darkHandler
        }}>
            {props.children}
        </DarkContext.Provider>
    );
};


export default DarkContext;