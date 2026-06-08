'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search } from 'lucide-react';
import Link from 'next/link';
import type { ClientPost } from '@/lib/blog';

const CATEGORIES = [
  'Tous les articles',
  'Communication Externe',
  'Communication Interne',
  'Événementiel',
  'Marketing Digital',
  'Stratégie',
  'Innovation',
];

const BlogList = ({ posts }: { posts: ClientPost[] }) => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tous les articles');

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'Tous les articles' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-[#023654] py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512314889357-e157c22f938d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-norwester mb-8">
              NOS <span className="text-[#EB6718]">ACTUALITÉS</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez nos derniers articles, conseils et études de cas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-[#012A43]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FDE444] transition-all duration-300"
              />
            </div>
            <div className="flex flex-wrap gap-3">
              {CATEGORIES.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-norwester transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#EB6718] text-white scale-105'
                      : 'bg-white/5 text-white hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section ref={ref1} className="py-24 bg-[#012A43]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <p className="text-center text-gray-400 text-lg">Aucun article ne correspond à votre recherche.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView1 ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
                  className="bg-[#023654] rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-[1.02] group"
                >
                  <Link href={`/actualites/${post.slug}`} className="block">
                    <div className="relative h-48 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    <div className="p-6">
                      <div className="mb-4">
                        <span className="px-3 py-1 bg-[#EB6718] text-white text-xs font-norwester rounded-full uppercase tracking-wide">
                          {post.category}
                        </span>
                      </div>

                      <h2 className="text-xl font-norwester text-white mb-3 line-clamp-2 group-hover:text-[#EB6718] transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-gray-300 mb-6 line-clamp-3">{post.excerpt}</p>

                      <div className="flex items-center mb-4">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={post.author.avatar}
                          alt={post.author.name}
                          className="h-10 w-10 rounded-full object-cover border-2 border-white/10"
                        />
                        <div className="ml-3">
                          <p className="text-white font-medium">{post.author.name}</p>
                          <p className="text-gray-400 text-sm">{post.author.role}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-400 pt-4 border-t border-white/10">
                        <span>
                          {post.publishedAt
                            ? new Date(post.publishedAt).toLocaleDateString('fr-FR')
                            : ''}
                        </span>
                        <span>{post.readTime} min de lecture</span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogList;
