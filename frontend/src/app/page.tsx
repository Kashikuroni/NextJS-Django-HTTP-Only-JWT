"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="flex flex-col bg-white w-2/3 justify-center border border-gray-300 px-10 py-5 rounded-xl">
        <h1 className="text-2xl text-nowrap font-bold">
          Welcome to the Next.js + Django Base Template!
        </h1>
        <h3 className="text-xl">
          If you see this screen, your frontend and backend are working
          correctly. Start adding your application functionality. 
        </h3>
        <h2 className="text-2xl">Happy coding!</h2>
        <h2 className="text-xl font-bold mt-4">Helpful Links</h2>
        <div className="flex justify-between">
          <ul className="ml-7 list-disc ">
            <li>
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Next.js Documentation
              </a>
            </li>
            <li>
              <a
                href="https://docs.djangoproject.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Django Documentation
              </a>
            </li>
            <li>
              <a
                href="https://www.django-rest-framework.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                REST Framework Documentation
              </a>
            </li>
          </ul>
          <button onClick={() => router.push("/auth/profile")} className="px-10 py-3 rounded-xl bg-blue-500 font-bold hover:bg-blue-700 hover:text-white">Check Profile</button>
        </div>
      </div>
    </div>
  );
}
