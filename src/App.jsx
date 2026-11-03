import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'

import Anggota from './pages/Anggota'
import Kegiatan from './pages/Kegiatan'
import Tentang from './pages/tentang'
import Kontak from './pages/kontak'
import Login from './pages/login'


// ========================================
// NAVBAR
// ========================================

function Navbar() {
  return (
    <nav className="navbar">

      <div className="nav-container">

        {/* LOGO */}

        <Link to="/" className="brand">

          <div className="brand-logo">
            A
          </div>

          <div className="brand-text">

            <strong>
              SATUASA
            </strong>

            <small>
              BERSAMA • BERGERAK • BERDAMPAK
            </small>

          </div>

        </Link>


        {/* MENU */}

        <div className="nav-menu">

          <Link to="/">
            Beranda
          </Link>

          <Link to="/tentang">
            Tentang
          </Link>

          <Link to="/kegiatan">
            Kegiatan
          </Link>

          <Link to="/anggota">
            Anggota
          </Link>

          <Link to="/kontak">
            Kontak
          </Link>

        </div>


        {/* LOGIN */}

        <Link
          to="/login"
          className="login-button"
        >
          Login Admin
          <span>→</span>
        </Link>

      </div>

    </nav>
  )
}


// ========================================
// HERO
// ========================================

function Hero() {
  return (

    <section className="hero-section">

      <div className="hero-container">


        {/* HERO TEXT */}

        <div className="hero-content">

          <div className="hero-label">
            ORGANISASI MAHASISWA
          </div>


          <h1>

            <span>
              KARENA
            </span>

            <span>
              ORGANISASI
            </span>

            <span className="dark-text">
              BUKAN SEKEDAR
            </span>

            <span className="dark-text">
              NAMA
            </span>

          </h1>


          <p className="hero-description">

            Kami adalah wadah bagi mahasiswa yang ingin
            berproses, berkolaborasi, dan memberikan dampak
            nyata untuk lingkungan sekitar.

          </p>


          <div className="hero-buttons">

            <Link
              to="/kontak"
              className="button-primary"
            >
              Gabung Sekarang
              <span>→</span>
            </Link>


            <Link
              to="/tentang"
              className="button-outline"
            >
              Kenali Kami
              <span>›</span>
            </Link>

          </div>

        </div>


        {/* HERO IMAGE */}

        <div className="hero-image-wrapper">

          <img
            src="/images/bgawal.jpg"
            alt="Kegiatan organisasi SATUASA"
            className="hero-image"
          />

        </div>

      </div>

    </section>

  )
}


// ========================================
// STATISTIK
// ========================================

function Stats() {

  return (

    <section className="stats-section">


      {/* STAT 1 */}

      <div className="stat-box">

        <div className="stat-icon">
          ♧
        </div>

        <div>

          <strong>
            6+
          </strong>

          <span>
            Anggota Aktif
          </span>

        </div>

      </div>


      {/* STAT 2 */}

      <div className="stat-box">

        <div className="stat-icon">
          ▦
        </div>

        <div>

          <strong>
            6
          </strong>

          <span>
            Divisi
          </span>

        </div>

      </div>


      {/* STAT 3 */}

      <div className="stat-box">

        <div className="stat-icon">
          □
        </div>

        <div>

          <strong>
            6
          </strong>

          <span>
            Kegiatan per Tahun
          </span>

        </div>

      </div>


      {/* STAT 4 */}

      <div className="stat-box">

        <div className="stat-icon">
          ☆
        </div>

        <div>

          <strong>
            5
          </strong>

          <span>
            Tahun Berkarya
          </span>

        </div>

      </div>

    </section>

  )
}


// ========================================
// ABOUT / DARI IDE JADI AKSI
// ========================================

