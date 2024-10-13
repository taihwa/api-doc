import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Form, Link } from "@remix-run/react";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";
import ApiListItem from "~/components/app/api/api-list-item";

interface ApiListProps {}

const ApiList = ({}: ApiListProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>ShoppingMall API 명세서</CardTitle>
        <CardDescription>
          ShoppingMall API는 쇼핑몰의 상품과 고객 데이터를 관리하고 조회하기
          위한 RESTful API 입니다.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Base URL: <span>https://api.shoppingmall.com/v1</span>
        </p>
        <div className={"my-4"}>
          <Form className={"flex gap-2"}>
            <Input type={"text"} name={"q"} />
            <Button type={"submit"}>검색</Button>
          </Form>
        </div>
        <ScrollArea className={"h-[300px]"}>
          <div className={"flex flex-col gap-2"}>
            <Link to={"/api-detail/11"}>
              <ApiListItem
                id={"1"}
                method={"GET"}
                url={`/back-api/customers/{id}`}
                description={"고객 조회"}
              />
            </Link>
            <Link to={"/api-detail/22"}>
              <ApiListItem
                id={"1"}
                method={"GET"}
                url={`/back-api/customers/{id}`}
                description={"고객 조회"}
              />
            </Link>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};
export default ApiList;
