import { Disclosure } from '@headlessui/react';
import { updateData } from '../../data/updateData';
import Update from './Update';

export default function UpdateLog() {
  // Sort updates by date descending
  const sortedUpdates = [...updateData].sort((a, b) => new Date(b.date) - new Date(a.date));
  const [mostRecent, ...pastUpdates] = sortedUpdates;

  return (
    <section
      className="update-log-container mt-12 rounded-lg border-2 border-[--border] text-[#111827] shadow-md p-4 sm:p-5"
      style={{ background: 'var(--accent-strong)' }}
      data-testid="update-log-container"
    >
      <h2 className="mb-2 text-lg font-bold" data-testid="update-log-title">Recent Updates</h2>
      <div className="border border-[--border] rounded-md bg-white/10 mb-2 p-2" data-testid="update-log-most-recent">
        <Update update={mostRecent} />
      </div>
      {pastUpdates.length > 0 && (
        <Disclosure>
          {({ open }) => (
            <div className="border border-[--border] rounded-md bg-white/10" data-testid="update-log-past-updates-container">
              <Disclosure.Button className="flex items-center gap-2 text-[#111827] font-semibold py-1 px-2 rounded-md bg-transparent hover:bg-white/20 transition mb-1" data-testid="update-log-past-updates-toggle">
                <span data-testid="update-log-past-updates-toggle-label">{open ? 'Hide Past Updates' : 'Show More Updates'}</span>
                <span className="ml-2 text-accent font-semibold" data-testid="update-log-past-updates-toggle-expand">{open ? 'hide' : 'expand'}</span>
              </Disclosure.Button>
              <Disclosure.Panel className="mt-1" data-testid="update-log-past-updates-panel">
                {pastUpdates.map(update => (
                  <Update key={update.id} update={update} />
                ))}
              </Disclosure.Panel>
            </div>
          )}
        </Disclosure>
      )}
    </section>
  );
}
