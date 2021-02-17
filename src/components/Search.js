import React, { useEffect, useContext } from 'react';
import styled from 'styled-components'
import Octicon from 'react-octicon'
import { Context } from './ContextWrapper'
import { getGistForUser, getPublicGists } from '../services/gistService';

const Search = () => {
  const context = useContext(Context);
  const {
    handleSetUsername,
    handleSetGists,
    handleSetError,
  } = context;

  useEffect(async () => {
    const publicGists = await getPublicGists();
    await handleSetGists(publicGists.data);
  }, [])

  const handleKeyDown = async event => {
    if (event.key === 'Enter') {
      handleSetUsername(event.target.value);
      if (event.target.value) {
        try {
          const userGists = await getGistForUser(event.target.value);
          await handleSetGists(userGists.data);
          handleSetError("");
        } catch (error) {
          handleSetError("User Not Found");
          handleSetGists([]);
        }
      } else {
        handleSetError("");
        const publicGists = await getPublicGists();
        await handleSetGists(publicGists.data);
      }
    }
  }

  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input
          placeholder="Search Gists for the username"
          onKeyDown={handleKeyDown}
        />
      </InputBox>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus{
    outline: 0;
  }
`;

export default Search
