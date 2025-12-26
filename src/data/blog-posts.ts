export const blogPosts = [
    {
        slug: "building-farm-management-system",
        title: "Building a Farm Management System with Next.js",
        excerpt: "How I used Firebase and Tailwind to digitize local agriculture and solve real-world logistical problems.",
        date: "Dec 20, 2025",
        readTime: "5 min read",
        tag: "Case Study",
        image: "/blog/farm-system.jpg",
        content: `
      <p class="mb-6 text-lg text-slate-300">
        Agriculture is one of the oldest industries, but it's often the last to benefit from modern software. 
        When I set out to build the <strong>Mokua Farm Management System</strong>, my goal was simple: 
        turn a chaotic mess of spreadsheets and notebooks into a streamlined, digital command center.
      </p>

      <h3 class="text-2xl font-bold text-white mb-4 mt-8">The Problem</h3>
      <p class="mb-6 text-slate-300">
        Managing a family farm involves tracking dozens of variables: livestock health, feed inventory, crop cycles, and financial records. 
        Doing this manually meant data was often lost, outdated, or hard to analyze. We needed a "Single Source of Truth."
      </p>

      <h3 class="text-2xl font-bold text-white mb-4 mt-8">The Tech Stack</h3>
      <ul class="list-disc list-inside mb-6 text-slate-300 space-y-2">
        <li><strong>Next.js (App Router)</strong>: For a fast, SEO-friendly frontend.</li>
        <li><strong>Tailwind CSS</strong>: To rapidly build a mobile-first UI that works for farmers in the field.</li>
        <li><strong>Firebase</strong>: For real-time database capabilities (Firestore) and authentication.</li>
        <li><strong>Recharts</strong>: To visualize milk production trends and financial growth.</li>
      </ul>

      <h3 class="text-2xl font-bold text-white mb-4 mt-8">Key Challenge: Offline Availability</h3>
      <p class="mb-6 text-slate-300">
        Internet connectivity on the farm is spotty. I had to ensure the app could cache data locally and sync when back online. 
        Firebase's offline persistence was a lifesaver here. By enabling \`enableIndexedDbPersistence\`, read/write operations continued smoothly even without a signal.
      </p>

      <h3 class="text-2xl font-bold text-white mb-4 mt-8">Results</h3>
      <p class="mb-6 text-slate-300">
        Since deploying the system, we've reduced administrative time by <strong>40%</strong> and caught two potential livestock health issues early thanks to the data visualization dashboard.
        It proved that even "traditional" fields can be revolutionized with the right code.
      </p>
    `
    },
    {
        slug: "python-to-typescript",
        title: "Why I Switched from Python to TypeScript",
        excerpt: "A deep dive into type safety, developer experience, and why I chose the JS ecosystem for web development.",
        date: "Nov 15, 2025",
        readTime: "4 min read",
        tag: "Opinion",
        image: "/blog/ts-vs-py.jpg",
        content: `
      <p class="mb-6 text-lg text-slate-300">
        I started my coding journey with <strong>Python</strong>. It's beautiful, readable, and perfect for the scripts and AI tools I was building (like my Jarvis assistant).
        But as I moved into full-stack web development, I hit a wall.
      </p>

      <h3 class="text-2xl font-bold text-white mb-4 mt-8">The "Undefined" Problem</h3>
      <p class="mb-6 text-slate-300">
        Python interprets code at runtime. This meant I would often ship code that looked fine, only to crash because of a \`NoneType\` error deep in a user flow.
        I needed more confidence <em>before</em> I ran the code. Enter <strong>TypeScript</strong>.
      </p>

      <h3 class="text-2xl font-bold text-white mb-4 mt-8">The Unified Stack</h3>
      <p class="mb-6 text-slate-300">
        Context switching is a productivity killer. Writing Python for the backend (Flask/Django) and JavaScript for the frontend (React) meant constantly shifting mental gears.
        <br/><br/>
        With TypeScript/Next.js, I write the same language across the entire stack.
        I can share types between my database schema (Prisma/Drizzle) and my frontend components. 
        If I change a database field, my frontend immediately screams at me with a red squiggly line. That feedback loop is addictive.
      </p>

      <h3 class="text-2xl font-bold text-white mb-4 mt-8">Do I Still Use Python?</h3>
      <p class="mb-6 text-slate-300">
        Absolutely. For data analysis, scripting, and heavy AI tasks, Python is unbeatable. 
        But for building robust, interactive user interfaces and scalable web servers? TypeScript has won my heart.
      </p>
    `
    },
    {
        slug: "system-design-scalability",
        title: "Understanding System Design: The Info Nest Library",
        excerpt: "Key principles of normalization and OOP I learned while architecting a complex library management system.",
        date: "Oct 10, 2025",
        readTime: "6 min read",
        tag: "Engineering",
        image: "/blog/system-design.jpg",
        content: `
      <p class="mb-6 text-lg text-slate-300">
        Building "Info Nest," a Smart Library Management System, wasn't just about writing code—it was a lesson in <strong>Architecture</strong>.
        When you have thousands of books, hundreds of users, and strict borrowing limits, a spaghetti-code solution collapses quickly.
      </p>

      <h3 class="text-2xl font-bold text-white mb-4 mt-8">Object-Oriented Design</h3>
      <p class="mb-6 text-slate-300">
        I leaned heavily on OOP principles. I created base classes for \`User\` (extended by \`Student\` and \`Admin\`) and \`Resource\` (extended by \`Book\` and \`Journal\`).
        This allowed for polymorphism: checking out a Book and checking out a Journal share the same logic, but with different borrowing duration limits.
      </p>

      <h3 class="text-2xl font-bold text-white mb-4 mt-8">Database Normalization</h3>
      <p class="mb-6 text-slate-300">
        One of the biggest mistakes juniors make is data duplication. 
        I ensured my database was normalized to at least <strong>3NF (Third Normal Form)</strong>.
        Instead of storing "Author Name" in the Books table, I linked to an Authors table via an ID. 
        This keeps the database clean and makes updates instant across the entire system.
      </p>

      <h3 class="text-2xl font-bold text-white mb-4 mt-8">Conclusion</h3>
      <p class="mb-6 text-slate-300">
        Thinking about <em>structure</em> before writing a single line of code saved me weeks of refactoring later. 
        Whether it's a library system or a global SaaS platform, the fundamentals of clean system design remain the same.
      </p>
    `
    }
];
