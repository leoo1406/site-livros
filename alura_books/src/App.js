import Header from './componentes/Header';
import styled from 'styled-components';
import Pesquisa from './componentes/Pesquisa'
import UltimosLancamentos from './componentes/UltimosLancamentos';


/*styled.div é a mesma coisa de usar um css, porém mais simplificado e só em JS*/
const AppContainer = styled.div`                                
    width: 100vw;
    height: 100vh;
    overflow: auto;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
  }
`

function App() {
  return (
    <AppContainer>
      <Header/>
      <Pesquisa/>
      <UltimosLancamentos />
    </AppContainer>
  )
}

export default App;
