import { type ReactNode } from 'react';
import Link from 'next/link';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ href, children }: { href?: string; children?: ReactNode }) => (
      <Link href={href!} className="font-bold text-secondary no-underline">
        {children}
      </Link>
    ),
    strong: ({ children }: { children?: ReactNode }) => (
      <strong className="font-extrabold">{children}</strong>
    ),
    Hint: ({ children }: { children: ReactNode }) => (
      <span
        className="badge badge-primary badge-lg tooltip"
        data-tip={children}
      >
        <span className="text-primary-content">?</span>
      </span>
    ),
    ...components
  };
}
