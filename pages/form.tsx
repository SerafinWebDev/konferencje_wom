import { Suspense } from 'react';
import {
    getAllUsers,
    UserProps,
    getUserCount,
    getFirstUser,
    addUser
  } from '@/lib/api/user';

import {CustomForm} from "@/components/form";

export default function CustomFormPage() {

    const adding = () =>  addUser('Tedo', 'Testowy', 'mail@testy.pl');


  return (
    <div className="h-screen w-full flex justify-center items-center bg-black">
      <CustomForm adding={adding}/>
    </div>
  );
}
