import { SiReact, SiVite, SiTailwindcss, SiJavascript, SiSwagger } from "react-icons/si";

export default function About() {
  const tools = [
    { name: "React", Icon: SiReact, color: "#61DAFB" },
    { name: "Vite", Icon: SiVite, color: "#646CFF" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
    { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    { name: "REST API", Icon: SiSwagger, color: "#85EA2D" },
  ];

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-4 px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-3xl border border-gray-200 bg-white/80 p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900/70">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">
          About One Good Thing
        </h2>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          One Good Thing was created to make everyday life feel a little lighter.
          It is a simple web app designed to offer one comforting, encouraging, or uplifting message with just one click.
          The idea behind it is to give people a small moment of calm, motivation, or positivity whenever they need it.
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          This website was built to help users pause for a moment, enjoy a meaningful message, and save the ones they love most for later.
          Whether it is a quick boost during a busy day or a gentle reminder to stay hopeful, One Good Thing is meant to feel simple, warm, and useful.
        </p>

        <h3 className="mt-6 text-lg font-semibold text-slate-900 dark:text-white">
          Built using
        </h3>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-3 py-3 shadow-sm dark:border-slate-700 dark:bg-slate-800/70"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-xl shadow-sm dark:bg-slate-900">
                <tool.Icon className="h-6 w-6" style={{ color: tool.color }} aria-hidden />
              </div>
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                {tool.name}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm font-medium italic text-slate-700 dark:text-slate-200">
          Made with ❤️ by a developer who loves building meaningful things.
        </p>
      </div>
    </div>
  );
}
