import { text, withKnobs } from '@storybook/addon-knobs';
import Main from '.';

export default {
    title: 'Main',
    component: Main,
    decorators: [withKnobs]
}

export const Basica = () => {
    return (
        <Main
            title={text('title', 'Teste de React Avançado')}
            description={text('description', 'teste de descrição')}
        />
    )
}