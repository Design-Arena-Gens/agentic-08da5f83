interface TimelineItem {
  title: string;
  description: string;
  emphasis?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="timeline">
      {items.map(({ title, description, emphasis }) => (
        <article className="timeline-item" key={title}>
          <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.35rem' }}>{title}</h3>
          <p style={{ color: 'var(--text-secondary)' }}>
            {description}{' '}
            {emphasis ? <span className="tag-highlight">{emphasis}</span> : null}
          </p>
        </article>
      ))}
    </div>
  );
}
