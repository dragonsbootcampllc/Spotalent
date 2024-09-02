// import FilterSidebar from "../Components/Bars/FliterSidebar";
// import JobDisplayCard, { JobDisplayCardProps } from "../Components/Cards/JobDisplayCard";
import { Alert } from "@lemonsqueezy/wedges";

export default function Home() {
  // const title: string = "Available Jobs";

  return (
    <div className="flex pl-12 gap-5 py-12 w-full">
      <Alert color="error">You're awesome!</Alert>
      <Alert color="gray">Faisal is awesome!</Alert>
      <Alert color="info">Nageh is P***!</Alert>
      <Alert color="primary">You're awesome!</Alert>
      <Alert color="success">You're awesome!</Alert>
      <Alert color="warning">You're awesome!</Alert>
    </div>
  );
}

