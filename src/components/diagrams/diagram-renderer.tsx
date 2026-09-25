import type { DiagramKind } from "@/data/types";
import { JudiciaryHierarchyDiagram } from "./judiciary-hierarchy";
import { ContractFormationDiagram } from "./contract-formation";
import { ContractClassificationDiagram } from "./contract-classification";
import { FreeConsentMapDiagram } from "./free-consent-map";
import { DischargeRemediesDiagram } from "./discharge-remedies";
import { CompanyTypesMapDiagram } from "./company-types-map";

export function DiagramRenderer({
  kind,
  title,
  caption,
}: {
  kind: DiagramKind;
  title?: string;
  caption?: string;
}) {
  const renderDiagram = () => {
    switch (kind) {
      case "judiciary-hierarchy":
        return <JudiciaryHierarchyDiagram />;
      case "contract-formation":
        return <ContractFormationDiagram />;
      case "contract-classification":
        return <ContractClassificationDiagram />;
      case "free-consent":
        return <FreeConsentMapDiagram />;
      case "discharge-remedies":
        return <DischargeRemediesDiagram />;
      case "company-types":
        return <CompanyTypesMapDiagram />;
      default:
        return null;
    }
  };

  return (
    <div className="my-6">
      {title ? (
        <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-muted">
          {title}
        </p>
      ) : null}
      {renderDiagram()}
      {caption ? (
        <p className="mt-1 text-center font-serif text-xs italic text-muted">
          {caption}
        </p>
      ) : null}
    </div>
  );
}
