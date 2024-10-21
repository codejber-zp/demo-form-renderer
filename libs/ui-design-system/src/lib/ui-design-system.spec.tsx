import { render } from '@testing-library/react';

import UiHeader from './ui-header';

describe('UiDesignSystem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiHeader />);
    expect(baseElement).toBeTruthy();
  });
});
