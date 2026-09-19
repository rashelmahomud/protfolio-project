'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const projectsData = [
  {
    id: 1,
    title: 'Healthcare & Doctor Appointment System',
    description: 'A comprehensive healthcare web application featuring doctor profiles, appointment booking, and real-time dashboard management.',
    tags: ['Next.js', 'Tailwind CSS', 'Firebase'],
    image: "https://i.ibb.co.com/Zp0zzdbP/d.png",
    liveUrl: 'https://helth-care-eight.vercel.app',
    githubUrl: 'https://github.com/rashelmahomud/helth-care',
    category: 'Full Stack',
  },
  {
    id: 2,
    title: 'Webb School - E-Learning Platform',
    description: 'Full-stack course browsing platform with user authentication, role-based admin controls, and integrated Stripe payments.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    image: "https://i.ibb.co.com/Zp0zzdbP/d.png",
    liveUrl: 'https://webb-school-mission-2022.vercel.app/',
    githubUrl: 'https://github.com/dodotechbd/Webb-School',
    category: 'Full Stack',
  },
  {
    id: 3,
    title: 'Vegist Shop - Inventory Management',
    description: 'A warehouse and inventory management dashboard application designed for streamlined stock tracking and data visualization.',
    tags: ['Next.js', 'Tailwind CSS'],
    image: "https://i.ibb.co.com/h19YnV53/vegist.png",
    liveUrl: 'https://vegist-shop.vercel.app/',
    githubUrl: 'https://github.com/rashelmahomud/VEGIST_SHOP',
    category: 'React.js',
  },
];

const categories = ['All', 'Next.js', 'Full Stack', 'React.js'];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      {/* Load FontAwesome CSS CDN for FontAwesome classes */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />

      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Explore a selection of my recent web development work, ranging from full-stack applications to modern frontend interfaces.
          </p>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25'
                  : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-500/10"
            >
              {/* Project Image Container */}
   {/* Dynamic Image Container */}
              <div className="relative h-52 w-full overflow-hidden bg-slate-800">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-slate-600 bg-slate-800">
                    <i className="fa-solid fa-folder-open text-5xl opacity-40"></i>
                  </div>
                )}
              </div>

              {/* Content Area */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-cyan-300 border border-slate-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links with FontAwesome Icons */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
                    >
                      <i className="fa-brands fa-github text-base"></i> Code
                    </Link>
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm px-4 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500 hover:text-slate-950 font-medium transition-all"
                    >
                      Live Demo <i className="fa-solid fa-external-link-alt text-xs"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State Check */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-slate-500">
            No projects found in this category.
          </div>
        )}

      </div>
    </div>
  );
}