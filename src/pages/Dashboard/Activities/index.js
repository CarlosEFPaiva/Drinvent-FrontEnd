import ActivitiesDashboard from "../../../components/Dashboard/Activities";
import { ActivityInfoProvider } from "../../../contexts/ActivitiesInfoContext";

export default function Activities() {
  return (
    <ActivityInfoProvider>
      <ActivitiesDashboard />
    </ActivityInfoProvider>
  );
}
