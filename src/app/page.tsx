import Image from "next/image";

function Page() {
  return (
    <div className="h-screen bg-[#FFD166] flex flex-col gap-10 justify-center items-center">
      <div className="relative w-[6rem] h-[6rem]">
        <Image src="Logo.svg" alt="logo" fill className="absolute" />
      </div>
      <p className="text-[#112A46] text-2xl opacity-50 font-semibold">
        Nothing to see here for now 🙈
      </p>
    </div>
  );
}

export default Page;
