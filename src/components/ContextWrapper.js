import React, { useState } from 'react';

export const Context = React.createContext();

const ContextWrapper = props => {
    // I opted to use Context API instead of Redux because of low complexity of the project.
    const [username, setUsername] = useState("");
    const [gists, setGists] = useState([]);
    const [error, setError] = useState("");

    const handleSetUsername = username => {
        setUsername(username);
    }

    const handleSetGists = gists => {
        setGists(gists);
    }

    const handleSetError = error => {
        setError(error);
    }

    return (
        <Context.Provider value={{ username, handleSetUsername, handleSetGists, gists, error, handleSetError }}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextWrapper;
