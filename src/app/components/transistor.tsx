import clsx from 'clsx';

function Connectors({
  count,
  contactOnBottom
}: {
  count: number;
  contactOnBottom: boolean;
}) {
  return (
    <div
      className={clsx('mx-auto flex w-60 flex-row px-5', {
        'justify-between': count !== 1,
        'justify-center': count === 1
      })}
    >
      {Array.from(Array(count), (x, i) => i).map((i: number) => (
        <div className="relative h-10 w-10" key={i}>
          <div className="absolute left-1/2 h-10 w-2 -translate-x-1/2 bg-slate-400"></div>
          <div
            className={clsx(
              'absolute left-1/2 h-2 w-10 -translate-x-1/2 bg-slate-400',
              { 'bottom-0': contactOnBottom, 'top-0': !contactOnBottom }
            )}
          ></div>
        </div>
      ))}
    </div>
  );
}

// Will implement versions as needed
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Transistor({ version }: { version: string }) {
  return (
    <figure
      role="img"
      aria-label="A diagram of a transistor."
      className="w-full"
    >
      <Connectors count={3} contactOnBottom />
      <div className="relative mx-auto h-32 w-80 bg-secondary">
        <div className="absolute left-0 top-0 h-20 w-20 translate-x-10 border-x-8 border-b-8 border-error bg-primary"></div>
        <div className="absolute right-0 top-0 h-20 w-20 -translate-x-10 border-x-8 border-b-8 border-error bg-primary"></div>
        <div className="absolute left-1/2 top-0 hidden h-10 w-24 -translate-x-1/2 border-b-8 border-error bg-primary"></div>
      </div>
      <Connectors count={1} contactOnBottom={false} />
    </figure>
  );
}
