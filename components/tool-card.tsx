import Link from 'next/link';

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
  icon?: string;
}

export default function ToolCard({ title, description, href, icon }: ToolCardProps) {
  return (
    <Link href={href} className="group block h-full">
      <div className="h-full rounded-xl border border-border/70 bg-card/90 p-7 md:p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
        {icon && (
          <div className="text-5xl mb-5">
            {icon}
          </div>
        )}

        <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
          {title}
        </h3>

        <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
          {description}
        </p>

        <div className="mt-6 pt-5 border-t border-border/50">
          <span className="text-primary font-semibold text-sm md:text-base group-hover:underline transition-all">
            Learn More →
          </span>
        </div>
      </div>
    </Link>
  );
}
