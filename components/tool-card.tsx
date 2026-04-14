import Link from 'next/link';

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
  icon?: string;
}

export default function ToolCard({ title, description, href, icon }: ToolCardProps) {
  return (
    <Link href={href}>
      <div className="border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary transition-all duration-200 cursor-pointer bg-card h-full">
        {icon && <div className="text-3xl mb-3">{icon}</div>}
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="text-primary font-medium text-sm flex items-center gap-2">
          Start <span>→</span>
        </div>
      </div>
    </Link>
  );
}
