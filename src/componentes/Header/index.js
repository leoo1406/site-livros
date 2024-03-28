import Logo from '../Logo';
import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    background-color: #fff;
`

function Header () {
    return (
      <HeaderContainer>
        <Logo/>
        <OpcoesHeader/>              {/* OpcoesHeader com barra no final = fechamento de chave + simplificado*/}
        <IconesHeader/>
      </HeaderContainer>
    )
}

export default Header;
