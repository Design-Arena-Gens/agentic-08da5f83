interface RegionCardProps {
  title: string;
  subtitle: string;
  description: string;
  bulletPoints: string[];
}

export function RegionCard({ title, subtitle, description, bulletPoints }: RegionCardProps) {
  return (
    <div className="isometric-card">
      <div className="chip-row" style={{ marginBottom: '1rem' }}>
        <span className="chip">{subtitle}</span>
      </div>
      <h3 style={{ fontSize: '1.35rem', fontWeight: 600, marginBottom: '0.85rem' }}>{title}</h3>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>{description}</p>
      <ul className="list-inline">
        {bulletPoints.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
