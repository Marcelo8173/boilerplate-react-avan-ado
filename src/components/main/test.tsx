import { render, screen } from '@testing-library/react'
import Main from './index';

describe('<Main/>', () => {
    it('should render the heading', () => {
        render(<Main />);

        expect(
            screen.getByRole('heading', { name: /react avançado/i })
        ).toBeInTheDocument
    });

    it('should render color correct', () => {
        const { container } = render(<Main />);

        expect(container.firstChild).toHaveStyle({ 'background': '#06092b' });
    })
})