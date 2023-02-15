import { useEffect } from "react";

interface Props {
  api: any;
}

export default function Api({ api }: Props) {
  return;
  <>
    <div>{api.API}</div>
    <div>{api.Description}</div>;
  </>;
}
