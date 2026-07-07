import Container from "@/components/Container";
import ComplianceCard from "@/components/ComplianceCard";

const complianceItems = [
  {
    tag: "SOC 2 Type II",
    description: "Independently audited controls for enterprise security.",
  },
  {
    tag: "GDPR",
    description: "Data handling aligned with European privacy regulations.",
  },
  {
    tag: "HIPAA",
    description:
      "Support for healthcare-grade workflows and sensitive data environments.",
  },
  {
    tag: "Data residency",
    description:
      "Region-controlled processing with no cross-border transfer unless explicitly required.",
  },
];

const securityItems = [
  {
    tag: "NDA & IP protection",
    description:
      "All specialists are contractually bound before any project begins.",
  },
  {
    tag: "Access controls",
    description:
      "Contributors only access the data and tasks they are assigned to.",
  },
  {
    tag: "Audit logging",
    description:
      "All actions in evaluation and annotation workflows are fully traceable.",
  },
  {
    tag: "Secure environments",
    description:
      "Compatible with restricted, enterprise, and air-gapped setups where required.",
  },
];

export default function ComplianceSection() {
  return (
    <section className="py-28">
      <Container className="flex flex-col gap-16">
        <p className="max-w-3xl text-3xl font-medium">
          <span className="text-white">AI training data is sensitive. </span>
          <span className="text-lime-200">
            We treat it with enterprise-grade security and full compliance.
          </span>
        </p>
        <div className="flex flex-wrap gap-6">
          <ComplianceCard title="Compliance" items={complianceItems} />
          <ComplianceCard title="Security practices" items={securityItems} />
        </div>
      </Container>
    </section>
  );
}
