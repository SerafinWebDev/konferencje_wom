'use server'


import {CustomForm} from "@/components/form";

export default async function CustomFormPage() {



  return (
    <div className="h-screen w-full flex justify-center items-center bg-black">
     
      <CustomForm />
    </div>
  );
}
