import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
  icon?: string;
}

export default function ToolCard({ title, description, href, icon }: ToolCardProps) {
  return (
    <Link href={href} className="group block h-full no-underline text-inherit">
      <div className="flex h-full min-h-[220px] flex-col justify-between rounded-3xl border border-border/70 bg-white p-6 md:p-7 shadow-lg transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl" style={{ borderRadius: 'var(--card-radius)', padding: 'var(--space-md)', boxShadow: 'var(--shadow-default)' }}>
        <div style={{ marginBottom: 'var(--space-lg)' }}>
          {icon && (
            <div style={{ fontSize: 'var(--text-hero)' }}>
              {icon}
            </div>
          )}

          <div>
            <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3" style={{ fontSize: 'var(--text-card-title)', lineHeight: 'var(--heading-line-height)' }}>
              {title}
            </h3>
            <p className="text-sm md:text-base text-foreground/70 leading-relaxed" style={{ fontSize: 'var(--font-size-base)', lineHeight: 'var(--line-height-base)' }}>
              {description}
            </p>
          </div>
        </div>

        <div style={{ paddingTop: 'var(--space-md)', borderTop: '1px solid var(--surface-border-subtle)' }}>
          <Button variant="link" className="group-hover:text-primary/90 transition-all">
            Learn more →
          </Button>
        </div>
      </div>
    </Link>
  );
}
