import React, { useState } from 'react';
import honeyDipperUrl from '../assets/Honeywithdrop.jpg';

export default function LocalSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Mock producer data for local honey discovery
  const producers = [
    {
      id: 1,
      name: 'Kern River Apiaries',
      location: 'Bakersfield, CA',
      distance: '3.2 miles away',
      honeyType: 'Wildflower Raw Honey',
      traceability: 'Verified Batch #KR-409',
      image: 'https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 2,
      name: 'Blossom & Hive Co.',
      location: 'Oildale, CA',
      distance: '6.5 miles away',
      honeyType: 'Almond Blossom Honey',
      traceability: 'Verified Batch #BH-112',
      image: 'https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=500&q=80',
    },
    {
      id: 3,
      name: 'Sierra Foothill Honey',
      location: 'Tehachapi, CA',
      distance: '24.1 miles away',
      honeyType: 'Clover & Mountain Sage',
      traceability: 'Verified Batch #SF-883',
      image: 'https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=500&q=80',
    },
  ];

  // Filtering logic
  const filteredProducers = producers.filter((producer) => {
    const matchesSearch =
      producer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      producer.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      producer.honeyType.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || producer.honeyType.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });
  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', fontFamily: 'sans-serif' }}>
   <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
  <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      gap: '20px' 
  }}>
    {/* Rending the image */}
    <img 
      src={honeyDipperUrl} 
      alt="Honey Dipper Logo" 
      style={{ width: '60px', height: 'auto', borderRadius: '8px' }} 
    />

    <h1 style={{ 
        fontSize: '2.5rem', 
        color: '#ffb703', // Honey yellow
        margin: 0, 
        fontWeight: 'bold' 
    }}>
      Honeyfinder
    </h1>
  </div>

  <p style={{ color: '#a0aec0', marginTop: '10px' }}>
    Discover nearby producers, verify harvest batches, and connect directly.
  </p>
</header>

      {/* Search & Filter Controls */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
        <input
          type="text"
          placeholder="Search by producer, location, or honey type..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '0.75rem 1rem', width: '360px', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }}
        />
        
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ padding: '0.75rem 1rem', borderRadius: '8px', border: '1px solid #ccc', fontSize: '1rem' }}
        >
          <option value="All">All Honey Types</option>
          <option value="Wildflower">Wildflower</option>
          <option value="Almond">Almond Blossom</option>
          <option value="Clover">Clover & Sage</option>
        </select>
      </div>

      {/* Results Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {filteredProducers.length > 0 ? (
          filteredProducers.map((producer) => (
            <div key={producer.id} style={{ border: '1px solid #e0e0e0', borderRadius: '12px', overflow: 'hidden', background: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
              <img src={producer.image} alt={producer.name} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
              <div style={{ padding: '1.25rem' }}>
                <span style={{ fontSize: '0.85rem', color: '#d35400', fontWeight: 'bold' }}>{producer.distance}</span>
                <h3 style={{ margin: '0.5rem 0', color: '#2c3e50' }}>{producer.name}</h3>
                <p style={{ color: '#7f8c8d', margin: '0.25rem 0', fontSize: '0.95rem' }}>📍 {producer.location}</p>
                <p style={{ color: '#34495e', margin: '0.5rem 0 1rem' }}>🍯 <strong>{producer.honeyType}</strong></p>
                <div style={{ background: '#f8f9fa', padding: '0.5rem', borderRadius: '6px', fontSize: '0.85rem', color: '#555', marginBottom: '1rem', border: '1px solid #eee' }}>
                  🏷️ {producer.traceability}
                </div>
                <button style={{ width: '100%', padding: '0.75rem', background: '#f39c12', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.95rem' }}>
                  View Producer Profile
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: 'center', gridColumn: '1 / -1', color: '#777', padding: '2rem' }}>No local honey producers found matching your search.</p>
        )}
      </div>
    </div>
  );
}