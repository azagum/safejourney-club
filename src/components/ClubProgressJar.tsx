import React, { useMemo, useState } from "react";
import "./ClubProgressJar.css";

// -----------------------------------------------------------------------------
// DATA TYPES
// -----------------------------------------------------------------------------
// These shapes are intentionally API-friendly.
// Later the active cycle can come from GET /api/jar/active
// and contributions from POST /api/jar/contribution.
// -----------------------------------------------------------------------------

export interface PrizeCycle {
  id: string;
  prizeTitle: string;
  prizeDescription: string;
  prizeImageUrl?: string;
  goalAmount: number;
  currentAmount: number;
  unitLabel: string;
  status: "active" | "drawing" | "completed";
  startedAt: string;
  completedAt?: string;
  winnerMemberId?: string;
  winnerDisplayName?: string;
  drawSeed?: string;
  eligibleCount?: number;
}

export interface ContributionEvent {
  id: string;
  cycleId: string;
  memberId: string;
  amount: number;
  reason: string;
  createdAt: string;
}

interface ClubProgressJarProps {
  cycle?: PrizeCycle;
  showDemoControls?: boolean;
  memberContribution?: number;
  memberEligible?: boolean;
}

const MOCK_CYCLE: PrizeCycle = {
  id: "cycle-demo-001",
  prizeTitle: "Club Milestone · Premium eSIM Pack",
  prizeDescription:
    "A premium travel eSIM package for a member who helps the club reach its next milestone.",
  goalAmount: 100,
  currentAmount: 63,
  unitLabel: "qualified actions",
  status: "active",
  startedAt: "2026-10-01T00:00:00Z",
};

function getProgress(current: number, goal: number): number {
  if (goal <= 0) return 0;

  return Math.min(
    100,
    Math.max(0, Math.round((current / goal) * 100))
  );
}

function createDrawSeed(cycle: PrizeCycle, contributionCount: number): string {
  return `${cycle.id}:${Date.now()}:${contributionCount}`;
}

function deterministicWinnerIndex(
  seed: string,
  eligibleCount: number
): number {
  if (eligibleCount <= 0) return 0;

  let hash = 0;

  for (let i = 0; i < seed.length; i += 1) {
    hash = (hash << 5) - hash + seed.charCodeAt(i);
    hash |= 0;
  }

  return Math.abs(hash) % eligibleCount;
}

