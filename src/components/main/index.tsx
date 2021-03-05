import * as S from './styles';

const Main = ({
    title = 'React avançado',
    description = 'TypeScript, ReactJS, NextJS e Styled componet'
}) => {
    return (
        <S.Wrapper>
            <S.Logo src="/img/logo.svg" alt="Imagem de um atomo e React Avançado escrito ao lado."/>
            <S.Title>{title}</S.Title>
            <S.Description>{description}</S.Description>
            <S.Ilustration src="/img/hero-illustration.svg" alt="um desenvolvedor de frente para tela com 
            um codigo"/>
        </S.Wrapper>
    );
}

export default Main;