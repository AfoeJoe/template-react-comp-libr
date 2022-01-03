import Button from './Button';
import React from 'react';
import { render } from '@testing-library/react';

describe('Button', () => {
	test('renders the button component', () => {
		render(<Button label='2' />);
	});
});
