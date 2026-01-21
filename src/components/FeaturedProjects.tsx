import { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { Project, ProjectCategory } from '../types';

const FeaturedProjects = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | 'All'>('All');

  const projects: Project[] = [
    {
      id: '1',
      title: 'Modern Minimalist Living',
      category: 'Living Rooms',
      imageUrl:
        'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A serene space combining comfort and elegance',
      location: 'New York, NY',
      year: 2023,
    },
    {
      id: '2',
      title: 'Elegant Kitchen Design',
      category: 'Kitchens',
      imageUrl:
        'https://images.pexels.com/photos/2089698/pexels-photo-2089698.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Where culinary art meets sophisticated design',
      location: 'Los Angeles, CA',
      year: 2023,
    },
    {
      id: '3',
      title: 'Tranquil Master Suite',
      category: 'Bedrooms',
      imageUrl:
        'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A peaceful retreat for rest and rejuvenation',
      location: 'Miami, FL',
      year: 2024,
    },
    {
      id: '4',
      title: 'Spa-Inspired Bathroom',
      category: 'Bathrooms',
      imageUrl:
        'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Luxury and relaxation in perfect harmony',
      location: 'San Francisco, CA',
      year: 2023,
    },
    {
      id: '5',
      title: 'Urban Oasis Terrace',
      category: 'Outdoor',
      imageUrl:
        'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'An outdoor sanctuary in the heart of the city',
      location: 'Chicago, IL',
      year: 2024,
    },
    {
      id: '6',
      title: 'Contemporary Office Space',
      category: 'Commercial',
      imageUrl:
        'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Inspiring productivity through thoughtful design',
      location: 'Boston, MA',
      year: 2023,
    },
  ];

  const categories: Array<ProjectCategory | 'All'> = [
    'All',
    'Living Rooms',
    'Kitchens',
    'Bedrooms',
    'Bathrooms',
    'Outdoor',
    'Commercial',
  ];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Featured <span className="text-purple-600 relative">
              Projects
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of transformative spaces that blend timeless elegance
            with modern functionality
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-sans text-sm transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-200'
                  : 'bg-white text-gray-700 hover:bg-purple-50 border border-purple-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg shadow-purple-100/30 hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-300 border border-purple-100"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-sans font-medium flex items-center gap-2 shadow-lg">
                  View Project
                  <FiArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="p-6">
                <span className="text-xs font-sans text-pink-500 uppercase tracking-wider font-semibold">
                  {project.category}
                </span>
                <h3 className="font-serif text-2xl text-gray-800 mt-2 mb-2">
                  {project.title}
                </h3>
                <p className="font-sans text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{project.location}</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 font-sans font-medium shadow-lg shadow-purple-200">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;