function AboutSection() {

  return (

    <section className="about-home-section">

      <div className="about-home-container">


        {/* TEXT */}

        <div className="about-home-text">

          <div className="section-label">
            TENTANG KAMI
          </div>


          <h2>

            DARI IDE
            <br />

            <span>
              JADI AKSI
            </span>

          </h2>


          <p>

            Kami adalah organisasi mahasiswa yang hadir
            untuk menjadi ruang tumbuh, tempat belajar,
            berkembang, dan berkontribusi bersama.

          </p>


          <Link
            to="/tentang"
            className="button-primary"
          >
            Selengkapnya
            <span>→</span>
          </Link>

        </div>


        {/* IMAGE */}

        <div className="about-home-image">

          <img
            src="/images/keg.jpg"
            alt="Kegiatan mahasiswa"
          />

        </div>

      </div>

    </section>

  )
}


// ========================================
// KEGIATAN TERBARU
// ========================================

function LatestActivities() {

  const activities = [

    {
      image: '/images/kegiatan1.jpg',
      date: '12',
      month: 'Apr',
      title: 'Workshop Kepemimpinan',
      description:
        'Meningkatkan jiwa kepemimpinan mahasiswa untuk menjadi agen perubahan.',
      location: 'Aula Kampus'
    },

    {
      image: '/images/kegiatan2.jpg',
      date: '08',
      month: 'Mei',
      title: 'Rapat Koordinasi',
      description:
        'Membahas program kerja dan evaluasi kegiatan organisasi.',
      location: 'Ruang Rapat Kampus'
    },

    {
      image: '/images/kegiatan3.jpg',
      date: '10',
      month: 'Mei',
      title: 'Seminar Nasional',
      description:
        'Menghadirkan narasumber inspiratif untuk membahas isu-isu aktual.',
      location: 'Auditorium Kampus'
    },

    {
      image: '/images/kegiatan4.jpg',
      date: '',
      month: '',
      title: 'Turnamen Futsal',
      description:
        'Ajang sportivitas dan mempererat solidaritas antar anggota.',
      location: 'Lapangan Kampus'
    }

  ]


  return (

    <section className="activities-section">

      <div className="activities-container">


        {/* JUDUL */}

        <div className="activities-intro">

          <div className="section-label">
            KEGIATAN TERBARU
          </div>


          <h2>

            JANGAN SAMPAI
            <br />
            KETINGGALAN!

          </h2>


          <p>

            Ikuti berbagai kegiatan seru dan
            bermanfaat yang kami adakan sepanjang tahun.

          </p>


          <Link
            to="/kegiatan"
            className="small-blue-button"
          >
            Lihat Semua Kegiatan
            <span>→</span>
          </Link>

        </div>


        {/* CARD KEGIATAN */}

        <div className="activity-grid">

          {activities.map((activity, index) => (

            <div
              className="activity-card"
              key={index}
            >


              {/* IMAGE */}

              <div className="activity-image">

                <img
                  src={activity.image}
                  alt={activity.title}
                />


                {activity.date && (

                  <div className="activity-date">

                    <strong>
                      {activity.date}
                    </strong>

                    <span>
                      {activity.month}
                    </span>

                  </div>

                )}

              </div>


              {/* CONTENT */}

              <div className="activity-content">

                <h3>
                  {activity.title}
                </h3>


                <p>
                  {activity.description}
                </p>


                <small>
                  ◉ {activity.location}
                </small>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  )
}


// ========================================
// ANGGOTA
// ========================================

function MembersSection() {

  const members = [

    {
      image: '/images/anggota1.jpg',
      name: 'Farel Ramadhan',
      role: 'Ketua Umum'
    },

    {
      image: '/images/anggota2.jpg',
      name: 'Nabila Putri',
      role: 'Wakil Ketua'
    },

    {
      image: '/images/anggota3.jpg',
      name: 'Ricky Maulana',
      role: 'Sekretaris'
    },

    {
      image: '/images/anggota4.jpg',
      name: 'Salsabila Aini',
      role: 'Bendahara'
    },

    {
      image: '/images/anggota5.jpg',
      name: 'Dimas Saputra',
      role: 'Anggota'
    },

    {
      image: '/images/anggota6.jpg',
      name: 'Aulia Rahma',
      role: 'Anggota'
    }

  ]


  return (

    <section className="members-section">

      <div className="members-container">


        {/* JUDUL */}

        <div className="members-title">

          <div className="section-label">
            ANGGOTA
          </div>


          <h2>

            ORANG-ORANG
            <br />

            HEBAT DI BALIK
            <br />

            CERITA INI

          </h2>


          <Link
            to="/anggota"
            className="small-blue-button"
          >
            Lihat Anggota
            <span>→</span>
          </Link>

        </div>


        {/* CARD ANGGOTA */}

        <div className="members-grid">

          {members.map((member, index) => (

            <div
              className="member-card"
              key={index}
            >

              <img
                src={member.image}
                alt={member.name}
              />


              <div className="member-info">

                <strong>
                  {member.name}
                </strong>

                <span>
                  {member.role}
                </span>

              </div>

            </div>

          ))}

        </div>


        {/* QUOTE */}

        <div className="members-quote">

          <span>

            “Organisasi bukan
            tentang siapa yang
            paling hebat, tapi
            tentang apa yang bisa
            kita bangun bareng.”

          </span>

        </div>

      </div>

    </section>

  )
}


// ========================================
// CTA
// ========================================

function CTASection() {

  return (

    <section className="cta-section">

      <Link
        to="/kontak"
        className="cta-text"
      >

        SIAP JADI BAGIAN DARI CERITA INI?

      </Link>

    </section>

  )
}


// ========================================
// FOOTER
// ========================================

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-container">


        {/* LOGO */}

        <Link
          to="/"
          className="footer-brand"
        >

          <div className="footer-logo">
            A
          </div>

          <div>

            <strong>
              SATUASA
            </strong>

            <small>
              BERSAMA • BERGERAK • BERDAMPAK
            </small>

          </div>

        </Link>


        {/* FOOTER MENU */}

        <div className="footer-menu">

          <Link to="/">
            Beranda
          </Link>

          <Link to="/tentang">
            Tentang
          </Link>

          <Link to="/kegiatan">
            Kegiatan
          </Link>

          <Link to="/anggota">
            Anggota
          </Link>

          <Link to="/kontak">
            Kontak
          </Link>

        </div>


        <p>
          © 2026 SATUASA. All rights reserved.
        </p>

      </div>

    </footer>

  )
}


// ========================================
// BERANDA
// ========================================

function Beranda() {

  return (

    <>

      <Navbar />

      <main>

        <Hero />

        <Stats />

        <AboutSection />

        <LatestActivities />

        <MembersSection />

        <CTASection />

      </main>

      <Footer />

    </>

  )
}


// ========================================
// APP / ROUTER
// ========================================

function App() {

  return (

    <BrowserRouter>

      <Routes>


        {/* BERANDA */}

        <Route
          path="/"
          element={<Beranda />}
        />


        {/* ANGGOTA */}

        <Route
          path="/anggota"
          element={
            <>
              <Navbar />
              <Anggota />
              <Footer />
            </>
          }
        />


        {/* KEGIATAN */}

        <Route
          path="/kegiatan"
          element={
            <>
              <Navbar />
              <Kegiatan />
              <Footer />
            </>
          }
        />


        {/* TENTANG */}

        <Route
          path="/tentang"
          element={
            <>
              <Navbar />
              <Tentang />
              <Footer />
            </>
          }
        />


        {/* KONTAK */}

        <Route
          path="/kontak"
          element={
            <>
              <Navbar />
              <Kontak />
              <Footer />
            </>
          }
        />


        {/* LOGIN */}

        <Route
          path="/login"
          element={<Login />}
        />

      </Routes>

    </BrowserRouter>

  )
}


export default App