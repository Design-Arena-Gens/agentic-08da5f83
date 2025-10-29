import { render, screen } from '@testing-library/react';
import { SectionHeader } from '../SectionHeader';

describe('SectionHeader', () => {
  it('renders eyebrow, title and subtitle with correct alignment', () => {
    render(
      <SectionHeader
        eyebrow="Test Eyebrow"
        title="Main Title"
        subtitle="Supporting copy"
        align="center"
      />
    );

    expect(screen.getByText('Test Eyebrow')).toBeInTheDocument();
    const title = screen.getByRole('heading', { level: 2 });
    expect(title).toHaveTextContent('Main Title');
    expect(screen.getByText('Supporting copy')).toBeInTheDocument();
    expect(title.parentElement).toHaveStyle({ textAlign: 'center' });
  });
});
