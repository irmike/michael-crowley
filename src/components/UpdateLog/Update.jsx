import DisclosureCard from "@/components/common/DisclosureCard";

export default function Update({ update }) {
  return (
    <DisclosureCard variant={"update"} showDescription={true} description={update.description}
                    title={update.title} subtitle={update.date}>
      <ul className="list-disc list-inside" data-testid="update-details-list">
        {update.details.map((detail, idx) => (
            <li key={idx} className="mb-0.5" data-testid={`update-detail-${idx}`}>{detail}</li>
        ))}
      </ul>
    </DisclosureCard>
  );
}
