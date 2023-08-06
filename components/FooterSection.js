export default function FooterSection() {
  return (
    <section id="footer">
      <div className="bg-slate-950 flex items-center">
        <p className="text-white my-4 mx-auto">
          Dibuat oleh Yudha Haris Purnama dengan{" "}
          <a
            href="https://nextjs.org/"
            className="font-semibold text-slate-300"
          >
            NextJs
          </a>{" "}
          dan{" "}
          <a
            href="https://tailwindcss.com/"
            className="font-semibold text-cyan-300"
          >
            TailwindCSS
          </a>
          {" | "}
          Terima kasih{" "}
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
