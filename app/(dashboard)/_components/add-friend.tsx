import { Button } from "@/components/ui/button";
import {
  DialogFooter,
  DialogHeader,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export function AddFriend() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">Add Friend</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Friend</DialogTitle>
          <DialogDescription>
            You can add a friend by their username.
          </DialogDescription>
        </DialogHeader>
        <form className="content">
          <div className="flex flex-col gap-1">
            <Label htmlFor="username">Username</Label>
            <Input id="username" type="text" />
          </div>
          <DialogFooter>
            <Button>Send Friend Request</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
