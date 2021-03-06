import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" />);
    const heading = screen.getByRole('heading', { name: 'Olá mundo' });
    expect(heading.firstChild).toHaveAttribute('href', '#target');
  });

  it('should render image logo', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" srcImg="img.jpg" />);
    const heading = screen.getByRole('heading', { name: 'Olá mundo' });
    expect(heading.firstChild.firstChild).toHaveAttribute('src', 'img.jpg');
  });

  it('should match snapshot', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" srcImg="img.jpg" />);
    const heading = screen.getByRole('heading', { name: 'Olá mundo' });
    expect(heading).toMatchSnapshot();
  });
});
