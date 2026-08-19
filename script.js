// ============================================
// PROJECT FILTERING (work.html)
// ============================================

document.addEventListener("DOMContentLoaded", function () {
  // AOS (Animate On Scroll) - subtle fade-up for sections and project cards
  if (typeof AOS !== "undefined") {
    AOS.init({
      duration: 500,
      easing: "ease-out",
      once: true,
      offset: 60,
    });
  }

  // ============================================
  // SCROLL PROGRESS BAR (all pages)
  // ============================================
  const scrollProgress = document.createElement("div");
  scrollProgress.className = "scroll-progress";
  document.body.appendChild(scrollProgress);

  let scrollProgressTicking = false;
  function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = percent + "%";
    scrollProgressTicking = false;
  }
  window.addEventListener("scroll", function () {
    if (!scrollProgressTicking) {
      requestAnimationFrame(updateScrollProgress);
      scrollProgressTicking = true;
    }
  });
  updateScrollProgress();

  // Check if we're on the work page
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  if (filterButtons.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const filter = this.getAttribute("data-filter");

        // Update active button
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");

        // Filter projects
        projectCards.forEach((card) => {
          const tags = card.getAttribute("data-tags").toLowerCase();

          if (filter === "all" || tags.includes(filter)) {
            card.classList.remove("hidden");
            // Fade in animation
            card.style.opacity = "0";
            setTimeout(() => {
              card.style.opacity = "1";
            }, 10);
          } else {
            card.classList.add("hidden");
          }
        });
      });
    });
  }

  // ============================================
  // CASE STUDY CONTENT (case-study.html)
  // ============================================

  const caseStudyContent = document.getElementById("case-study-content");

  if (caseStudyContent) {
    // Get project from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get("project") || "raide";

    // Case study data
    const caseStudies = {
      raide: {
        title: "Raide",
        subtitle: "Peer-to-peer clothing rental marketplace",
        outcomeImage: "raide-design.jpg",
        role: "UX/UI Designer & Product Lead",
        tools: "Figma, React Native, Supabase",
        projectOverview:
          "Raide is a peer-to-peer clothing rental marketplace built for college students, connecting people who want to rent trendy clothes with those who have closets full of them. As a founding team member, I owned the product from the ground up: conducting user research, defining the roadmap, prioritizing features, coordinating across design and engineering, and shipping a live iOS app that has grown to 24,000+ active users across 2,000+ schools.",
        problem:
          "College students wanted access to trendy clothing for events, gamedays, and socials without the cost of buying or the wait of shipping. Existing platforms like Depop and Poshmark offered resale but lacked local accessibility, trust, and instant exchange. There was no product built specifically for campus communities.",
        myRole:
          "I joined as a founding team member responsible for product strategy, user research, feature prioritization, and front-end implementation. I worked across every stage of the product lifecycle, from initial discovery through ongoing iteration, collaborating with engineering and design to bring features to market and measure their impact.",
        research: [
          "Conducted 100+ user interviews with fashion-conscious college students",
          "Surveyed 200+ potential users to understand rental behaviors and pain points",
          "Analyzed competitor products (Rent the Runway, Nuuly, Depop) to identify market gaps",
          'Developed user personas — "The Trend Seeker" and "The Conscious Consumer" — to guide feature prioritization',
          "Mapped the full user journey from discovery through return to identify friction points",
        ],
        prioritizationInsight:
          "The research surfaced one central insight: trust was the biggest barrier to peer-to-peer rental. Students were willing to rent from strangers but needed confidence that items would arrive as described and that the exchange would be safe. This shaped every prioritization decision we made.",
        prioritization: [
          "Verified profiles and in-app messaging: to establish trust before a transaction",
          "Streamlined booking and payment flow: reduced to 3 steps based on drop-off data",
          "Item condition reporting and photo standards: non-negotiable for fashion credibility",
          "Rating and review system: to build community accountability over time",
        ],
        executionDelivery:
          "I coordinated feature development across sprints, maintained the product backlog, ran daily standups, and managed delivery from requirements through QA and launch. I also implemented many features directly in React Native, which allowed me to move faster and maintain tighter alignment between what was designed and what shipped.",
        outcome: {
          metrics: [
            { value: "24,000+", label: "active users on the platform" },
            { value: "85%", label: "user satisfaction score" },
            { value: "2000", label: "universities Using Raide" },
          ],
          learnings: [
            "Trust is the core product problem in any peer-to-peer marketplace — design and features only work if they address it directly",
            "Ruthless prioritization is more valuable than building everything — the features we cut were the right call",
            "Being able to speak both design and engineering languages made me a more effective product leader — I could translate between the two without losing anything",
          ],
        },
      },
      "gamma-phi-beta": {
        title: "Gamma Phi Beta Website",
        subtitle: "Chapter website + content strategy",
        role: "Webmaster & Content Project Manager",
        timeline: "1 year",
        tools: "Wix CMS, Instagram, LinkedIn",
        projectOverview:
          "Gamma Phi Beta is my sorority chapter at Florida State University. As Webmaster and Content Manager, I owned the chapter's entire digital presence — building and maintaining the website, launching a content initiative called Sister Spotlights, and growing the chapter's social media following. This project gave me hands-on experience managing a team, coordinating content across multiple channels, and driving measurable audience growth through consistent execution.",
        problem:
          "The chapter had a digital presence that wasn't working. The website was outdated, the Instagram had low engagement, and there was no structured way to celebrate and share the stories of chapter members. New members and prospective recruits couldn't get a real sense of who the chapter was from the digital experience alone. The brand wasn't translating online.",
        myRole:
          "Webmaster and Content Project Manager. I owned the website, led the Sister Spotlights initiative, managed a team of 15 contributors, and served as the primary point of contact between the creative team and chapter leadership.",
        research: [
          "Audited the existing website and identified key gaps: outdated content, poor mobile experience, and no storytelling beyond event announcements",
          "Reviewed competitor chapter websites and Instagram accounts to benchmark content quality and engagement",
          "Spoke with chapter members and leadership to understand what was missing and what they wanted the digital presence to represent",
          "Identified the core insight: the chapter had incredible people and stories but no structured way to surface them",
        ],
        prioritizationInsight:
          "The research pointed to one clear opportunity: human storytelling. Generic event posts weren't building community or attracting new members. The chapter needed a content product that put real people at the center.\n\nThis led to the creation of Sister Spotlights — a recurring content series profiling chapter members, their achievements, and their stories. Each spotlight included a written feature, a professional-quality photo, and cross-channel publishing.",
        prioritization: [
          "Sister Spotlights launch: the highest-impact content opportunity identified in research",
          "Website rebuild: updated content, improved navigation, better mobile experience",
          "Cross-channel consistency: website, Instagram, and LinkedIn needed to feel cohesive",
          "Publishing cadence: consistent timing was more important than volume",
        ],
        prioritizationCut:
          "Features considered but cut: podcast series, YouTube channel, member directory. These were exciting but required resources and time the team didn't have. Staying focused on what we could execute consistently was the right call.",
        executionDelivery:
          "I managed 15 contributors simultaneously — assigning subjects to writers, coordinating photographers, reviewing drafts, managing approval from chapter leadership, and publishing on schedule across all three channels. I also built and maintained the website in Wix CMS, handling all content configuration, page builds, and updates throughout my tenure.\n\nThe project ran for a full academic year with consistent weekly publishing across all channels — no missed deadlines.",
        outcome: {
          metrics: [
            "2,000+ Instagram followers gained during tenure",
            "Consistent weekly content published across website, Instagram, and LinkedIn with no missed deadlines",
            "Sister Spotlights became a recognized part of chapter culture — members looked forward to being featured",
            "Website rebuilt with updated content, improved mobile experience, and cleaner information architecture",
          ],
          learnings: [
            "Managing a team of volunteers is harder than managing paid contributors — motivation and accountability require more intentional effort when there's no financial incentive",
            "Consistency beats quality in content — showing up every week built more audience trust than any single perfect post",
            "Scoping a content initiative correctly at the start prevents burnout later — we cut ideas early and were better for it",
            "The skills of a product manager and a content manager overlap more than people think — both require prioritization, coordination, stakeholder communication, and measuring what matters",
          ],
        },
      },
      "study-circle": {
        title: "Study Circle",
        subtitle: "Match classmates and study groups",
        outcomeImage: "study-circle-screens.png",
        role: "Product Owner, Designer, Developer",
        timeline: "6 months",
        tools: "Figma, React Native, Supabase, Node.js",
        projectOverview:
          "Study Circle is a mobile app that matches college students from the same class into study groups automatically. I built this as an academic project, owning the full product lifecycle from problem definition and user research through design, development, and testing. It is a fully functional prototype built in React Native with Supabase and Node.js.",
        problem:
          "College students struggle to find classmates to study with. Study groups form through awkward social media posts, random group chats, or not at all. There was no dedicated tool that made it easy to connect with the right people from your specific class at the right time.",
        myRole:
          "Solo product owner, designer, and developer. I was responsible for every stage — research, requirements, prioritization, UX design, and front-end implementation.",
        research: [
          "Conducted informal user interviews with college students across multiple majors",
          "Identified three core pain points: not knowing who else is in your class, fear of reaching out to strangers, and group chats dying out quickly",
          "Mapped the user journey from noticing they need help studying to successfully connecting with a group",
        ],
        prioritizationInsight:
          "The research revealed that the biggest barrier wasn't finding study partners — it was the social friction of reaching out. Students didn't want to cold-message classmates. This shaped the core product decision: automated matching rather than a browse-and-request model.",
        prioritization: [
          "Automated group matching by class: removes social friction entirely",
          "In-app group chat: keeps communication contained and organized",
          "Simple onboarding: course selection needed to be fast or students would drop off",
          "Authentication: necessary for trust and accountability within groups",
        ],
        prioritizationCut:
          "Features considered but cut: public profiles, study session scheduling, flashcard tools. These added complexity without solving the core friction problem.",
        executionDelivery:
          "I defined product requirements and user stories for each flow, designed wireframes and a high-fidelity prototype in Figma, and built the full application in React Native. I conducted informal user testing with peers before finalizing the design, iterating on the onboarding flow based on feedback that the initial course selection step was confusing.",
        outcome: {
          metrics: [
            "Fully functional prototype with working authentication, real-time group chat, and automated matching logic",
            "User testing showed significantly reduced friction compared to the status quo of group chat apps",
            "Demonstrated end-to-end product ownership as a solo contributor",
          ],
          learnings: [
            "The best product solution is sometimes removing a step entirely rather than improving it — automated matching eliminated the hardest part of the problem",
            "User testing even at small scale surfaces real friction you can't predict in design",
            "Scope discipline matters — cutting the extra features kept the core experience clean and usable",
          ],
        },
      },
      moodGarden: {
        title: "Mood Garden",
        subtitle: "Mood Tracking app",
        outcomeImage: "mood-garden-screens.png",
        role: "Product Owner, Designer, Developer",
        timeline: "4 months",
        tools: "Figma, React Native, Material Design",
        projectOverview:
          "Mood Garden is a native Android mental wellness app that helps users build consistent emotional self-awareness habits through daily mood tracking. I designed and built this as an academic project, owning the full product lifecycle from problem identification through design, development, and testing. The app was built in React Native applying Material Design conventions for Android.",
        problem:
          "Mental health tracking apps often feel clinical, intimidating, and disconnected from real user motivation. Apps like Daylio and Reflectly offer mood tracking but feel sterile or require too much effort to maintain consistently. The result is that users start strong and abandon the habit within days. There was an opportunity to build something that felt more personal, rewarding, and connected to a sense of progress.",
        myRole:
          "Solo product owner, designer, and developer. I was responsible for every stage — problem definition, user research, product decisions, UX design, and front-end implementation in React Native for Android.",
        research: [
          "Identified a clear behavioral pattern: users abandon mental health apps because they feel like a chore, not a reward",
          "Analyzed competitor apps (Daylio, Reflectly, Bearable) to understand what drove drop-off",
          "Defined the core insight: the missing ingredient was a sense of visible, personal progress that felt meaningful — not just a graph or a streak counter",
          "Mapped the user journey from opening the app to logging a mood to reviewing past entries",
        ],
        prioritizationInsight:
          "The central product challenge was motivation and retention. Most mood apps fail because the value of tracking isn't immediately visible to the user. The design needed to make progress feel alive and personal.\n\nThe core product decision was the garden metaphor — your mood entries grow and nurture a visual garden over time. This reframes logging from a clinical task into a creative act with visible, rewarding outcomes.",
        prioritization: [
          "The garden visualization: the entire retention strategy depended on making progress feel beautiful and personal",
          "Simple, fast mood logging: if it took more than 30 seconds the habit would break",
          "Personalization: users needed to feel the garden was theirs, not generic",
          "Historical reflection: the ability to look back on patterns over time was a secondary but meaningful value driver",
        ],
        prioritizationCut:
          "Features considered but cut: social sharing, journaling prompts, therapist integration. These added complexity and shifted the product toward a clinical tool — the opposite of what the research said users needed.",
        platformDecisionHeading: "Platform Decision — Android & Material Design",
        platformDecision:
          "I chose to build Mood Garden for Android specifically to broaden my platform experience beyond iOS. Applying Material Design conventions required different thinking than iOS — different navigation patterns, touch targets, typography scales, and motion principles. This project gave me hands-on experience designing for both major mobile platforms with their distinct conventions.",
        executionDelivery:
          "I defined product requirements, designed the full experience in Figma from wireframes through high-fidelity screens, and built the application in React Native. I applied Material Design principles throughout to ensure the experience felt native and intuitive on Android devices.",
        outcome: {
          metrics: [
            "Fully functional Android prototype with mood logging, garden visualization, and historical tracking",
            "Design successfully addressed the clinical feel problem — the garden metaphor created an emotional connection that sterile tracking apps lack",
            "Demonstrated ability to design and build for Android using Material Design, complementing iOS experience from Raide and Study Circle",
          ],
          learnings: [
            "The right metaphor can solve a retention problem that features alone cannot — the garden concept changed the entire emotional experience of the product",
            "Designing for Android after iOS forced me to think more deeply about platform conventions and when to follow them vs depart from them",
            "Sometimes the best product decision is reframing the user's relationship with the task entirely rather than making the task easier",
          ],
        },
      },
    };

    console.log("Loading case study for project:", projectId);
    console.log("Available case studies:", Object.keys(caseStudies));

    // Get case study data
    if (!caseStudies[projectId]) {
      console.error(`Case study not found for project: ${projectId}`);
      caseStudyContent.innerHTML = `
        <div class="case-study-section">
          <h1>Case Study Not Found</h1>
          <p>The case study for "${projectId}" could not be found.</p>
          <a href="work.html" class="btn btn-primary">Back to Work</a>
        </div>
      `;
      return;
    }

    const caseStudy = caseStudies[projectId];

    if (!caseStudy) {
      console.error(`Case study data is null for project: ${projectId}`);
      caseStudyContent.innerHTML = `
        <div class="case-study-section">
          <h1>Case Study Not Found</h1>
          <p>The case study for "${projectId}" could not be found.</p>
          <a href="work.html" class="btn btn-primary">Back to Work</a>
        </div>
      `;
      return;
    }

    // Generate HTML
    try {
      const html = `
            ${
              caseStudy.heroImage && projectId !== "raide" && projectId !== "study-circle" && projectId !== "moodGarden"
                ? `
            <div class="case-study-hero-image">
                <img src="assets/img/${caseStudy.heroImage}" alt="${caseStudy.title} app screens">
            </div>
            `
                : ""
            }
            <div class="case-study-header">
                <h1 class="case-study-title">${caseStudy.title}</h1>
                <p class="case-study-subtitle">${caseStudy.subtitle}</p>
                <div class="case-study-meta">
                    <div class="case-study-meta-item">
                        <div class="case-study-meta-label">Role</div>
                        <div class="case-study-meta-value">${
                          caseStudy.role
                        }</div>
                    </div>
                    ${
                      caseStudy.timeline
                        ? `
                    <div class="case-study-meta-item">
                        <div class="case-study-meta-label">Timeline</div>
                        <div class="case-study-meta-value">${caseStudy.timeline}</div>
                    </div>
                    `
                        : ""
                    }
                    <div class="case-study-meta-item">
                        <div class="case-study-meta-label">Tools</div>
                        <div class="case-study-meta-value">${
                          caseStudy.tools
                        }</div>
                    </div>
                </div>
            </div>
            
            ${
              caseStudy.projectOverview
                ? `
            <div class="case-study-section">
                <h2>Project Overview</h2>
                ${caseStudy.projectOverview
                  .split("\n\n")
                  .map((para) => `<p>${para}</p>`)
                  .join("")}
            </div>
            `
                : ""
            }
            
            <div class="case-study-section">
                <h2>Problem</h2>
                <p>${caseStudy.problem}</p>
            </div>

            ${
              caseStudy.myRole
                ? `
            <div class="case-study-section">
                <h2>My Role</h2>
                <p>${caseStudy.myRole}</p>
            </div>
            `
                : ""
            }

            <div class="case-study-section">
                <h2>Research</h2>
                <ul>
                    ${caseStudy.research
                      .map((item) => `<li>${item}</li>`)
                      .join("")}
                </ul>
            </div>
            
            ${
              caseStudy.goals
                ? `
            <div class="case-study-section">
                <h2>Define</h2>
                <div class="callout-box">
                    <p><strong>Problem Statement:</strong> ${
                      caseStudy.problemStatement
                    }</p>
                </div>
                <h3>Goals</h3>
                <ul>
                    ${caseStudy.goals
                      .map((goal) => `<li>${goal}</li>`)
                      .join("")}
                </ul>
            </div>
            `
                : ""
            }

            ${
              caseStudy.prioritization
                ? `
            <div class="case-study-section">
                <h2>Product Decisions & Prioritization</h2>
                ${caseStudy.prioritizationInsight
                  .split("\n\n")
                  .map((para) => `<p>${para}</p>`)
                  .join("")}
                <h3>We prioritized in this order:</h3>
                <ul>
                    ${caseStudy.prioritization
                      .map((item) => `<li>${item}</li>`)
                      .join("")}
                </ul>
                ${
                  caseStudy.prioritizationCut
                    ? `<p>${caseStudy.prioritizationCut}</p>`
                    : ""
                }
            </div>
            `
                : ""
            }

            ${
              caseStudy.platformDecision
                ? `
            <div class="case-study-section">
                <h2>${caseStudy.platformDecisionHeading}</h2>
                <p>${caseStudy.platformDecision}</p>
            </div>
            `
                : ""
            }

            ${
              caseStudy.ideation
                ? `
            <div class="case-study-section">
                <h2>Ideation</h2>
                <p>${caseStudy.ideation}</p>
                <div class="case-study-image">
                    <img src="assets/img/${caseStudy.wireframesImage || projectId + "-wireframes.png"}" alt="${
        caseStudy.title
      } wireframes">
                </div>
            </div>
            `
                : ""
            }

            ${
              caseStudy.design
                ? `
            <div class="case-study-section">
                <h2>Design</h2>
                <p>${caseStudy.design}</p>
                ${
                  (projectId !== "gamma-phi-beta" && projectId !== "study-circle") || caseStudy.designImage
                    ? `
                <div class="case-study-image">
                    <img src="assets/img/${caseStudy.designImage || projectId + "-design.jpg"}" alt="${caseStudy.title} final design">
                </div>
                `
                    : ""
                }
            </div>
            `
                : ""
            }

            ${
              caseStudy.executionDelivery
                ? `
            <div class="case-study-section">
                <h2>Execution & Delivery</h2>
                ${caseStudy.executionDelivery
                  .split("\n\n")
                  .map((para) => `<p>${para}</p>`)
                  .join("")}
            </div>
            `
                : ""
            }

            <div class="case-study-section">
                <h2>Outcome</h2>
                ${
                  caseStudy.outcome &&
                  caseStudy.outcome.metrics &&
                  caseStudy.outcome.metrics.length > 0
                    ? (() => {
                        const metrics = caseStudy.outcome.metrics;
                        const isCardFormat = metrics[0] && typeof metrics[0] === "object" && "value" in metrics[0];
                        return `
                <h3>${isCardFormat ? "Metrics" : "Highlights"}</h3>
                <div class="outcome-metrics${isCardFormat ? " outcome-metrics--cards" : ""}">
                ${isCardFormat
                  ? metrics
                      .map(
                        (m) => `
                    <div class="outcome-metric-card">
                      <div class="outcome-metric-value">${m.value}</div>
                      <div class="outcome-metric-label">${m.label}</div>
                    </div>`
                      )
                      .join("")
                  : `<div class="callout-box"><ul>${metrics.map((m) => `<li>${m}</li>`).join("")}</ul></div>`
                }
                </div>
                `;
                      })()
                    : ""
                }
                ${
                  caseStudy.outcome &&
                  caseStudy.outcome.learnings &&
                  caseStudy.outcome.learnings.length > 0
                    ? `
                <h3>Key Learnings</h3>
                <ul>
                    ${caseStudy.outcome.learnings
                      .map((learning) => `<li>${learning}</li>`)
                      .join("")}
                </ul>
                `
                    : ""
                }
                ${
                  caseStudy.outcomeImage
                    ? `
                <div class="case-study-image">
                    <img src="assets/img/${caseStudy.outcomeImage}" alt="${caseStudy.title} outcome">
                </div>
                `
                    : ""
                }
            </div>
        `;

      caseStudyContent.innerHTML = html;

      // Update page title
      document.title = `${caseStudy.title} — Kayla Heady`;
    } catch (error) {
      console.error("Error generating case study HTML:", error);
      caseStudyContent.innerHTML = `
        <div class="case-study-section">
          <h1>Error Loading Case Study</h1>
          <p>There was an error loading the case study. Please try again.</p>
          <a href="work.html" class="btn btn-primary">Back to Work</a>
        </div>
      `;
    }
  }

  // ============================================
  // SMOOTH SCROLL & ACTIVE NAV HIGHLIGHT
  // ============================================

  // Highlight active nav based on current page
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll(".nav-links a");

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (
      linkPage === currentPage ||
      (currentPage === "" && linkPage === "index.html")
    ) {
      link.classList.add("active");
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // ============================================
  // CONTACT FORM HANDLING
  // ============================================

  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Construct mailto: URL
      const subject = encodeURIComponent(`Portfolio Contact: ${name}`);
      const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
      const mailtoLink = `mailto:kaylaheady1@gmail.com?subject=${subject}&body=${body}`;

      // Open email client
      window.location.href = mailtoLink;
    });
  }
});
