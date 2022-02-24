import { screen } from '@testing-library/react';
import { SectionBackground } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<SectionBackground />', () => {
  it('should render with background dark and match snapshot', () => {
    const { container } = renderTheme(
      <SectionBackground background={true}>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(container.firstChild).toHaveStyle({
      background: theme.colors.primaryColor,
    });
    expect(container).toMatchSnapshot();
  });

  it('should render with background light and match snapshot', () => {
    const { container } = renderTheme(
      <SectionBackground>
        <h1>Children</h1>
      </SectionBackground>,
    );
    expect(container.firstChild).toHaveStyle({
      background: theme.colors.white,
    });
    expect(container).toMatchSnapshot();
  });
});
