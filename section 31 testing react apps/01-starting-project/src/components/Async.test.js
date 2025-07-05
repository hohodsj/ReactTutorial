import {render, screen} from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
    test('renders posts if reuqest succeeds', async () => {
        window.fetch = jest.fn(); // jest.fn() creates a mock function
        // mock the fetch function to return a resolved promise with the expected data
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First Post'}]
        });
        render(<Async />);

        // if only getByRole and multiple items, it would fail
        // const listItemElements = screen.getAllByRole('listitem'); // would fail because there are no items yet when first load (async)
        const listItemElements = await screen.findAllByRole('listitem'); // findxxx returns a promise that resolves when the elements are found
        expect(listItemElements).not.toHaveLength(0);
    })
})