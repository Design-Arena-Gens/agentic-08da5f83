interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({ eyebrow, title, subtitle, align = 'left' }: SectionHeaderProps) {
  return (
    <header style={{ textAlign: align }}>
      <p className="heading-accent">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="subtitle" style={{ marginInline: align === 'center' ? 'auto' : undefined }}>{subtitle}</p> : null}
    </header>
  );
}
