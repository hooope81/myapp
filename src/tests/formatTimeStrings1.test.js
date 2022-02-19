import {render} from '@testing-library/react';
import ForTest from '../forTest';

describe('we want to test formatTimeStrings', ()=> {
    it ('snapshot', ()=> {
        const view = render(<ForTest />);
        expect(view).toMatchSnapshot();
    })
} )