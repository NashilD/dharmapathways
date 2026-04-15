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
      <div className="group h-full p-12 md:p-14 border border-border rounded-lg bg-card hover:bg-card/95 hover:border-primary/30 hover:shadow-lg transition-all duration-200 flex flex-col">
        {/* Icon - Top Centered with Breathing Room */}
        {icon && (
          <div className="text-8xl mb-8 text-center">
            {icon}
          </div>
        )}

        {/* Title - Increased Spacing Below */}
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
          {title}
        </h3>

        {/* Description - Better Line Height and Flex Space */}
        <p className="text-base md:text-lg text-foreground/70 mb-8 leading-relaxed text-center flex-grow">
          {description}
        </p>

        {/* CTA Link - Intentional Spacing */}
        <div className="text-center pt-6 border-t border-border/40">
          <span className="text-primary font-semibold text-base group-hover:underline transition-all">
            Learn More →
          </span>
        </div>
      </div>
    </Link>
  );
}
