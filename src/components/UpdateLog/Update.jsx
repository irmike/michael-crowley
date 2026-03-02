import { Disclosure } from '@headlessui/react';

export default function Update({ update }) {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="border border-[--border] rounded bg-white/20 mb-1 p-2">
          <Disclosure.Button className="flex items-center justify-between w-full text-left py-1 px-2 rounded bg-transparent hover:bg-white/30 transition">
            <div>
              <span className="font-semibold text-base">{update.title}</span>
              <span className="ml-2 text-xs text-[#111827]">{update.date}</span>
            </div>
            <span className="ml-2 text-accent font-semibold">{open ? 'hide' : 'expand'}</span>
          </Disclosure.Button>
          <Disclosure.Panel className="mt-1 text-sm">
            {update.description && (
              <div className="mb-2 px-2 py-1 font-semibold italic bg-white/30 rounded text-[#111827]">
                {update.description}
              </div>
            )}
            <ul className="list-disc list-inside text-[#111827]">
              {update.details.map((detail, idx) => (
                <li key={idx} className="mb-0.5">{detail}</li>
              ))}
            </ul>
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
