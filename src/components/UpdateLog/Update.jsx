import { Disclosure } from '@headlessui/react';

export default function Update({ update }) {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="border border-[--border] rounded bg-white/20 mb-1 p-2" data-testid="update-container">
          <Disclosure.Button
            className="flex flex-col items-start w-full text-left py-1 px-2 rounded bg-transparent hover:bg-white/30 transition"
            data-testid="update-disclosure-button"
          >
            <div className="flex items-center justify-between w-full" data-testid="update-header">
              <div>
                <span className="font-semibold text-base" data-testid="update-title">{update.title}</span>
                <span className="ml-2 text-xs text-[#111827]" data-testid="update-date">{update.date}</span>
              </div>
              <span className="ml-2 text-accent font-semibold" data-testid="update-expand-toggle">{open ? 'hide' : 'expand'}</span>
            </div>
            {update.description && (
              <div className="mb-2 px-2 py-1 font-semibold italic bg-white/30 rounded text-[#111827]" data-testid="update-description">
                {update.description}
              </div>
            )}
          </Disclosure.Button>
          <Disclosure.Panel className="mt-1 text-sm" data-testid="update-details-panel">
            <ul className="list-disc list-inside text-[#111827]" data-testid="update-details-list">
              {update.details.map((detail, idx) => (
                <li key={idx} className="mb-0.5" data-testid={`update-detail-${idx}`}>{detail}</li>
              ))}
            </ul>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
