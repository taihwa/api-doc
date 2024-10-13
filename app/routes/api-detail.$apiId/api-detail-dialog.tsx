import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { useEffect, useState } from "react";
import { useNavigate } from "@remix-run/react";
import { Badge } from "~/components/ui/badge";
import { DialogDescription } from "@radix-ui/react-dialog";

interface ApiDetailDialogProps {}

const ApiDetailDialog = ({}: ApiDetailDialogProps) => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) {
      console.log(history.length);
      // history.back();
      navigate("/");
    }
  }, [open]);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className={"flex gap-2"}>
            <Badge>POST</Badge>
            <p>{`/search/{id}`}</p>
          </DialogTitle>
          <DialogDescription>검색합니다.</DialogDescription>
        </DialogHeader>
        <div></div>
      </DialogContent>
    </Dialog>
  );
};
export default ApiDetailDialog;
