import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Input } from "../ui/input";

export const Search = () => {
  return <div className='relative'>
    <Input
      type='search'
      placeholder='Search for blocks, accounts, transactions, programs, and tokens'
      className='w-full pl-10 pr-4 py-2 rounded-md'
    />
    <MagnifyingGlassIcon className='absolute left-3 top-2.5 h-5 w-5 text-gray-400' />
  </div>;
}