import React from "react";

const Content: React.FC<{ sidebarOpen: boolean }> = ({ sidebarOpen }) => {
  return (
    <main
      className={`flex-1 overflow-auto p-8 transition-all duration-300
        ${sidebarOpen ? "lg:ml-64" : "lg:ml-16"} ml-0`}
    >
      {/* Internal Styles */}
      <style>
        {`
          /* Section fade-in on scroll */
          section {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
          }
          section.visible {
            opacity: 1;
            transform: translateY(0);
          }

          /* Hover effect for code blocks */
          pre {
            background: #1e293b;
            color: #d1fae5;
            padding: 1rem;
            border-radius: 0.5rem;
            overflow-x: auto;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          pre:hover {
            transform: translateY(-3px) scale(1.02);
            box-shadow: 0 10px 25px rgba(0,0,0,0.5);
          }

          /* Job cards / content blocks */
          .content-card {
            background: #f1f5f9;
            border-radius: 0.75rem;
            padding: 1.5rem;
            margin-bottom: 1.5rem;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          .content-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 25px rgba(0,0,0,0.2);
          }

          /* Highlight headings on hover */
          h2:hover, h3:hover {
            color: #3b82f6;
            transition: color 0.3s;
          }

          /* Smooth scroll */
          html {
            scroll-behavior: smooth;
          }
        `}
      </style>

      {/* Introduction */}
      <section id="intro" className="mb-12 content-card">
        <h2 className="text-3xl font-bold mb-4">Introduction</h2>
        <p>
          The <strong>Job Portal Web Application</strong> connects job seekers and
          employers efficiently. Built with <strong>Laravel</strong> for both backend
          and frontend, it provides a secure, scalable, and responsive solution.
        </p>
        <ul className="list-disc pl-6 mt-2">
          <li>Job listings and search</li>
          <li>Employer dashboard</li>
          <li>Job seeker profile management</li>
          <li>Application management</li>
          <li>Admin panel for system management</li>
          <li>Notification system</li>
        </ul>
      </section>

      {/* Setup Guide */}
      <section id="setup" className="mb-12 content-card">
        <h2 className="text-3xl font-bold mb-4">Setup Guide</h2>
        <pre>
{`# Clone repository
git clone https://github.com/username/job-portal.git
cd job-portal

# Install PHP dependencies
composer install

# Install Node dependencies
npm install
npm run build  # or npm run dev for development

# Configure environment
cp .env.example .env
php artisan key:generate

# Run migrations and seeders
php artisan migrate --seed

# Start server
php artisan serve`}
        </pre>
      </section>

      {/* API Reference */}
      <section id="api" className="mb-12 content-card">
        <h2 className="text-3xl font-bold mb-4">API Reference</h2>
        <p>Key API endpoints for frontend consumption:</p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>
            <code>GET /api/jobs</code> – Fetch all job listings.
          </li>
          <li>
            <code>GET /api/jobs/{'{id}'}</code> – Fetch a single job detail.
          </li>
          <li>
            <code>POST /api/apply</code> – Submit a job application.
          </li>
          <li>
            <code>GET /api/user/profile</code> – Fetch logged-in user profile.
          </li>
        </ul>
      </section>

      {/* Examples */}
      <section id="examples" className="mb-12 content-card">
        <h2 className="text-3xl font-bold mb-4">Examples</h2>

        <h3 className="text-xl font-semibold mb-2">Laravel Controller Example</h3>
        <pre>
{`namespace App\Http\Controllers;

use App\Models\Job;
use Illuminate\Http\Request;

class JobController extends Controller
{
    public function index()
    {
        $jobs = Job::latest()->paginate(10);
        return view('jobs.index', compact('jobs'));
    }

    public function show($id)
    {
        $job = Job::findOrFail($id);
        return view('jobs.show', compact('job'));
    }
}`}
        </pre>

        <h3 className="text-xl font-semibold mt-4 mb-2">Frontend Fetch Example</h3>
        <pre>
{`async function fetchJobs() {
  const response = await fetch("/api/jobs");
  const data = await response.json();
  console.log(data);
}

fetchJobs();`}
        </pre>

        <h3 className="text-xl font-semibold mt-4 mb-2">Blade Template Example</h3>
        <pre>
{`@foreach($jobs as $job)
<div class="job-card p-4 mb-4 border rounded-lg shadow hover:shadow-lg transition">
    <h3 class="text-xl font-bold">{{ $job->title }}</h3>
    <p>{{ Str::limit($job->description, 100) }}</p>
    <a href="{{ route('job.show', $job->id) }}" class="text-blue-500 hover:underline">View Details</a>
</div>
@endforeach`}
        </pre>
      </section>

      {/* Scroll Animation Script */}
      <script>
        {`
          const sections = document.querySelectorAll('section');
          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                entry.target.classList.add('visible');
              }
            });
          }, { threshold: 0.1 });

          sections.forEach(section => observer.observe(section));
        `}
      </script>
    </main>
  );
};

export default Content;
