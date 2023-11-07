import { type ReactNode } from 'react';

export default function Hint({ children }: { children: ReactNode }) {
  return (
    <span className="badge badge-primary badge-lg tooltip" data-tip={children}>
      <span className="text-primary-content">?</span>
    </span>
  );
}
