import { Disclosure } from '@headlessui/react';

export default function Update({ update }) {
  return (
    <Disclosure>
      {({ open }) => (
        <section
          className="border rounded bg-white/20 mb-1 p-2"
          data-testid="update-container"
        >
          <Disclosure.Button
            className="app-inv-disclosure-btn hover:bg-white/30"
            data-testid="update-disclosure-button"
          >
            <div className="flex flex-wrap items-baseline gap-x-2 min-w-0">
              <span className="font-semibold text-base app-inv-text" data-testid="update-title">{update.title}</span>
              <span className="text-xs app-inv-text whitespace-nowrap" data-testid="update-date">{update.date}</span>
            </div>
            <span className="ml-2 font-semibold app-inv-text" data-testid="update-expand-toggle">{open ? 'hide' : 'expand'}</span>
          </Disclosure.Button>
          {update.description && (
            <section className="mb-2 px-2 py-1 font-semibold italic bg-white/30 rounded app-inv-text" data-testid="update-description">
              {update.description}
            </section>
          )}
          <Disclosure.Panel className="mt-1 text-sm" data-testid="update-details-panel">
            <ul className="list-disc list-inside" data-testid="update-details-list">
              {update.details.map((detail, idx) => (
                <li key={idx} className="mb-0.5 app-inv-text" data-testid={`update-detail-${idx}`}>{detail}</li>
              ))}
            </ul>
          </Disclosure.Panel>
        </section>
      )}
    </Disclosure>
  );
}
