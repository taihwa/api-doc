import {
  ActionFunctionArgs,
  json,
  LoaderFunctionArgs,
  MetaFunction,
} from "@remix-run/node";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { ScrollArea } from "~/components/ui/scroll-area";
import ApiListItem from "~/components/app/api/api-list-item";
import { Form, Link } from "@remix-run/react";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import ApiList from "~/components/app/api/api-list";

export const meta: MetaFunction = () => {
  return [
    { title: "API 명세서" },
    { name: "API 명세", content: "Welcome to Remix!" },
  ];
};

export function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  console.log(q);
  return json({ q });
}

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <ApiList />
    </div>
  );
}
