import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="z-20 px-6 py-10 text-center ">
        <Image
          src="/notFound.webp"
          width={400}
          height={400}
          alt="404"
          className="max-w-[400px] mx-[auto] mb-6 w-full"
        />
        <h1 className="mt-3 mb-2">This Page is Lost in Space.</h1>
        <p className="mb-6">
          {" "}
          You thought this mission to the moon would be a quick six month thing.
          Your neighbor offered to look after your dog. Your high school math
          teacher was impressed. He once said you wouldn’t amount to
          anything.You sure showed him. But now here you are, fifty feet from
          your spaceship with no way to get back. Your dog will be so sad. Your
          math teacher will be so smug. Pretty devastating.
        </p>
        <Link href="/">
          <button className="btn">Go Home</button>
        </Link>
      </div>
      <div className="z-0 not-found-gradient" />
    </>
  );
}
