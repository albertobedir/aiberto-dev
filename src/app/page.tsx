import Image from "next/image";

function Page() {
  return (
    <div className="flex min-h-screen ">
      <div className="relative w-[10rem] h-[10rem] m-auto">
        <Image
          src={"./Logo.svg"}
          alt="logo"
          fill
          draggable={false}
          className="absolute neon-effect"
        />
      </div>
    </div>
  );
}

export default Page;
