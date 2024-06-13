export default function FooterSection() {
  return (
    <section id="footer">
      <div className="bg-black flex items-center">
        <p className="text-white my-4 mx-auto px-8">
          Icons by{" "}
          <a
            href="https://simpleicons.org/"
            className="font-semibold text-slate-300"
          >
            Simple Icons
          </a>
          {" "}and{" "}
          <a
            href="https://lucide.dev"
            className="font-semibold text-slate-300"
          >
            Lucide
          </a>
          {" | "}
          Inspired by{" "}
          <a
            href="https://www.youtube.com/watch?v=8Ea4oq8qFtM"
            className="text-cyan-200"
          >
            WPU
          </a>
        </p>
      </div>
    </section>
  );
}
