import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
export default function LanguageSelector({
  handleLanguageSelection,
}: {
  handleLanguageSelection: (value: string) => void
}) {
  const handleValueChange = (value: string) => {
    handleLanguageSelection(value)
  }

  return (
    <>
      <Select onValueChange={handleValueChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="C">C</SelectItem>
          <SelectItem value="C++">C++</SelectItem>
          <SelectItem value="Go">Go</SelectItem>
          <SelectItem value="Java">Java</SelectItem>
          <SelectItem value="Javascript">Javascript</SelectItem>
          <SelectItem value="Python">Python</SelectItem>
        </SelectContent>
      </Select>
    </>
  )
}
