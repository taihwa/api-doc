import { json, LoaderFunctionArgs } from "@remix-run/node";
import ApiDetailDialog from "~/routes/api-detail.$apiId/api-detail-dialog";
import ApiList from "~/components/app/api/api-list";

interface ApiDetailPageProps {}

export async function loader({ params }: LoaderFunctionArgs) {
  console.log(params);
  return json({});
}
const ApiDetailPage = ({}: ApiDetailPageProps) => {
  return (
    <div className="flex h-screen items-center justify-center">
      <ApiList />
      <ApiDetailDialog />
    </div>
  );
};
export default ApiDetailPage;
