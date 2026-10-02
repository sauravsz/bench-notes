import type { DiagramKind } from "@/data/types";
import { JudiciaryHierarchyDiagram } from "./judiciary-hierarchy";
import { ContractFormationDiagram } from "./contract-formation";
import { ContractClassificationDiagram } from "./contract-classification";
import { FreeConsentMapDiagram } from "./free-consent-map";
import { DischargeRemediesDiagram } from "./discharge-remedies";
import { CompanyTypesMapDiagram } from "./company-types-map";
import { PdiContextGridDiagram } from "./pdi-context-grid";
import { MintoPyramidDiagram } from "./minto-pyramid";
import { ScqaFrameworkDiagram } from "./scqa-framework";
import { RvuModelDiagram } from "./rvu-model";
import { StressMindsetGridDiagram } from "./stress-mindset-grid";
import { GeometricStageSpaceDiagram } from "./geometric-stage-space";
import { KanoModelDiagram } from "./kano-model";
import { TaguchiLossDiagram } from "./taguchi-loss";
import { HouseOfQualityDiagram } from "./house-of-quality";
import { FmeaMatrixDiagram } from "./fmea-matrix";
import { SpcControlChartDiagram } from "./spc-control-chart";
import { DemingPdcaDiagram } from "./deming-pdca";
import { DmaicRoadmapDiagram } from "./dmaic-roadmap";
import { CoqPafModelDiagram } from "./coq-paf-model";
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
      case "pdi-context-grid":
        return <PdiContextGridDiagram />;
      case "minto-pyramid":
        return <MintoPyramidDiagram />;
      case "scqa-framework":
        return <ScqaFrameworkDiagram />;
      case "rvu-model":
        return <RvuModelDiagram />;
      case "stress-mindset-grid":
        return <StressMindsetGridDiagram />;
      case "geometric-stage-space":
        return <GeometricStageSpaceDiagram />;
      case "kano-model":
        return <KanoModelDiagram />;
      case "taguchi-loss":
        return <TaguchiLossDiagram />;
      case "house-of-quality":
      case "tqm-house":
        return <HouseOfQualityDiagram />;
      case "fmea-matrix":
        return <FmeaMatrixDiagram />;
      case "spc-control-chart":
        return <SpcControlChartDiagram />;
      case "deming-pdca":
        return <DemingPdcaDiagram />;
      case "dmaic-roadmap":
        return <DmaicRoadmapDiagram />;
      case "coq-paf-model":
        return <CoqPafModelDiagram />;
      default:
        return null;
    }
  };

  return (
    <div className="my-6 avoid-break diagram-container">
      {title ? (
        <p className="mb-2 font-sans text-xs font-semibold uppercase tracking-[0.14em] text-muted">
          {title}
        </p>
      ) : null}
      {renderDiagram()}
      {caption ? (
        <p className="mt-1 text-center font-serif text-xs font-semibold text-muted">
          {caption}
        </p>
      ) : null}
    </div>
  );
}
