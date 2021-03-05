import { text, withKnobs } from '@storybook/addon-knobs';
import { Meta, Story} from '@storybook/react/types-6-0';
import Main from '.';

export default {
    title: 'Main',
    component: Main,
    decorators: [withKnobs]
} as Meta;

export const Basica: Story = () => {
    return (
        <Main
            title={text('title', 'Teste de React Avançado')}
            description={text('description', 'teste de descrição')}
        />
    )
}