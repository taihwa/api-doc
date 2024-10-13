import { Badge } from "~/components/ui/badge";

interface APiListItemProps {
  id: string;
  method: string;
  url: string;
  description: string;
}

const APiListItem = ({ method, url, id, description }: APiListItemProps) => {
  return (
    <div
      className={
        "flex gap-2 border border-input rounded-md px-4 py-2 shadow-sm"
      }
    >
      <Badge>{method}</Badge>
      <span>{url}</span>
      <span>{`(${description})`}</span>
    </div>
  );
};
export default APiListItem;
