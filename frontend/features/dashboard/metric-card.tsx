import { Card } from "@/components/ui/card";
import type { DashboardMetric } from "@/types";

export function MetricCard({ metric }: { metric: DashboardMetric }) {
  return (
    <Card>
      <p className="text-sm font-medium text-slate-500">{metric.label}</p>
      <div className="mt-3 text-3xl font-black tracking-tight">{metric.value}</div>
      <p className="mt-2 text-sm font-semibold text-emerald-600">{metric.trend}</p>
    </Card>
  );
}
