import Image from "next/image";

const CTACard = () => {
  return (
    <div className="relative bg-slate-100 px-6 py-10 overflow-hidden rounded-md">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/70 to-white/30 z-10" />
      {/* Image */}
      <Image
        className="object-cover object-center"
        fill
        alt="CTA Card Image"
        src="https://images.unsplash.com/photo-1585970480901-90d6bb2a48b5?ixid=MnwzODU2NTF8MHwxfHNlYXJjaHwxOHx8RWxlcGhhbnRzJTIwdGhhaWxhbmR8ZW58MHx8fHwxNjcwMzIyNzUx&ixlib=rb-4.0.3"
      />
      {/* Content Container */}
      <div className="relative z-20">
        <div className="text-lg font-medium">#exploretheworld</div>
        <h3 className="mt-3 text-4xl font-semibold">
          Explore the world with me!
        </h3>
        <p className="max-w-lg mt-2 text-lg">
          Explore the world with me! I'm travelling around the world. I've
          visited most of the great cities of and currently I'm travelling in
          Join me!
        </p>
        <form className="mt-6 flex items-center gap-2 w-full">
          <input
            placeholder="Write your email."
            className="w-full md:w-auto px-4 py-3 text-base bg-white/80 rounded-md outline-none focus:ring-2 focus:ring-neutral-600 placeholder:text-sm"
          />
          <button className="px-4 py-3 rounded-md bg-neutral-900 text-neutral-200 whitespace-nowrap">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default CTACard;
