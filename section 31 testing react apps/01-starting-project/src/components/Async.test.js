import {render, screen} from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
    test('renders posts if reuqest succeeds', async () => {
        render(<Async />);

        // if only getByRole and multiple items, it would fail
        // const listItemElements = screen.getAllByRole('listitem'); // would fail because there are no items yet when first load (async)
        const listItemElements = await screen.findAllByRole('listitem'); // findxxx fill returns a promise that resolves when the elements are found
        expect(listItemElements).not.toHaveLength(0);
    })
})