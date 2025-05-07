'use server'
import { Suspense } from 'react'

import {CustomForm} from "@/components/form";

export default  function CustomFormPage() {



  return (
    <div className="h-screen w-full flex justify-center items-center bg-black">
      <Suspense fallback={<div>Loading...</div>}>
      <CustomForm />
    </Suspense>
    </div>
  );
}
