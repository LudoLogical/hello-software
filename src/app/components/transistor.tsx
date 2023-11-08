import clsx from 'clsx';

function Electron({
  isHole,
  positioning
}: {
  isHole?: boolean;
  positioning: string;
}) {
  return (
    <div
      className={clsx(
        'absolute flex h-5 w-5 items-center justify-center rounded-full font-black leading-5',
        {
          'bg-neutral text-base-content': !isHole,
          'border-2 border-neutral text-neutral': isHole
        },
        positioning
      )}
    >
      {isHole ? '+' : '-'}
    </div>
  );
}

function YellowRegion({
  version,
  positioning
}: {
  version: string;
  positioning: string;
}) {
  return (
    <div
      className={clsx(
        'absolute h-20 w-20 bg-primary',
        {
          'border-x-8 border-b-8 border-error': version !== 'basic'
        },
        positioning
      )}
    >
      {version !== 'basic' && (
        <>
          <Electron positioning="top-3 left-2" />
          <Electron positioning="top-10 left-3" />
          <Electron positioning="top-6 left-9" />
        </>
      )}
    </div>
  );
}

function BlueRegion({ version }: { version: string }) {
  return (
    <div className="relative mx-auto h-32 w-80 bg-secondary">
      <YellowRegion
        version={version}
        positioning="left-0 top-0 translate-x-10"
      />
      <YellowRegion
        version={version}
        positioning="right-0 top-0 -translate-x-10"
      />
      {version === 'flow' && (
        <div className="absolute left-1/2 top-0 h-10 w-24 -translate-x-1/2 border-b-8 border-error bg-primary"></div>
      )}
      {version !== 'basic' && (
        <>
          <Electron isHole positioning="left-2 top-2" />
          <Electron isHole positioning="right-2 top-2" />
          <Electron isHole positioning="left-3 top-10" />
          <Electron isHole positioning="right-3 top-10" />
          <Electron isHole positioning="left-2 top-20" />
          <Electron isHole positioning="right-2 top-20" />
          <Electron isHole positioning="left-10 top-24" />
          <Electron isHole positioning="right-10 top-24" />
          <Electron isHole positioning="left-20 top-24" />
          <Electron isHole positioning="right-20 top-24" />
          <Electron isHole positioning="left-32 top-24" />
          <Electron isHole positioning="right-32 top-24" />
          <Electron isHole positioning="left-32 top-10" />
          <Electron isHole positioning="right-32 top-10" />
          <Electron isHole positioning="left-1/2 top-2 -translate-x-1/2" />
          <Electron isHole positioning="left-1/2 top-16 -translate-x-1/2" />
        </>
      )}
    </div>
  );
}

function Connectors({
  count,
  contactOnBottom
}: {
  count: number;
  contactOnBottom?: boolean;
}) {
  return (
    <div
      className={clsx('mx-auto flex w-60 flex-row px-5', {
        'justify-between': count !== 1,
        'justify-center': count === 1
      })}
    >
      {/* Loops `count` times */}
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

export default function Transistor({ version }: { version: string }) {
  return (
    <figure
      role="img"
      aria-label="A diagram of a transistor."
      className="w-full"
    >
      <Connectors count={3} contactOnBottom />
      <BlueRegion version={version} />
      <Connectors count={1} />
    </figure>
  );
}
