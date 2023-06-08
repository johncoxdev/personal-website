import Link from "next/link";

export default function Page404() {
  return (
    <div className="cursor-custom bg-stars bg-cover flex flex-col items-center justify-center min-h-screen">
      <div className="text-white text-3xl font-exo font-bold">
        Page not found
      </div>
      <div className="mt-4">
        <p className="block">
          Return to{" "}
          <Link href="/">
            Home
          </Link>
        </p>
      </div>
    </div>
  );
}