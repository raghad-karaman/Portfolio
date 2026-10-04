import Container from "@/components/ui/Container";

export default function About() {
  return (
    <section id="about" className="border-b border-line py-20 dark:border-dark-line">
      <Container>
        <div className="grid gap-10 md:grid-cols-[240px_1fr] md:gap-16">
          <div>
            <h2 className="text-display-md font-medium text-ink dark:text-dark-ink">About</h2>
          </div>
          <div className="max-w-[62ch] space-y-5 text-steel dark:text-dark-steel">
            <p>
              I graduated in Computer Engineering from Gaziantep Islamic Science and Technology
              University, where most of my coursework and projects pulled me toward the same place:
              systems that connect a database, a backend service, and real users — and increasingly,
              systems where a model helps decide what happens next.
            </p>
            <p>
              My work spans backend services in FastAPI, ASP.NET, and Laravel; web and mobile clients
              in Next.js and React Native; and applied machine learning, from classic models like
              Random Forest and XGBoost to Graph Neural Networks. My graduation project — an AI‑assisted
              blood donation management system — brought all of that together: a mobile app, a web
              admin panel, an async backend, and a decision-support layer tested with synthetic donor, appointment, and blood-stock datasets.
            </p>
            <p>
              Outside of coursework, I've interned across web and product‑adjacent teams, worked with
              marketplace integrations, REST APIs, and socket programming, and kept building projects on
              the side — e‑commerce platforms, a disaster‑response decision support tool, and an
              AI‑driven fashion fit predictor. I'm currently looking for full‑stack or backend roles
              where I can keep working close to real data and real users.
            </p>
            <p className="text-ink dark:text-dark-ink">
              What I bring to a team: I take a project from a rough problem statement to a running
              system — schema, API, interface, and the model behind it — and I'm just as comfortable
              explaining the trade‑offs as I am shipping the code.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
