import Image from "next/image";

export default async function Home() {
  return (
    <div className=" p-4 h-full">
      <div className="flex justify-center pb-10">
        <Image
          src="/basketball-logo.svg"
          alt="Claude NBA Companion"
          width="256"
          height="256"
          priority
        />
      </div>
      <div>
        <p className="text-lg">
          We are thrilled to welcome you to our event and are honored to have
          you lead the Claude Code Hands-on Workshop. Your expertise in
          cutting-edge sports technology and software development makes you the
          perfect partner for this deep dive into AI-powered coding. We are
          confident that your insights and practical guidance will empower our
          participants to harness Claude to its fullest potential. Thank you for
          joining us in advancing the future of software development!
        </p>
      </div>
      {/* Hero uses the app's basketball logo from /public */}
    </div>
  );
}
