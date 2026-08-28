import Image from "next/image";
import { ClosingCTA, PageHero, Section, Split } from "@/components/Section";
import { brand, hq, team, teamStats, values, videos } from "@/lib/content";

export const metadata = {
  title: "Company",
  description: `${brand.name} is an international AI software company headquartered in ${hq.label}, with senior engineers across six countries. Integrity, Excellence, Innovation.`
};

export default function CompanyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Company"
        title="An eight-person company that works like a much larger one."
        description={`${brand.name} is an international AI software company. Headquarters in ${hq.label}; senior engineers in Japan, Malaysia, the Philippines, France, and Brazil. Small enough that you speak to the people building it, distributed enough that the work rarely stops.`}
        ctas={["Talk to the team", "See what we build"]}
        tags={["Founded " + brand.founded, hq.label, "6 countries", "100% senior"]}
        video={videos.companyHero}
        videoLabel="Team collaborating around a laptop"
      />

      {/* ---------- vision ---------- */}
      <Section
        num="01"
        kicker="Vision"
        title="What the name means"
        intro="maxIEI is built from the three values the company runs on — Integrity, Excellence, Innovation — and the commitment to maximize each of them on every engagement."
        id="vision"
      >
        <div className="statement">
          <p className="statement-values">
            <span>Integrity.</span> <span>Excellence.</span> <span>Innovation.</span>
          </p>
          <blockquote>{brand.promise}</blockquote>
        </div>

        <div className="grid g3" style={{ marginTop: "var(--gut)" }}>
          {values.map((value) => (
            <article className="card" key={value.id} style={{ ["--hue" as string]: value.hue }}>
              <span className="card-index" style={{ color: value.hue }}>
                {value.name.toUpperCase()}
              </span>
              <h3>{value.headline}</h3>
              <p>{value.text}</p>
              <ul className="pills">
                {value.proof.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* ---------- why it works ---------- */}
      <Section
        alt
        num="02"
        kicker="How we work"
        title="Why a distributed senior team beats a large local one"
        intro="Every person here is a senior engineer who owns their area outright. There is no bench, no handoff to a junior team after the sales call, and no layer between you and the people writing the code."
      >
        <Split
          image="/images/team-remote.jpg"
          alt="Distributed team collaborating"
          kicker="Structure"
          title="Trust across cultures, one engineering standard."
          text="A global team only works if the standard is identical everywhere. Ours is written down, reviewed by the CTO, and applied whether the code was written in Tokyo, Lyon, or São Paulo."
          points={[
            "One shared code standard, reviewed by the CTO in Tokyo",
            "Roughly sixteen hours of engineering coverage per day",
            "The person who scoped your project is the person who builds it",
            "US entity and US contracts, with a single point of escalation"
          ]}
        />
        <div className="hero-meta" style={{ marginTop: 44, borderTop: "1px solid var(--line)", paddingTop: 34 }}>
          {teamStats.map(([value, label]) => (
            <div key={label}>
              <strong>{value}</strong>
              <span className="mono">{label}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------- team ---------- */}
      <Section
        num="03"
        kicker="The team"
        title="Eight people. Six countries."
        intro="Every name here is a person you will actually work with — the one who scopes your project is the one who builds it. Full introductions come with the first call."
        id="team"
      >
        <div className="team">
          {team.map((person) => (
            <article
              className="person"
              key={person.name}
              style={{ ["--hue" as string]: person.hue, ["--hue2" as string]: person.hue2 }}
            >
              <div className="avatar">
                {person.photo ? (
                  <Image
                    className="avatar-photo"
                    src={person.photo}
                    alt={`${person.name}, ${person.role}`}
                    width={480}
                    height={480}
                    sizes="(max-width: 900px) 46vw, 22vw"
                  />
                ) : (
                  <span className="avatar-initial">{person.name.charAt(0)}</span>
                )}
                <span className="avatar-flag" role="img" aria-label={person.location}>
                  {person.flag}
                </span>
              </div>
              <div style={{ display: "grid", gap: 6 }}>
                <span className="person-name">{person.name}</span>
                <span className="person-role">{person.role}</span>
                <span className="person-loc">{person.location}</span>
              </div>
              <p>{person.bio}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* ---------- HQ + map ---------- */}
      <Section
        alt
        num="04"
        kicker="Headquarters"
        title={`${hq.city}, ${hq.state}`}
        intro="One legal home, one accountable entity. Client contracts, commercial responsibility, and escalation all sit in Austin regardless of which timezone the work happened in."
        id="hq"
      >
        <div className="hq">
          <div className="hq-card">
            <span className="eyebrow mono">Global headquarters</span>
            <span className="hq-city">
              {hq.city}
              <br />
              {hq.state}
            </span>
            <dl className="hq-rows">
              <div>
                <dt>Entity</dt>
                <dd>{brand.legal}</dd>
              </div>
              <div>
                <dt>District</dt>
                <dd>{hq.district}</dd>
              </div>
              <div>
                <dt>Country</dt>
                <dd>{hq.country}</dd>
              </div>
              <div>
                <dt>Timezone</dt>
                <dd>{hq.timezone}</dd>
              </div>
              <div>
                <dt>Coordinates</dt>
                <dd>{hq.coords}</dd>
              </div>
              <div>
                <dt>Founded</dt>
                <dd>{brand.founded}</dd>
              </div>
            </dl>
          </div>

          <div className="map">
            <span className="map-tag mono">◉ {hq.label}</span>
            <iframe
              title={`Map of ${brand.name} headquarters in ${hq.label}`}
              src={`https://www.google.com/maps?q=${hq.mapQuery}&z=13&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <div style={{ marginTop: "var(--gut)", position: "relative", borderRadius: "var(--radius-lg)", overflow: "hidden", border: "1px solid var(--line)" }}>
          <Image
            src="/images/hq-austin.jpg"
            alt={`${hq.city}, ${hq.state} skyline at dusk`}
            width={1600}
            height={640}
            sizes="100vw"
            style={{ width: "100%", height: "clamp(220px, 30vw, 380px)", objectFit: "cover" }}
          />
        </div>
      </Section>

      <ClosingCTA
        kicker="Work with us"
        title="Talk to the people who will build it."
        text="No account managers, no handoff to a team you have not met. The first call is with the engineers who would run the project."
        label="Book a consultation"
      />
    </main>
  );
}
