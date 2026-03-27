(function () {
  const username = "git-leon";
  const containerId = "github-badges";

  const statsUrl =
    "https://github-readme-stats.vercel.app/api?username=" +
    encodeURIComponent(username) +
    "&show_icons=true&count_private=true";

  const langsUrl =
    "https://github-readme-stats.vercel.app/api/top-langs/?username=" +
    encodeURIComponent(username) +
    "&layout=compact";

  function getContainer() {
    return document.getElementById(containerId);
  }

  function renderFallback(container) {
    container.innerHTML = `
      <div class="github-badges-fallback">
        <div class="github-badges-fallback-grid">
          <section class="gh-card stats-card">
            <div>
              <h3 class="gh-card-title">Leon Christopher Hunter's GitHub Stats</h3>

              <ul class="stats-list">
                <li class="stats-row">
                  <span class="stats-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 3.7l2.5 5.07 5.6.81-4.05 3.95.95 5.57L12 16.45 7 19.1l.95-5.57L3.9 9.58l5.6-.81L12 3.7z"></path>
                    </svg>
                  </span>
                  <span>Total Stars Earned:</span>
                  <span class="stats-value">24</span>
                </li>

                <li class="stats-row">
                  <span class="stats-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M3 12a9 9 0 1 0 3-6.7"></path>
                      <path d="M3 4v5h5"></path>
                      <path d="M12 7v5l3 2"></path>
                    </svg>
                  </span>
                  <span>Total Commits (last year):</span>
                  <span class="stats-value">251</span>
                </li>

                <li class="stats-row">
                  <span class="stats-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <circle cx="6" cy="5" r="2"></circle>
                      <circle cx="18" cy="5" r="2"></circle>
                      <circle cx="12" cy="19" r="2"></circle>
                      <path d="M8 5h8"></path>
                      <path d="M6 7v7.5"></path>
                      <path d="M18 7v7.5"></path>
                      <path d="M12 17l-6-2.5"></path>
                      <path d="M12 17l6-2.5"></path>
                    </svg>
                  </span>
                  <span>Total PRs:</span>
                  <span class="stats-value">134</span>
                </li>

                <li class="stats-row">
                  <span class="stats-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="9"></circle>
                      <path d="M12 8v5"></path>
                      <circle cx="12" cy="16.8" r="0.9" fill="#75d7ff" stroke="none"></circle>
                    </svg>
                  </span>
                  <span>Total Issues:</span>
                  <span class="stats-value">0</span>
                </li>

                <li class="stats-row">
                  <span class="stats-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M5 4h14v12H5z"></path>
                      <path d="M8 20h8"></path>
                      <path d="M12 16v4"></path>
                    </svg>
                  </span>
                  <span>Contributed to (last year):</span>
                  <span class="stats-value">51</span>
                </li>
              </ul>
            </div>

            <div class="grade-ring-wrap">
              <div class="grade-ring" aria-label="Grade B">
                <svg viewBox="0 0 100 100" aria-hidden="true">
                  <circle class="track" cx="50" cy="50" r="40"></circle>
                  <circle class="progress" cx="50" cy="50" r="40"></circle>
                </svg>
                <div class="grade-ring-center">B</div>
              </div>
            </div>
          </section>

          <section class="gh-card lang-card">
            <h3 class="gh-card-title">Most Used Languages</h3>

            <div class="lang-bar" aria-hidden="true">
              <span class="lang-seg lang-java"></span>
              <span class="lang-seg lang-html"></span>
              <span class="lang-seg lang-css"></span>
              <span class="lang-seg lang-js"></span>
              <span class="lang-seg lang-ts"></span>
              <span class="lang-seg lang-bat"></span>
            </div>

            <div class="lang-grid">
              <div class="lang-item"><span class="lang-dot dot-java"></span><span>Java 60.53%</span></div>
              <div class="lang-item"><span class="lang-dot dot-js"></span><span>JavaScript 5.09%</span></div>

              <div class="lang-item"><span class="lang-dot dot-html"></span><span>HTML 20.74%</span></div>
              <div class="lang-item"><span class="lang-dot dot-ts"></span><span>TypeScript 3.95%</span></div>

              <div class="lang-item"><span class="lang-dot dot-css"></span><span>CSS 8.25%</span></div>
              <div class="lang-item"><span class="lang-dot dot-bat"></span><span>Batchfile 1.44%</span></div>
            </div>
          </section>
        </div>
      </div>
    `;
  }

  function renderDynamic(container) {
    container.innerHTML = `
      <table class="github-badges-table">
        <tr>
          <td>
            <img
              id="readme-stats-img"
              alt="Git-Leon's GitHub stats"
              src="${statsUrl}">
          </td>
          <td>
            <img
              id="top-langs-img"
              alt="Git-Leon's Top Languages"
              src="${langsUrl}">
          </td>
        </tr>
      </table>
    `;

    const statsImg = document.getElementById("readme-stats-img");
    const langsImg = document.getElementById("top-langs-img");

    let fallbackTriggered = false;
    let statsLoaded = false;
    let langsLoaded = false;

    function triggerFallback() {
      if (fallbackTriggered) {
        return;
      }
      fallbackTriggered = true;
      renderFallback(container);
    }

    function handleSuccess() {
      if (fallbackTriggered) {
        return;
      }
      if (statsLoaded && langsLoaded) {
        container.setAttribute("data-github-badges-mode", "dynamic");
      }
    }

    statsImg.addEventListener("load", function () {
      statsLoaded = true;
      handleSuccess();
    });

    langsImg.addEventListener("load", function () {
      langsLoaded = true;
      handleSuccess();
    });

    statsImg.addEventListener("error", triggerFallback);
    langsImg.addEventListener("error", triggerFallback);

    window.setTimeout(function () {
      if (!statsLoaded || !langsLoaded) {
        triggerFallback();
      }
    }, 5000);
  }

  function init() {
    const container = getContainer();
    if (!container) {
      return;
    }
    renderDynamic(container);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();