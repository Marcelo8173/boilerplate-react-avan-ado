import * as S from './styles';

const Main = () => {
    return (
        <S.Wrapper>
            <S.Logo src="/img/logo.svg" alt="Imagem de um atomo e React Avançado escrito ao lado."/>
            <S.Title>React avançado</S.Title>
            <S.Description>TypeScript, ReactJS, NextJS e Styled componet</S.Description>
            <S.Ilustration src="/img/hero-illustration.svg" alt="um desenvolvedor de frente para tela com 
            um codigo"/>
        </S.Wrapper>
    );
}

export default Main;