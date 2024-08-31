import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer.tsx"
import { Button } from "@/components/ui/button.tsx"
import { ChevronRightIcon } from "@radix-ui/react-icons"
import { useDeleteAccount } from "@/fetchHook/user.ts"

export function DeleteAccount() {
  const { mutate: deleteAccount } = useDeleteAccount()

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className="flex justify-between px-3 py-1.5 cursor-pointer">
          <label className="text-sm font-medium text-gray-700">
            Delete Account
          </label>
          <span>
            <ChevronRightIcon />
          </span>
        </div>
      </DrawerTrigger>
      <DrawerContent className="p-4 space-y-4">
        <DrawerHeader>Do you really want to delete your account?</DrawerHeader>
        <Button variant="destructive" onClick={() => deleteAccount()}>
          Delete
        </Button>
        <Button variant="outline">Cancel</Button>
      </DrawerContent>
    </Drawer>
  )
}
