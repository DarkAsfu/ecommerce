import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ReusableModal({ children, title, className }) {    
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className={`${className}`} variant="outline">{title}</Button>
        </DialogTrigger>
        <DialogContent className="max-w-[660px]">
          {children}
        </DialogContent>
      </form>
    </Dialog>
  ) 
}
