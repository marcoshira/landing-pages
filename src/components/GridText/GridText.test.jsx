import { screen } from '@testing-library/react';
import { GridText } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import mock from './mock';

describe('<GridText />', () => {
  it('should render', () => {
    const { container } = renderTheme(<GridText {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render without background', () => {
    const { container } = renderTheme(<GridText {...mock} background={undefined} />);
    expect(container).toMatchSnapshot();
  });
});