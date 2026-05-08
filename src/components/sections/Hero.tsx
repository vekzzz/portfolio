import { motion } from "framer-motion";

const metaCells = [
  {
    k: "01 — Focus",
    v: (
      <>
        Product engineering for{" "}
        <strong style={{ color: "var(--ink)" }}>ambitious startups</strong>{" "}
        &amp; design-led teams.
      </>
    ),
  },
  {
    k: "02 — Track record",
    v: (
      <>
        <strong style={{ color: "var(--ink)" }}>4 years</strong> shipping to
        production. 40+ projects.{" "}
        <em
          style={{
            fontFamily: "Instrument Serif, serif",
            fontStyle: "italic",
            color: "var(--accent)",
          }}
        >
          0 abandoned.
        </em>
      </>
    ),
  },
  {
    k: "03 — Stack",
    v: "TypeScript · React · Next.js · Node · Postgres · Three.js",
  },
];

export function Hero() {
  return (
    <header
      id="top"
      className="relative border-b grid grid-cols-[1fr_400px] max-md:grid-cols-1"
      style={{ minHeight: "calc(100vh - 80px)", borderColor: "var(--line)" }}
    >
      {/* ── LEFT COLUMN ── */}
      <div
        className="flex flex-col justify-between border-r max-md:border-r-0 max-md:border-b px-14 pt-14 pb-20 max-md:px-5 max-md:pt-10 max-md:pb-12"
        style={{ borderColor: "var(--line)" }}
      >
        <div>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "Instrument Serif, serif",
              fontStyle: "italic",
              fontSize: "clamp(36px, 4.8vw, 68px)",
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              color: "var(--ink-2)",
              marginBottom: "44px",
            }}
          >
            The engineer who makes your
            <br />
            product{" "}
            <em style={{ color: "var(--accent)", fontStyle: "normal" }}>
              beautiful
            </em>{" "}
            and fast.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.65,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h1
              className="font-sans font-bold m-0"
              style={{
                fontSize: "clamp(52px, 7.5vw, 104px)",
                lineHeight: 0.92,
                letterSpacing: "-0.05em",
                color: "var(--ink)",
                marginBottom: "14px",
              }}
            >
              Veks Dev
            </h1>
            <div
              className="font-mono text-[11px] uppercase flex items-center gap-3"
              style={{ letterSpacing: "0.1em", color: "var(--muted)" }}
            >
              <span
                className="w-6 h-px"
                style={{ background: "var(--muted)", opacity: 0.35 }}
              />
              Full-stack · Freelance · Remote
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="text-base leading-[1.65]"
            style={{
              letterSpacing: "-0.01em",
              color: "var(--ink-2)",
              maxWidth: "520px",
              marginBottom: "32px",
            }}
          >
            I work closest to the interface — turning designs into fast,
            accessible, and maintainable code — but I'm equally at home wiring
            up APIs, databases, and{" "}
            <em
              style={{
                fontFamily: "Instrument Serif, serif",
                fontStyle: "italic",
                color: "var(--accent)",
              }}
            >
              infra
            </em>
            .
          </p>
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 font-mono text-[11px] rounded-full transition-all duration-200"
              style={{
                padding: "12px 28px",
                background: "var(--ink)",
                color: "var(--bg)",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--accent)";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--ink)";
                e.currentTarget.style.transform = "";
              }}
            >
              Start a project →
            </a>
            <a
              href="#work"
              className="inline-flex items-center font-mono text-[11px] border rounded-full transition-all duration-200"
              style={{
                padding: "11px 24px",
                color: "var(--muted)",
                borderColor: "var(--line-2)",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--ink-2)";
                e.currentTarget.style.color = "var(--ink-2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--line-2)";
                e.currentTarget.style.color = "var(--muted)";
              }}
            >
              View selected work
            </a>
          </div>
        </motion.div>
      </div>

      {/* ── RIGHT COLUMN ── */}
      <div className="flex flex-col justify-between px-14 pt-14 pb-20 max-md:px-5 max-md:pt-8 max-md:pb-12">
        <motion.div
          className="relative border rounded-[14px] overflow-hidden"
          style={{ borderColor: "var(--line-2)", background: "var(--surface)" }}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            className="absolute inset-0 pointer-events-none rounded-[14px]"
            style={{
              background:
                "linear-gradient(135deg, transparent 55%, color-mix(in oklab, var(--accent) 25%, transparent))",
              opacity: 0.5,
              zIndex: 1,
            }}
          />
          <div
            className="grid place-items-center"
            style={{
              aspectRatio: "4/5",
              background: `repeating-linear-gradient(135deg, color-mix(in oklab, var(--ink) 4%, transparent) 0 1px, transparent 1px 8px), var(--bg-2)`,
            }}
          >
            <span
              className="font-mono text-[10px] border border-dashed rounded-md"
              style={{
                padding: "6px 10px",
                color: "var(--muted)",
                borderColor: "var(--line-2)",
                background: "var(--surface)",
              }}
            >
              portrait · 4:5 · b&w
            </span>
          </div>
          <div
            className="flex justify-between items-center border-t font-mono text-[10px]"
            style={{
              padding: "12px 16px",
              borderColor: "var(--line)",
              color: "var(--muted)",
            }}
          >
            <span
              className="flex items-center gap-1.5"
              style={{ color: "var(--ink-2)" }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse-dot"
                style={{ background: "#31c48d" }}
              />
              available · may
            </span>
            <span>veks.dev/cv</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {metaCells.map(({ k, v }, i) => (
            <div
              key={k}
              style={{
                padding: "18px 0",
                borderBottom: "1px dashed var(--line-2)",
                ...(i === 0 ? { borderTop: "1px dashed var(--line-2)" } : {}),
              }}
            >
              <div
                className="font-mono text-[9px] uppercase"
                style={{
                  letterSpacing: "0.12em",
                  color: "var(--muted)",
                  marginBottom: "7px",
                }}
              >
                {k}
              </div>
              <div
                className="text-[13px] leading-[1.55]"
                style={{ color: "var(--ink-2)" }}
              >
                {v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </header>
  );
}
