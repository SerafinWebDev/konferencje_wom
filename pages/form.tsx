'use server'
import { Suspense } from 'react';
import {
    getAllUsers,
    UserProps,
    getUserCount,
    getFirstUser,
    addUser
  } from '@/lib/api/user';

import {CustomForm} from "@/components/form";

export default async function CustomFormPage() {

    const clickHandler = async () => await addUser('Tedo', 'Testowy', 'mail@testy.pl');


  return (
    <div className="h-screen w-full flex justify-center items-center bg-black">
      <Suspense fallback={<div>Loading...</div>}>
      <CustomForm />
    </Suspense>
    </div>
  );
}
