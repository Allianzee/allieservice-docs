import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

const features = [
  {
    emoji: "🚀",
    title: "Easy Setup",
    description:
      "Call :init() with a template and you're done. No boilerplate, no complexity, no remotes to set up.",
  },
  {
    emoji: "🔄",
    title: "Auto Replication",
    description:
      "Data changes on the server are automatically sent to the client. No manual RemoteEvents needed.",
  },
  {
    emoji: "📡",
    title: "Reactive Signals",
    description:
      "Get notified instantly when any piece of data changes anywhere in your game.",
  },
  {
    emoji: "🔒",
    title: "Session Locking",
    description:
      "Powered by AllieStore — prevents data corruption when players join multiple servers.",
  },
  {
    emoji: "🌍",
    title: "Cross-Server Messages",
    description:
      "Send gifts, bans, or notifications to players on any server in your game.",
  },
  {
    emoji: "🧪",
    title: "Mock Mode",
    description:
      "Test your game without touching real DataStores. Perfect for Studio development.",
  },
];

const serverCode = `local AllieService = require(
  ReplicatedStorage.Packages.AllieService
).server

AllieService:init({
  template = require(script.DataTemplate),
  profileStoreIndex = "MyGame_v1",
  useMock = true,
})

function AllieService:onPlayerInit(player, data)
  if data.firstJoin == 0 then
    data.firstJoin = os.time()
    data.coins = 500 -- starter coins
  end
  data.lastJoin = os.time()
end

Players.PlayerAdded:Connect(function(player)
  AllieService:waitForData(player)

  -- Give daily bonus
  AllieService:update(player, "coins", function(c)
    return c + 100
  end)
end)`;

const clientCode = `local AllieService = require(
  ReplicatedStorage.Packages.AllieService
).client

-- Yields until server sends data
AllieService:init()

-- Get current values
local coins = AllieService:get("coins")
local level = AllieService:get("level")

-- Listen for changes
AllieService:getChangedSignal("coins")
  :Connect(function(new, old)
    print("Coins:", old, "->", new)
    coinsLabel.Text = tostring(new)
  end)

-- Listen for inventory changes
AllieService:getArrayInsertedSignal("inventory")
  :Connect(function(index, item)
    addItemToUI(index, item)
  end)`;

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <div className="badge-row">
          <span className="badge">🎮 Roblox</span>
          <span className="badge">📦 DataStore</span>
          <span className="badge">⚡ Reactive</span>
          <span className="badge">🔒 Session Locked</span>
        </div>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            📖 Get Started
          </Link>
          <Link
            className="button button--lg"
            style={{
              background: "rgba(255,255,255,0.15)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
            to="/docs/api/server-api"
          >
            📚 API Reference
          </Link>
          <Link
            className="button button--lg"
            style={{
              background: "transparent",
              color: "white",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
            href="https://github.com/your-github-username/allieservice-docs"
          >
            ⭐ GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Why AllieService?</h2>
        <div className={styles.featuresGrid}>
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <h3>
                {feature.emoji} {feature.title}
              </h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CodeSection() {
  return (
    <section className={styles.codeSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>Simple by Design</h2>
        <div className={styles.codeGrid}>
          <div className={styles.codeBlock}>
            <h3>🖥️ Server</h3>
            <pre>
              <code>{serverCode}</code>
            </pre>
          </div>
          <div className={styles.codeBlock}>
            <h3>💻 Client</h3>
            <pre>
              <code>{clientCode}</code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { number: "1", label: "require() to get started" },
    { number: "0", label: "RemoteEvents to set up" },
    { number: "∞", label: "Signals for reactivity" },
    { number: "100%", label: "Auto saves on leave" },
  ];

  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className={styles.statsGrid}>
          {stats.map((stat, idx) => (
            <div key={idx} className={styles.statCard}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section
      style={{
        padding: "5rem 0",
        textAlign: "center",
        background:
          "linear-gradient(135deg, #1e1b4b 0%, #4c1d95 50%, #7c3aed 100%)",
      }}
    >
      <div className="container">
        <h2
          style={{ color: "white", fontSize: "2.5rem", fontWeight: 900 }}
        >
          Ready to get started?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.2rem" }}>
          Set up AllieService in minutes and never worry about data again.
        </p>
        <div style={{ marginTop: "2rem" }}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/setup/installation"
          >
            Start Building →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Home"
      description={siteConfig.tagline}
    >
      <HomepageHeader />
      <main>
        <FeaturesSection />
        <CodeSection />
        <StatsSection />
        <CTASection />
      </main>
    </Layout>
  );
}
