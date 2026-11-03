import './tentang.css'

function Tentang() {
  return (
    <main className="tentang-page">

      {/* ================= BREADCRUMB ================= */}
      <div className="tentang-container">
        <div className="tentang-breadcrumb">
          <span>Beranda</span>
          <span>/</span>
          <span>Tentang Kami</span>
        </div>
      </div>


      {/* ================= HERO ================= */}
      <section className="tentang-hero">
        <div className="tentang-container tentang-hero-grid">

          <div className="tentang-hero-text">
            <h1>
              BUKAN SEKEDAR
              <br />
              ORGANISASI.
              <br />
              <span>KAMI ADALAH</span>
              <br />
              <span>GERAKAN.</span>
            </h1>

            <p>
              Bersama kami, mari bertumbuh menjadi pribadi yang
              inspiratif, progresif, dan berkontribusi dalam
              memberikan dampak bagi perubahan yang lebih baik.
            </p>
          </div>

          <div className="tentang-hero-image">
            <img
              src="/images/bgawal.jpg"
              alt="Kegiatan organisasi SATUASA"
            />
          </div>

        </div>
      </section>


      {/* ================= PROFIL ================= */}
      <section className="profil-section">
        <div className="tentang-container">

          <div className="profil-grid">

            {/* TEXT */}
            <div className="profil-text">
              <h2>
                PROFIL
                <br />
                <span>ORGANISASI</span>
              </h2>

              <p>
                Kami adalah organisasi mahasiswa yang hadir sebagai
                ruang kolaborasi, pengembangan diri, serta wadah
                untuk memberikan dampak nyata bagi lingkungan sekitar.
              </p>

              <p>
                Dengan semangat kebersamaan, kami percaya bahwa setiap
                langkah kecil dari setiap anggota dapat menciptakan
                perubahan besar.
              </p>
            </div>

            {/* FOTO KEDUA */}
            <div className="profil-image">
              <img
                src="/images/profil.jpg"
                alt="Profil organisasi SATUASA"
              />
            </div>

          </div>


          {/* ================= VISI MISI ================= */}
          <div className="visi-misi-grid">

            <div className="visi-box">
              <div className="box-title">
                <span>◉</span>
                <h3>VISI</h3>
              </div>

              <p>
                "Menjadi organisasi mahasiswa yang inspiratif,
                progresif, dan berdampak bagi masyarakat."
              </p>
            </div>


            <div className="misi-box">
              <div className="box-title">
                <span>◎</span>
                <h3>MISI</h3>
              </div>

              <ul>
                <li>Membangun potensi dan kompetensi anggota.</li>
                <li>Menciptakan ruang kolaborasi yang inklusif dan produktif.</li>
                <li>Melaksanakan program kerja yang bermanfaat bagi masyarakat.</li>
                <li>Membangun jaringan dengan berbagai organisasi.</li>
                <li>Menjaga nilai-nilai integritas, solidaritas, dan keberlanjutan.</li>
              </ul>
            </div>

          </div>

        </div>
      </section>


      {/* ================= SEJARAH ================= */}
      <section className="sejarah-section">
        <div className="tentang-container sejarah-grid">

          <div className="sejarah-text">
            <h2>
              SEJARAH
              <br />
              <span>ORGANISASI</span>
            </h2>

            <p>
              Perjalanan kami dimulai dari sekumpulan mahasiswa
              yang memiliki visi dan semangat untuk berkembang,
              berbagi, serta memberikan kontribusi positif.
            </p>

            <p>
              Dari tahun ke tahun, organisasi terus berkembang
              melalui berbagai kegiatan dan kolaborasi.
            </p>
          </div>


          <div className="timeline">

            <div className="timeline-line"></div>

            <div className="timeline-item">
              <div className="timeline-year">
                <strong>2020</strong>
                <span>Awal Berdiri</span>
              </div>

              <img
                src="/images/sejarah1.jpg"
                alt="Awal berdiri organisasi"
              />

              <h4>
                Dimulai dari sekelompok mahasiswa dengan semangat
                untuk bergerak bersama.
              </h4>
            </div>


            <div className="timeline-item">
              <div className="timeline-year">
                <strong>2021</strong>
                <span>Pengembangan</span>
              </div>

              <img
                src="/images/sejarah2.jpg"
                alt="Pengembangan organisasi"
              />

              <h4>
                Mulai memperluas anggota dan melaksanakan program
                kerja pertama.
              </h4>
            </div>


            <div className="timeline-item">
              <div className="timeline-year">
                <strong>2023</strong>
                <span>Kolaborasi</span>
              </div>

              <img
                src="/images/sejarah3.jpg"
                alt="Kolaborasi organisasi"
              />

              <h4>
                Menjalin kemitraan dengan berbagai pihak dan
                memperluas dampak kegiatan.
              </h4>
            </div>


            <div className="timeline-item">
              <div className="timeline-year">
                <strong>2025</strong>
                <span>Terus Bergerak</span>
              </div>

              <img
                src="/images/sejarah4.jpg"
                alt="Perjalanan organisasi"
              />

              <h4>
                Semakin berkembang dengan lebih banyak kegiatan
                dan kontribusi nyata.
              </h4>
            </div>

          </div>

        </div>
      </section>


      {/* ================= STRUKTUR ================= */}
      <section className="struktur-section">
        <div className="tentang-container struktur-grid">

          <div className="struktur-text">
            <h2>
              STRUKTUR
              <br />
              <span>ORGANISASI</span>
            </h2>

            <p>
              Dipimpin oleh individu-individu yang berdedikasi
              untuk menjalankan visi dan misi organisasi.
            </p>
          </div>


          <div className="struktur-members">

            <div className="struktur-card">
              <img
                src="/images/anggota1.jpg"
                alt="Andi Pratama"
              />

              <strong>Andi Pratama</strong>
              <span>Ketua</span>
            </div>


            <div className="struktur-card">
              <img
                src="/images/anggota2.jpg"
                alt="Nabila Putri"
              />

              <strong>Nabila Putri</strong>
              <span>Wakil Ketua</span>
            </div>


            <div className="struktur-card">
              <img
                src="/images/anggota3.jpg"
                alt="Rizky Maulana"
              />

              <strong>Rizky Maulana</strong>
              <span>Sekretaris</span>
            </div>


            <div className="struktur-card">
              <img
                src="/images/anggota4.jpg"
                alt="Salsabila Aini"
              />

              <strong>Salsabila Aini</strong>
              <span>Bendahara</span>
            </div>

          </div>

        </div>
      </section>


      {/* ================= BOTTOM CTA ================= */}
      <section className="tentang-bottom">

        <div className="tentang-bottom-overlay">

          <div className="tentang-bottom-text">
            BERSAMA KITA BISA BERDAMPAK!
          </div>

          <p>
            Jadilah bagian dari perjalanan kami untuk menciptakan
            perubahan yang lebih baik.
          </p>

          <a href="/anggota" className="tentang-bottom-button">
            Lihat Anggota Kami
            <span>→</span>
          </a>

        </div>

      </section>

    </main>
  )
}

export default Tentang