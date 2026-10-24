import { useState, useEffect } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [slideIndexes, setSlideIndexes] = useState({});
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState('');

  const projects = [
    {
      id: 1,
      title: 'AirVista - Platform Monitoring Kualitas Udara',
      category: 'Web',
      images: [
        '/src/assets/projects/projects1/1.png',
        '/src/assets/projects/projects1/2.png',
        '/src/assets/projects/projects1/3.png',
        '/src/assets/projects/projects1/4.png',
        '/src/assets/projects/projects1/5.png',
        '/src/assets/projects/projects1/6.png'
      ],
      videoUrl: 'https://drive.google.com/file/d/1nOYjQ9u8vlUqqH1QnuorUZgie0QuAP-b/preview',
      thumbnail: '/src/assets/projects/projects1/1.png',
      description: 'Platform monitoring kualitas udara dan analisis lingkungan realtime berbasis AI.',
      fullDescription: `AirVista adalah platform monitoring kualitas udara serta analisis lingkungan realtime bertenaga kecerdasan buatan (AI) kelas dunia. Platform ini mengintegrasikan komputasi satelit, algoritma sains partikulat EPA, dan model generatif canggih guna menyajikan transparansi kualitas ekosistem bagi masyarakat luas demi keselamatan bersama.

      Teknologi yang digunakan:
      • React 19 dengan Vite untuk performa super cepat
      • Leaflet untuk visualisasi kartografi geospasial
      • Open-Meteo untuk data cuaca keyless
      • Google Gemini AI untuk model penalaran transformatif
      • Express.js sebagai backend server

      Fitur Utama:
      • Dashboard monitoring kualitas udara realtime
      • Peta interaktif dengan visualisasi AQI
      • Analisis tren polusi udara
      • Perbandingan kualitas antar kota
      • Konsultasi AI untuk rekomendasi kesehatan
      • Laporan dan insight berbasis data satelit`,
      tech: ['React', 'Vite', 'Express.js', 'Leaflet', 'Google Gemini AI'],
      features: [
        'Dashboard Monitoring Kualitas Udara Realtime',
        'Visualisasi Peta Interaktif (Leaflet)',
        'Analisis Tren Polusi Udara',
        'Perbandingan Kualitas Antar Kota',
        'Konsultasi AI dengan Google Gemini',
        'Laporan Data Berbasis Satelit'
      ],
      year: '2025',
      role: 'Web Developer',
      downloadLink: null,
      demoLink: null,
      githubLink: 'https://github.com/alfrzimhmd'
    },

    {
      id: 2,
      title: 'Sistem KRS - Kartu Rencana Studi',
      category: 'Web',
      images: [
        '/src/assets/projects/projects2/1.png',
        '/src/assets/projects/projects2/2.png',
        '/src/assets/projects/projects2/3.png',
        '/src/assets/projects/projects2/4.png'
      ],
      videoUrl: null,
      thumbnail: null,
      description: 'Sistem Kartu Rencana Studi (KRS) dengan role Mahasiswa dan Dosen.',
      fullDescription: `Sistem KRS ini dibangun dengan Laravel (PHP Framework) untuk memudahkan mahasiswa dalam mengajukan rencana studi dan dosen dalam mengelola mata kuliah.

      Halaman Mahasiswa:
      • Login sebagai mahasiswa
      • Mengajukan KRS berdasarkan jenis semester (Ganjil/Genap)
      • Memilih dosen pengampu untuk setiap mata kuliah
      • Melihat statistik: Total SKS, Total Matakuliah, Status Pengajuan, dan IPK
      • Dashboard personal dengan informasi akademik

      Halaman Dosen:
      • Login sebagai dosen
      • Menyetujui atau menolak KRS mahasiswa
      • Menambahkan mata kuliah berdasarkan semester
      • Melihat daftar mahasiswa yang mengajukan KRS

      Teknologi: Laravel, PHP, MySQL, Bootstrap, JavaScript.`,
      tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
      features: [
        'Login Multi-Role (Mahasiswa & Dosen)',
        'Pengajuan KRS Berdasarkan Semester',
        'Pemilihan Dosen Pengampu',
        'Statistik Akademik (SKS, Matakuliah, IPK)',
        'Persetujuan & Penolakan KRS',
        'Manajemen Mata Kuliah per Semester'
      ],
      year: '2025',
      role: 'Web Developer',
      downloadLink: null,
      demoLink: null,
      githubLink: 'https://github.com/alfrzimhmd/krs_platfrom'
    },

    {
      id: 3,
      title: 'Sistem Apotek Online',
      category: 'Web',
      images: [
        '/src/assets/projects/projects3/1.png',
        '/src/assets/projects/projects3/2.png',
        '/src/assets/projects/projects3/3.png'
      ],
      videoUrl: null,
      thumbnail: null,
      description: 'Website apotek online dengan role Pegawai dan Pelanggan.',
      fullDescription: `Website Apotek Online ini dibangun dengan PHP Native (tanpa framework) untuk memudahkan pengelolaan apotek dan pembelian obat secara online.

      Halaman Pegawai:
      • Login sebagai pegawai apotek
      • Dashboard statistik pemasukan & pengeluaran
      • Mengelola data obat (tambah, edit, hapus)
      • Mengelola data pelanggan
      • Melihat transaksi dan laporan bulanan
      • Manajemen stok obat

      Halaman Pelanggan:
      • Login sebagai pelanggan
      • Membeli obat secara online
      • Konsultasi dengan pegawai apotek
      • Melihat riwayat belanja
      • Fitur pengingat obat (reminder)
      • Memberi rating dan ulasan untuk apotek

      Teknologi: PHP Native, MySQL, HTML, CSS, JavaScript.`,
      tech: ['PHP Native', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
      features: [
        'Login Multi-Role (Pegawai & Pelanggan)',
        'Dashboard Statistik Pemasukan & Pengeluaran',
        'Manajemen Obat (CRUD)',
        'Manajemen Pelanggan',
        'Transaksi & Laporan Bulanan',
        'Pembelian Obat Online',
        'Konsultasi Online',
        'Riwayat Belanja',
        'Pengingat Obat (Reminder)',
        'Rating & Ulasan Apotek'
      ],
      year: '2025',
      role: 'Web Developer',
      downloadLink: null,
      demoLink: null,
      githubLink: 'https://github.com/alfrzimhmd/php/tree/main/apotek'
    },

    {
      id: 4,
      title: 'SmartInventory - Aplikasi Manajemen Stok & Transaksi',
      category: 'Mobile',
      images: [
        '/src/assets/projects/projects4/1.jpeg',
        '/src/assets/projects/projects4/2.jpeg',
        '/src/assets/projects/projects4/3.jpeg',
        '/src/assets/projects/projects4/4.jpeg',
        '/src/assets/projects/projects4/5.jpeg',
        '/src/assets/projects/projects4/6.jpeg',
        '/src/assets/projects/projects4/7.jpeg'
      ],
      videoUrl: null,
      thumbnail: null,
      description: 'Aplikasi mobile untuk manajemen stok dan transaksi dengan sistem pembelian & penjualan.',
      fullDescription: `SmartInventory adalah aplikasi mobile untuk manajemen stok dan transaksi yang dibangun dengan Flutter dan Dart. Aplikasi ini dirancang untuk membantu pengelolaan inventaris secara efisien dengan sistem transaksi yang terintegrasi.

      Fitur Utama:
      • Dashboard Statistik Harian: Menampilkan ringkasan transaksi, stok, dan performa harian
      • Manajemen Produk: Menambah, mengedit, dan menghapus produk
      • Sistem Transaksi: Setiap perubahan stok harus melalui transaksi pembelian atau penjualan
      • Manajemen Supplier: Terhubung langsung dengan transaksi pembelian
      • Analisis Transaksi: Analisis berdasarkan hari, minggu, bulan, dan tahun

      Teknologi: Flutter, Dart, SQLite, Provider (State Management).`,
      tech: ['Flutter', 'Dart', 'SQLite', 'Provider'],
      features: [
        'Dashboard Statistik Harian',
        'Manajemen Produk (CRUD)',
        'Sistem Transaksi Pembelian & Penjualan',
        'Manajemen Supplier',
        'Analisis Transaksi (Hari/Minggu/Bulan/Tahun)',
        'Laporan Stok Real-time'
      ],
      year: '2025',
      role: 'App Developer',
      downloadLink: null,
      demoLink: null,
      githubLink: 'https://github.com/alfrzimhmd/smart_inventory'
    },

    {
      id: 5,
      title: 'NutriScan - Aplikasi Deteksi Nutrisi Makanan',
      category: 'Mobile',
      images: [
        '/src/assets/projects/projects5/1.jpeg',
        '/src/assets/projects/projects5/2.jpeg',
        '/src/assets/projects/projects5/3.jpeg',
        '/src/assets/projects/projects5/4.jpeg',
        '/src/assets/projects/projects5/5.jpeg',
        '/src/assets/projects/projects5/6.jpeg',
        '/src/assets/projects/projects5/7.jpeg'
      ],
      videoUrl: null,
      thumbnail: null,
      description: 'Aplikasi deteksi nutrisi makanan dengan target nutrisi harian dan fitur edukasi.',
      fullDescription: `NutriScan adalah aplikasi mobile berbasis Flutter untuk mendeteksi nutrisi makanan menggunakan TensorFlow Lite. Aplikasi ini memungkinkan pengguna memindai makanan dan mendapatkan informasi nutrisi lengkap.

      Fitur Utama:
      • Dashboard Statistik Nutrisi Harian: Menampilkan total kalori, protein, karbohidrat, lemak harian
      • Scan Makanan: Deteksi nutrisi makanan dengan TensorFlow Lite
      • Target Nutrisi Harian: User dapat menetapkan target nutrisi harian
      • Riwayat Scan: Menyimpan riwayat scan makanan
      • Misi & Tantangan: Misi scan makanan dengan target nutrisi tertentu
      • Edukasi Gizi: Artikel edukasi tentang makanan, gizi, dan pola makan sehat

      Teknologi: Flutter, Dart, TensorFlow Lite, SQLite, BLoC/Cubit.`,
      tech: ['Flutter', 'Dart', 'TensorFlow Lite', 'SQLite', 'BLoC'],
      features: [
        'Dashboard Statistik Nutrisi Harian',
        'Scan Makanan com TensorFlow Lite',
        'Target Nutrisi Harian (Kalori, Protein, Karbo, Lemak)',
        'Riwayat Scan Makanan',
        'Misi & Tantangan Nutrisi',
        'Edukasi Gizi & Pola Makan'
      ],
      year: '2025',
      role: 'App Developer',
      downloadLink: null,
      demoLink: null,
      githubLink: 'https://github.com/alfrzimhmd/food_detection'
    },

    {
      id: 6,
      title: 'UI/UX Design - Sistem Informasi Mahasiswa (SIMAHO)',
      category: 'Design',
      images: [
        '/src/assets/projects/projects6/1.png',
        '/src/assets/projects/projects6/2.png',
        '/src/assets/projects/projects6/3.png',
        '/src/assets/projects/projects6/4.png',
        '/src/assets/projects/projects6/5.png'
      ],
      videoUrl: null,
      thumbnail: null,
      description: 'UI/UX Design untuk Sistem Informasi Mahasiswa dengan berbagai fitur akademik.',
      fullDescription: `UI/UX Design untuk Sistem Informasi Mahasiswa (SIMAHO) yang dirancang menggunakan Figma. Desain ini dibuat untuk memberikan pengalaman pengguna yang intuitif dan menyenangkan bagi mahasiswa dan dosen.

      Fitur yang Didukung:
      • Login Mahasiswa & Dosen: Autentikasi dual-role
      • Informasi Beasiswa: Menampilkan daftar beasiswa yang tersedia
      • Informasi Volunteer: Daftar kegiatan volunteer
      • Informasi Seminar: Jadwal dan detail seminar
      • Informasi Magang: Daftar program magang
      • Informasi KKN & Sempro: Informasi Kuliah Kerja Nyata dan Seminar Proposal

      Teknologi: Figma (UI/UX Design), Design System, Prototype Interaktif.`,
      tech: ['Figma', 'UI/UX Design', 'Prototyping'],
      features: [
        'Login Multi-Role (Mahasiswa & Dosen)',
        'Informasi Beasiswa',
        'Informasi Volunteer',
        'Informasi Seminar',
        'Informasi Magang',
        'Informasi KKN & Sempro',
        'Design System & Prototype Interaktif'
      ],
      year: '2025',
      role: 'UI/UX Designer',
      downloadLink: null,
      demoLink: 'https://www.figma.com/design/nBmcJAtyxkAqh8lM5x94BG/SIMAWA?node-id=0-1&t=viu214Z00vYbJmQh-1',
      githubLink: null
    }
  ];

  useEffect(() => {
    const initialIndexes = {};
    projects.forEach(project => {
      initialIndexes[project.id] = 0;
    });
    setSlideIndexes(initialIndexes);
  }, []);

  useEffect(() => {
    const intervals = projects.map(project => {
      if (project.images.length <= 1) return null;
      
      return setInterval(() => {
        setSlideIndexes(prev => {
          const currentIndex = prev[project.id] || 0;
          const nextIndex = (currentIndex + 1) % project.images.length;
          return {
            ...prev,
            [project.id]: nextIndex
          };
        });
      }, 3000);
    });

    return () => {
      intervals.forEach(interval => {
        if (interval) clearInterval(interval);
      });
    };
  }, [projects]);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  const openFullscreen = (imageSrc) => {
    setFullscreenImage(imageSrc);
    setIsFullscreen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    document.body.style.overflow = 'auto';
  };

  const handleImageClick = (imageSrc) => {
    openFullscreen(imageSrc);
  };

  const handlePlayVideo = (e) => {
    const wrapper = e.currentTarget;
    const thumbnail = wrapper.querySelector('.video-thumbnail');
    const videoWrapper = wrapper.querySelector('.video-wrapper');
    const iframe = videoWrapper.querySelector('iframe');
    
    if (thumbnail && videoWrapper && iframe) {
      thumbnail.style.display = 'none';
      videoWrapper.style.display = 'block';
      iframe.src = `${selectedProject.videoUrl}?autoplay=1&mute=1`;
    }
  };

  const Icons = {
    calendar: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    user: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    github: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
    link: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    ),
    download: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    ),
    check: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    tech: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    close: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    ),
    video: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    )
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <span className="section-subtitle">My Works</span>
          <h2 className="section-title">Featured <span className="title-highlight">Projects</span></h2>
          <div className="title-line"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project) => {
            const currentSlideIndex = slideIndexes[project.id] || 0;
            const currentImage = project.images[currentSlideIndex];

            return (
              <div 
                key={project.id} 
                className="project-card"
                onClick={() => openModal(project)}
              >
                <div className="project-image">
                  <img 
                    src={currentImage} 
                    alt={project.title} 
                    className="slide-image"
                    key={currentSlideIndex}
                  />
                  {project.images.length > 1 && (
                    <div className="slide-indicators">
                      {project.images.map((_, index) => (
                        <span 
                          key={index} 
                          className={`slide-dot ${index === currentSlideIndex ? 'active' : ''}`}
                        />
                      ))}
                    </div>
                  )}
                  {project.videoUrl && (
                    <div className="video-badge">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                        <polygon points="23 7 16 12 23 17 23 7" />
                        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                      </svg>
                      Video Demo
                    </div>
                  )}
                  <div className="project-overlay">
                    <span className="view-details">View Details</span>
                  </div>
                </div>
                <div className="project-info">
                  <span className="project-category">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.slice(0, 3).map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="tech-tag more">+{project.tech.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={handleOutsideClick}>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              {Icons.close}
            </button>

            <div className="modal-gallery">
              <div className="gallery-container">
                {selectedProject.videoUrl && currentImageIndex === 0 ? (
                  <div 
                    className="video-thumbnail-wrapper"
                    onClick={handlePlayVideo}
                  >
                    <div className="video-thumbnail">
                      <img 
                        src={selectedProject.thumbnail || selectedProject.images[0]} 
                        alt={`${selectedProject.title} - Thumbnail`}
                        className="gallery-image"
                      />
                      <div className="play-button">
                        <svg viewBox="0 0 24 24" width="48" height="48" fill="currentColor">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                    </div>
                    <div className="video-wrapper" style={{ display: 'none' }}>
                      <iframe
                        src={selectedProject.videoUrl}
                        title="Project Demo Video"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                        frameBorder="0"
                      ></iframe>
                    </div>
                  </div>
                ) : (
                  <img 
                    src={selectedProject.images[currentImageIndex]} 
                    alt={`${selectedProject.title} - ${currentImageIndex + 1}`}
                    className={`gallery-image ${[4, 5, 6].includes(selectedProject.id) ? 'portrait' : ''}`}
                    onClick={() => handleImageClick(selectedProject.images[currentImageIndex])}
                    style={{ cursor: 'pointer' }}
                  />
                )}
                
                {selectedProject.images.length > 1 && (
                  <>
                    <button className="gallery-nav prev" onClick={prevImage}>
                      ‹
                    </button>
                    <button className="gallery-nav next" onClick={nextImage}>
                      ›
                    </button>
                    <div className="gallery-indicators">
                      {selectedProject.videoUrl && (
                        <span 
                          className={`indicator ${currentImageIndex === 0 ? 'active' : ''}`}
                          onClick={() => setCurrentImageIndex(0)}
                          style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
                        >
                          <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
                            <polygon points="23 7 16 12 23 17 23 7" />
                            <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                          </svg>
                        </span>
                      )}
                      {selectedProject.images.map((_, index) => {
                        const imageIndex = selectedProject.videoUrl ? index + 1 : index;
                        const isActive = selectedProject.videoUrl 
                          ? currentImageIndex === imageIndex 
                          : currentImageIndex === index;
                        return (
                          <span 
                            key={index} 
                            className={`indicator ${isActive ? 'active' : ''}`}
                            onClick={() => setCurrentImageIndex(selectedProject.videoUrl ? index + 1 : index)}
                          />
                        );
                      })}
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="modal-details">
              <div className="detail-header">
                <span className="detail-category">{selectedProject.category}</span>
                <h2 className="detail-title">{selectedProject.title}</h2>
              </div>

              <div className="detail-description">
                <h4>Description</h4>
                <p>{selectedProject.fullDescription}</p>
              </div>

              <div className="detail-tech">
                <h4>
                  <span className="detail-icon">{Icons.tech}</span>
                  Tech Stack
                </h4>
                <div className="tech-tags">
                  {selectedProject.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="detail-features">
                <h4>Features</h4>
                <ul>
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>
                      <span className="feature-icon">{Icons.check}</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="detail-meta">
                <div className="meta-item">
                  <span className="meta-icon">{Icons.calendar}</span>
                  <div>
                    <span className="meta-label">Year</span>
                    <span className="meta-value">{selectedProject.year}</span>
                  </div>
                </div>
                <div className="meta-item">
                  <span className="meta-icon">{Icons.user}</span>
                  <div>
                    <span className="meta-label">Role</span>
                    <span className="meta-value">{selectedProject.role}</span>
                  </div>
                </div>
              </div>

              <div className="detail-actions">
                {selectedProject.videoUrl && (
                  <a 
                    href={selectedProject.videoUrl.replace('/preview', '')}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-action demo"
                  >
                    {Icons.video}
                    Watch Video
                  </a>
                )}
                {selectedProject.githubLink && (
                  <a 
                    href={selectedProject.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-action github"
                  >
                    {Icons.github}
                    GitHub
                  </a>
                )}
                {selectedProject.demoLink && (
                  <a 
                    href={selectedProject.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-action demo"
                  >
                    {Icons.link}
                    Live Demo
                  </a>
                )}
                {selectedProject.downloadLink && (
                  <a 
                    href={selectedProject.downloadLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-action download"
                  >
                    {Icons.download}
                    Download APK
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {isFullscreen && (
        <div className="fullscreen-overlay" onClick={closeFullscreen}>
          <button className="fullscreen-close" onClick={closeFullscreen}>
            <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <img 
            src={fullscreenImage} 
            alt="Fullscreen" 
            className="fullscreen-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Projects;