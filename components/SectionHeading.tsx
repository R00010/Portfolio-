import { ReactNode } from 'react';

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  extra?: ReactNode;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  extra
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`mb-10 max-w-3xl ${alignment}`}>
      <p className="mb-4 inline-flex rounded-full border border-black/10 bg-black/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-black/70">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-black leading-tight tracking-tight text-black md:text-5xl">
        {title}
      </h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-black/70 md:text-lg">{description}</p> : null}
      {extra ? <div className="mt-6">{extra}</div> : null}
    </div>
  );
}
