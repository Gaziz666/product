import { Button } from './Button';
import { render, screen } from '@testing-library/react';

describe('Button', () => {
    test('render', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
});
