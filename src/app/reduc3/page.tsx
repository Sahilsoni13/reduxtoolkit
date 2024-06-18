import React from 'react'
import Reduc from "@/app/components/reduc/page"
import Reduc2 from "@/app/components/reduc2/page"
import { Theme } from '@radix-ui/themes';
import { ThemeProvider } from 'next-themes';
const Page = () => {
  return (
    <div>
<Reduc/>
<Reduc2/>
    </div>
  )
}

export default Page