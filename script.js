// ============================================
// PROJECT FILTERING (work.html)
// ============================================

document.addEventListener("DOMContentLoaded", function () {
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
        role: "UX/UI Designer & Product Lead",
        timeline: "6 months",
        tools: "Figma, React Native, Supabase",
        problem:
          "The fashion industry is one of the largest polluters globally, yet people still want access to trendy clothing. Traditional rental services are expensive and limited. Raide connects people who want to rent clothes with those who have clothes to rent, creating a sustainable and affordable alternative.",
        research: [
          "Conducted 15+ user interviews with fashion-conscious millennials and Gen Z",
          "Surveyed 200+ potential users to understand rental behaviors and pain points",
          "Analyzed competitor apps (Rent the Runway, Nuuly) to identify gaps",
          'Created user personas: "The Trend Seeker" and "The Conscious Consumer"',
          "Mapped user journey from discovery to return",
        ],
        problemStatement:
          "Fashion-conscious individuals need an affordable, convenient way to access trendy clothing without contributing to fast fashion waste.",
        goals: [
          "Build trust between renters and lenders through verification and reviews",
          "Create a seamless booking and payment flow",
          "Design an intuitive search and discovery experience",
          "Ensure clear communication about item condition and availability",
        ],
        ideation:
          "I started with low-fidelity wireframes focusing on the core user flows: browsing, booking, and managing rentals. Key decisions included a card-based browsing interface, in-app messaging, and a rating system to build community trust.",
        design:
          "The final design emphasizes clarity and trust. I used a clean, modern aesthetic with high-quality imagery. The booking flow was streamlined to 3 steps, and I added features like virtual try-on previews and detailed item condition reports.",
        outcome: {
          metrics: [
            "40% increase in user sign-ups during beta",
            "85% user satisfaction score",
            "Average booking time reduced to under 2 minutes",
          ],
          learnings: [
            "Trust is the biggest barrier in peer-to-peer marketplaces",
            "High-quality photos are non-negotiable for fashion apps",
            "In-app messaging significantly reduces support tickets",
            "Gamification (badges, reviews) increases user engagement",
          ],
        },
      },
      "gamma-phi-beta": {
        title: "Gamma Phi Beta Website",
        subtitle: "Chapter website + blog experience",
        role: "UX Designer & Developer",
        timeline: "3 months",
        tools: "Figma, Wix, CMS",
        problem:
          "The Gamma Phi Beta chapter needed a modern website to showcase their activities, share news, and provide resources to members. The existing site was outdated, hard to navigate, and didn't reflect the chapter's vibrant community.",
        research: [
          "Interviewed chapter leadership to understand content priorities",
          "Surveyed 50+ members about what information they needed most",
          "Analyzed competitor sorority websites for best practices",
          "Audited existing content and identified information architecture issues",
          "Created user flows for different member types (new members, active members, alumni)",
        ],
        problemStatement:
          "Chapter members and visitors need quick, easy access to information about events, resources, and chapter news in a format that reflects the organization's values and community.",
        goals: [
          "Improve information architecture and navigation",
          "Create a blog section for regular updates",
          "Design a mobile-responsive experience",
          "Make it easy for non-technical users to update content via CMS",
        ],
        ideation:
          "I restructured the site architecture into clear sections: About, Events, Blog, Resources, and Contact. The blog became a central hub for chapter news, and I designed a card-based layout that works well on all devices.",
        design:
          "The design balances professionalism with warmth, using the sorority's colors thoughtfully. I created reusable components in Wix that make it easy for chapter members to add new blog posts and update content without technical knowledge.",
        outcome: {
          metrics: [
            "60% increase in page views",
            "Average session duration increased by 2x",
            "95% of members found the new site easier to use",
          ],
          learnings: [
            "CMS usability is critical for client-managed sites",
            "Clear information hierarchy reduces bounce rate",
            "Regular blog content keeps the site feeling fresh and active",
            "Mobile-first design is essential for student audiences",
          ],
        },
      },
      "study-circle": {
        title: "Study Circle",
        subtitle: "Match classmates and study groups",
        role: "UX Designer",
        timeline: "4 months",
        tools: "Figma, Principle, UserTesting",
        problem:
          "Students struggle to find study partners, especially in large classes or when taking online courses. Existing solutions are either too generic (Facebook groups) or too complex (full social networks). Students need a simple, focused way to connect with classmates.",
        research: [
          "Conducted 20+ interviews with college students across different majors",
          "Observed study group formation behaviors on campus",
          "Analyzed pain points in existing study group apps",
          "Created journey maps for different study scenarios (exam prep, project collaboration, regular study sessions)",
          "Identified key moments: finding matches, scheduling, and maintaining groups",
        ],
        problemStatement:
          "Students need a simple, trustworthy way to find and connect with study partners who share their classes and learning goals.",
        goals: [
          "Make it easy to find classmates in specific courses",
          "Enable quick matching based on study preferences and schedules",
          "Facilitate initial conversation and group formation",
          "Build trust through verified student status",
        ],
        ideation:
          "I designed a swipe-based matching interface (inspired by dating apps but focused on study compatibility). Key features included course-based matching, study preference tags, and a simple messaging system. I created multiple wireframe iterations to test different approaches to the matching flow.",
        design:
          "The final design uses a clean, friendly interface with clear visual hierarchy. I focused on making the matching process feel low-pressure and fun, while ensuring safety through school email verification. The app includes features like study goal setting, availability matching, and group chat creation.",
        outcome: {
          metrics: [
            "500+ beta users in first month",
            "70% match acceptance rate",
            "Average of 2.5 study groups formed per active user",
          ],
          learnings: [
            "Students prefer lightweight, focused tools over feature-heavy platforms",
            "Gamification (achievements, streaks) increases engagement",
            "Privacy and safety concerns are top of mind for students",
            "Integration with course management systems would significantly improve UX",
          ],
        },
      },
      "project-4": {
        title: "E-commerce Redesign",
        subtitle: "Improving conversion through user research",
        role: "UX Researcher & Designer",
        timeline: "5 months",
        tools: "Figma, Hotjar, Google Analytics",
        problem:
          "An e-commerce platform was experiencing low conversion rates and high cart abandonment. Initial assumptions pointed to pricing, but user research revealed deeper usability issues in the checkout and product discovery flows.",
        research: [
          "Analyzed 6 months of analytics data to identify drop-off points",
          "Conducted usability testing with 12 participants",
          "Performed heatmap analysis on key pages",
          "Interviewed 8 customers who abandoned carts",
          "Created conversion funnel maps",
        ],
        problemStatement:
          "Online shoppers are abandoning purchases due to confusing navigation, unclear product information, and a lengthy checkout process.",
        goals: [
          "Reduce cart abandonment by 30%",
          "Improve product discovery and search",
          "Streamline checkout to 3 steps or fewer",
          "Increase mobile conversion rate",
        ],
        ideation:
          "I redesigned the product page to prioritize key information (price, availability, reviews) and added a sticky add-to-cart button. The checkout flow was simplified from 5 steps to 3, with guest checkout prominently featured. I also improved the search functionality with filters and autocomplete.",
        design:
          "The new design emphasizes clarity and speed. Product images are larger, reviews are more prominent, and trust signals (security badges, return policy) are visible throughout. The checkout process is now a single-page flow with clear progress indicators.",
        outcome: {
          metrics: [
            "25% reduction in cart abandonment",
            "18% increase in overall conversion rate",
            "40% improvement in mobile conversions",
            "15% increase in average order value",
          ],
          learnings: [
            "Guest checkout is essential - don't force account creation",
            "Product reviews and ratings significantly impact purchase decisions",
            "Mobile users need larger touch targets and simplified forms",
            "Trust signals (security, returns) should be visible, not hidden in footer",
          ],
        },
      },
      "project-5": {
        title: "Fitness App",
        subtitle: "Personalized workout tracking experience",
        role: "UX/UI Designer",
        timeline: "4 months",
        tools: "Figma, React Native, Firebase",
        problem:
          "Existing fitness apps are either too complex (overwhelming for beginners) or too simple (not engaging for regular users). Users need a personalized experience that adapts to their fitness level and goals while keeping them motivated.",
        research: [
          "Interviewed 15 fitness app users across different experience levels",
          "Analyzed app store reviews of top fitness apps",
          "Conducted diary studies with 8 participants over 2 weeks",
          "Identified key pain points: lack of personalization, poor progress tracking, low motivation",
          'Created personas: "The Beginner", "The Regular", and "The Enthusiast"',
        ],
        problemStatement:
          "Fitness enthusiasts need a personalized workout app that adapts to their level, tracks progress meaningfully, and keeps them motivated without feeling overwhelming.",
        goals: [
          "Create adaptive workout recommendations based on user progress",
          "Design clear, motivating progress visualization",
          "Build in social features that enhance rather than distract",
          "Ensure the app works for both beginners and advanced users",
        ],
        ideation:
          "I designed a system that starts simple and reveals complexity as users progress. The onboarding collects fitness goals and experience level, then generates a personalized plan. I created wireframes for key flows: workout execution, progress tracking, and plan adjustments.",
        design:
          "The final design uses a clean, energetic aesthetic with clear typography and ample whitespace. Workout screens are distraction-free with large, easy-to-tap controls. Progress is visualized through charts and milestone celebrations. The app adapts its interface based on user experience level.",
        outcome: {
          metrics: [
            "4.8/5 average app store rating",
            "65% 30-day retention rate",
            "Users complete 40% more workouts than industry average",
          ],
          learnings: [
            "Personalization significantly increases engagement and retention",
            "Celebrating small wins (streaks, milestones) is highly motivating",
            "Beginner users need more guidance and encouragement",
            "Offline mode is essential for workout apps",
          ],
        },
      },
    };

    // Get case study data
    const caseStudy = caseStudies[projectId] || caseStudies["raide"];

    // Generate HTML
    const html = `
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
                    <div class="case-study-meta-item">
                        <div class="case-study-meta-label">Timeline</div>
                        <div class="case-study-meta-value">${
                          caseStudy.timeline
                        }</div>
                    </div>
                    <div class="case-study-meta-item">
                        <div class="case-study-meta-label">Tools</div>
                        <div class="case-study-meta-value">${
                          caseStudy.tools
                        }</div>
                    </div>
                </div>
            </div>
            
            <div class="case-study-section">
                <h2>Problem</h2>
                <p>${caseStudy.problem}</p>
            </div>
            
            <div class="case-study-section">
                <h2>Research</h2>
                <ul>
                    ${caseStudy.research
                      .map((item) => `<li>${item}</li>`)
                      .join("")}
                </ul>
            </div>
            
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
            
            <div class="case-study-section">
                <h2>Ideation</h2>
                <p>${caseStudy.ideation}</p>
                <div class="case-study-image">
                    <img src="assets/img/${projectId}-wireframes.jpg" alt="${
      caseStudy.title
    } wireframes">
                </div>
            </div>
            
            <div class="case-study-section">
                <h2>Design</h2>
                <p>${caseStudy.design}</p>
                <div class="case-study-image">
                    <img src="assets/img/${projectId}-design.jpg" alt="${
      caseStudy.title
    } final design">
                </div>
            </div>
            
            <div class="case-study-section">
                <h2>Outcome</h2>
                <h3>Metrics</h3>
                <ul>
                    ${caseStudy.outcome.metrics
                      .map((metric) => `<li>${metric}</li>`)
                      .join("")}
                </ul>
                <h3>Key Learnings</h3>
                <ul>
                    ${caseStudy.outcome.learnings
                      .map((learning) => `<li>${learning}</li>`)
                      .join("")}
                </ul>
            </div>
        `;

    caseStudyContent.innerHTML = html;

    // Update page title
    document.title = `${caseStudy.title} — Kayla Heady`;
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
