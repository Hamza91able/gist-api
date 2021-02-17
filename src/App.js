
import styled from 'styled-components'
import ContextWrapper from './components/ContextWrapper';
import Header from "./components/Header";
import GlobalStyles from "./GlobalStyle";
import Gists from './screens/Gists';

const App = () => {
  return (
    <ContextWrapper>
      <Wrapper className="App" data-testid="app">
        <Header />
        <Gists />
        <GlobalStyles />
      </Wrapper>
    </ContextWrapper>
  );
}

const Wrapper = styled.div`
  font-size: 14px;
  line-height: 1.5;
`;

export default App;
