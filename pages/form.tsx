

import {
    getAllUsers,
    UserProps,
    getUserCount,
    getFirstUser,addUser
  } from '@/lib/api/user';


export default async function CustomForm() {


const clickHandler = () => addUser('Tedo', 'Testowy', 'mail@testy.pl')

  return (
    <div className="h-screen w-full flex justify-center items-center bg-black">
     
      <h1 className="text-2xl font-light text-white">
       FORM
      </h1>

      <button
          onClick={clickHandler }
          className="rounded-md bg-gradient-to-tr from-slate-800 to-slate-700 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Bubu
        </button>
    </div>
  );
}
