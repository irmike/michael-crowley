import { Disclosure } from '@headlessui/react';
import { updateData } from '@/data/updateData';
import Update from './Update';
import SectionWithHeader from "@/components/common/SectionWithHeader";

export default function UpdateLog() {
  // Sort updates by date descending
  const sortedUpdates = [...updateData].sort((a, b) => new Date(b.date) - new Date(a.date));
  const [mostRecent, ...pastUpdates] = sortedUpdates;
  
  return (
    <SectionWithHeader sectionTitle="Recent Updates" variant={"invertedSurfaceContent"}>
      <Update update={mostRecent} />
      {pastUpdates.length > 0 && (
        <Disclosure>
          {({ open }) => (
            <section
              className="app-inv-card bg-white/10 rounded-md"
              data-testid="update-log-past-updates-container"
            >
              <Disclosure.Button className="app-inv-disclosure-btn hover:bg-white/20" data-testid="update-log-past-updates-toggle">
                <span data-testid="update-log-past-updates-toggle-label">{open ? 'Hide Past Updates' : 'Show More Updates'}</span>
                <span className="ml-2 font-semibold" data-testid="update-log-past-updates-toggle-expand">{open ? 'hide' : 'expand'}</span>
              </Disclosure.Button>
              <Disclosure.Panel className="mt-1" data-testid="update-log-past-updates-panel">
                {pastUpdates.map(update => (
                  <Update key={update.id} update={update} />
                ))}
              </Disclosure.Panel>
            </section>
          )}
        </Disclosure>
      )}
    </SectionWithHeader>
  );
}