export function ClubProgressJar({
  cycle: externalCycle,
  showDemoControls = false,
  memberContribution = 0,
  memberEligible = false,
}: ClubProgressJarProps): React.JSX.Element {
  const [cycle, setCycle] = useState<PrizeCycle>(
    externalCycle ?? MOCK_CYCLE
  );

  const [contributionCount, setContributionCount] = useState(63);

  const [nextPrizePreview, setNextPrizePreview] = useState(
    "Next Club Milestone"
  );

  const progress = useMemo(
    () => getProgress(cycle.currentAmount, cycle.goalAmount),
    [cycle.currentAmount, cycle.goalAmount]
  );

  const handleDemoContribution = (): void => {
    if (cycle.status !== "active") return;

    const nextAmount = Math.min(
      cycle.goalAmount,
      cycle.currentAmount + 1
    );

    const nextContributionCount = contributionCount + 1;

    setContributionCount(nextContributionCount);

    if (nextAmount >= cycle.goalAmount) {
      const drawingCycle: PrizeCycle = {
        ...cycle,
        currentAmount: cycle.goalAmount,
        status: "drawing",
      };

      setCycle(drawingCycle);

      // -----------------------------------------------------------------------
      // DEMO ONLY:
      // In production this transition must happen on the server.
      // -----------------------------------------------------------------------
      window.setTimeout(() => {
        const eligibleCount = Math.max(1, nextContributionCount);
        const seed = createDrawSeed(
          drawingCycle,
          nextContributionCount
        );

        const winnerIndex = deterministicWinnerIndex(
          seed,
          eligibleCount
        );

        const winnerNumber = winnerIndex + 1;

        setCycle({
          ...drawingCycle,
          status: "completed",
          completedAt: new Date().toISOString(),
          winnerMemberId: `member-${winnerNumber}`,
          winnerDisplayName: `Member #${winnerNumber}`,
          drawSeed: seed,
          eligibleCount,
        });

        // Small preview only for the next mock cycle.
        setNextPrizePreview("Next Club Milestone · Travel Reward");
      }, 2500);
    } else {
      setCycle({
        ...cycle,
        currentAmount: nextAmount,
      });
    }
  };

  const handleResetDemo = (): void => {
    setCycle({
      ...MOCK_CYCLE,
      currentAmount: 63,
      status: "active",
      completedAt: undefined,
      winnerMemberId: undefined,
      winnerDisplayName: undefined,
      drawSeed: undefined,
      eligibleCount: undefined,
    });

    setContributionCount(63);
  };

  return (
    <section className="sj-section sj-jar-section">
      <div className="sj-section-header">
        <span className="sj-chip">Safe Journey Club</span>

        <h2>Members’ Progress Jar</h2>

        <p>
          Qualified club activity fills the jar. When it’s full, one eligible
          member receives the milestone reward — then we start again.
        </p>
      </div>

      <div className="sj-jar-layout">
        {/* --------------------------------------------------------------- */}
        {/* JAR                                                             */}
        {/* --------------------------------------------------------------- */}

        <div className="sj-jar-visual-column">
          <div
            className={`sj-progress-jar ${
              cycle.status === "drawing"
                ? "sj-jar-drawing"
                : cycle.status === "completed"
                  ? "sj-jar-completed"
                  : ""
            }`}
            role="progressbar"
            aria-label="Club progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
          >
            <div
              className="sj-jar-liquid"
              style={{
                height: `${progress}%`,
              }}
            >
              <div className="sj-jar-shine" />
              <div className="sj-jar-bubbles">
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="sj-jar-glass" />

            <div className="sj-jar-percent">
              <strong>{progress}%</strong>
              <span>filled</span>
            </div>
          </div>

          <div className="sj-jar-progress-text">
            <strong>
              {cycle.currentAmount} / {cycle.goalAmount}
            </strong>

            <span>{cycle.unitLabel}</span>
          </div>
        </div>

        {/* --------------------------------------------------------------- */}
        {/* CONTENT                                                         */}
        {/* --------------------------------------------------------------- */}

        <div className="sj-jar-content">
          <div className="sj-jar-prize">
            <span className="sj-jar-eyebrow">
              Members’ Milestone
            </span>

            <h3>{cycle.prizeTitle}</h3>

            <p>{cycle.prizeDescription}</p>
          </div>

          {cycle.status === "active" && (
            <>
              <div className="sj-jar-activity">
                <h4>What fills the jar?</h4>

                <ul>
                  <li>Membership joins and renewals</li>
                  <li>Selected travel & eSIM purchases</li>
                  <li>Qualified partner bookings</li>
                  <li>Other eligible club activity</li>
                </ul>
              </div>

              <div className="sj-jar-cycle-info">
                <span>Current cycle</span>
                <strong>Activity-based · No deadline</strong>
              </div>
            </>
          )}

          {cycle.status === "drawing" && (
            <div className="sj-jar-result sj-jar-result-drawing">
              <span className="sj-jar-result-icon">✦</span>

              <div>
                <strong>Milestone reached</strong>
                <p>
                  The eligible member draw is being prepared.
                </p>
              </div>
            </div>
          )}

          {cycle.status === "completed" && (
            <div className="sj-jar-result">
              <span className="sj-jar-result-icon">✓</span>

              <div>
                <span>Milestone winner</span>

                <strong>
                  {cycle.winnerDisplayName ?? "Member"}
                </strong>

                <p>
                  Eligible members: {cycle.eligibleCount ?? "—"}
                </p>

                {cycle.drawSeed && (
                  <small>
                    Draw seed: {cycle.drawSeed}
                  </small>
                )}
              </div>
            </div>
          )}

          <div className="sj-jar-actions">
            <a
              href="#jar-rules"
              className="sj-btn ghost"
            >
              View full rules
            </a>

            {cycle.status === "completed" && (
              <button
                className="sj-btn primary"
                type="button"
                onClick={() => {
                  setCycle({
                    ...MOCK_CYCLE,
                    id: `cycle-${Date.now()}`,
                    prizeTitle: nextPrizePreview,
                    currentAmount: 0,
                  });
                  setContributionCount(0);
                }}
              >
                Start next jar
              </button>
            )}
          </div>

          {/* ------------------------------------------------------------- */}
          {/* OPTIONAL MEMBER WIDGET                                      */}
          {/* ------------------------------------------------------------- */}

          {(memberContribution > 0 || memberEligible) && (
            <div className="sj-jar-member-card">
              <div>
                <span>Your contributions this cycle</span>
                <strong>{memberContribution}</strong>
              </div>

              {memberEligible && (
                <span className="sj-jar-eligible">
                  Eligible
                </span>
              )}
            </div>
          )}

          {/* ------------------------------------------------------------- */}
          {/* DEV DEMO                                                     */}
          {/* ------------------------------------------------------------- */}

          {showDemoControls && (
            <div className="sj-jar-demo">
              <span>Development demo</span>

              <div>
                <button
                  className="sj-btn primary"
                  type="button"
                  onClick={handleDemoContribution}
                  disabled={cycle.status !== "active"}
                >
                  Simulate +1 contribution
                </button>

                <button
                  className="sj-btn ghost"
                  type="button"
                  onClick={handleResetDemo}
                >
                  Reset demo
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* --------------------------------------------------------------- */}
      {/* RULES                                                           */}
      {/* --------------------------------------------------------------- */}

      <div
        id="jar-rules"
        className="sj-jar-rules"
      >
        <div>
          <h3>How the Progress Jar works</h3>

          <p>
            The jar fills through qualified club activity. When the milestone
            is reached, eligible members enter the draw. The cycle then
            completes and a new milestone begins.
          </p>
        </div>

        <div className="sj-jar-rules-grid">
          <div>
            <strong>Eligibility</strong>
            <p>
              Members with at least one qualified contribution during the
              current cycle are eligible.
            </p>
          </div>

          <div>
            <strong>Fair draw</strong>
            <p>
              The production draw will use a published seed and record the
              eligible count and result for verification.
            </p>
          </div>

          <div>
            <strong>No countdown</strong>
            <p>
              There is no guaranteed calendar date for a draw. The jar fills
              according to real club activity.
            </p>
          </div>
        </div>

        <p className="sj-jar-disclaimer">
          Promotional member reward; terms apply. Not financial advice.
        </p>
      </div>
    </section>
  );
}

export default ClubProgressJar;