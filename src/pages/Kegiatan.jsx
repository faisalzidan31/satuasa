import './Kegiatan.css'
import { Link } from 'react-router-dom'

function Kegiatan() {
  const kegiatanLainnya = [
    {
      image: '/images/kegiatan2.jpg',
      date: '08 Jun 2026',
      location: 'Aula Kampus',
      status: 'Selesai',
      title: 'Pelatihan Public Speaking',
      description: 'Melatih kemampuan komunikasi dan kepercayaan diri mahasiswa.'
    },
    {
      image: '/images/kegiatan2.jpg',
      date: '10 Mei 2026',
      location: 'Ruang Rapat Kampus',
      status: 'Berlangsung',
      title: 'Rapat Koordinasi',
      description: 'Membahas program kerja dan evaluasi kegiatan organisasi.'
    },
    {
      image: '/images/kegiatan3.jpg',
      date: '26 Apr 2026',
      location: 'Panti Asuhan Harapan',
      status: 'Selesai',
      title: 'Bakti Sosial',
      description: 'Berbagi dengan sesama sebagai bentuk kepedulian sosial.'
    }
  ]

  return (
    <main className="kegiatan-page">

      {/* =========================================
          HEADER / DETAIL KEGIATAN
      ========================================= */}
      <section className="kegiatan-detail-hero">

        <div className="kegiatan-detail-container">

          {/* BREADCRUMB */}
          <div className="kegiatan-breadcrumb">
            <Link to="/">Beranda</Link>
            <span>/</span>
            <Link to="/kegiatan">Kegiatan</Link>
            <span>/</span>
            <strong>Workshop Kepemimpinan</strong>

            <Link to="/kegiatan" className="back-kegiatan">
              ← &nbsp; Kembali ke Kegiatan
            </Link>
          </div>

          {/* JUDUL */}
          <div className="kegiatan-title-area">

            <div className="kegiatan-label-row">
              <span className="kegiatan-label">
                DOKUMENTASI KEGIATAN
              </span>

              <span className="status-badge">
                ◉ &nbsp; Selesai
              </span>
            </div>

            <h1>Workshop Kepemimpinan</h1>

            <p>
              Meningkatkan jiwa kepemimpinan mahasiswa untuk menjadi agen perubahan.
            </p>

          </div>

          {/* FOTO UTAMA */}
          <div className="kegiatan-main-image">
            <img
              src="/images/kegiatan1.jpg"
              alt="Workshop Kepemimpinan"
            />
          </div>

          {/* CAPTION */}
          <div className="kegiatan-image-info">
            <span>
              Dokumentasi Workshop Kepemimpinan
            </span>

            <span>
              12 Apr 2026 &nbsp; • &nbsp; Aula Kampus
            </span>
          </div>

        </div>

      </section>


      {/* =========================================
          TENTANG KEGIATAN
      ========================================= */}
      <section className="tentang-kegiatan-section">

        <div className="tentang-kegiatan-container">

          {/* KONTEN KIRI */}
          <div className="tentang-kegiatan-content">

            <h2>Tentang kegiatan</h2>

            <p>
              Kepemimpinan dimulai dari kemauan untuk belajar, mengambil peran,
              dan peduli pada lingkungan sekitar. Workshop kepemimpinan menjadi
              ruang pengembangan diri bagi mahasiswa untuk membangun sikap
              tersebut dalam kehidupan kampus dan organisasi.
            </p>

            <p>
              Semangatnya adalah menumbuhkan pemimpin yang mampu mendengarkan,
              bekerja bersama, dan membawa perubahan positif—dimulai dari
              langkah sederhana di komunitasnya.
            </p>


            {/* MATERI */}
            <h2 className="materi-title">
              Pokok materi kepemimpinan
            </h2>

            <div className="materi-list">

              <div className="materi-item">
                <div className="materi-icon">
                  ◉
                </div>

                <div>
                  <h3>
                    Mengenali diri dan peran pemimpin
                  </h3>

                  <p>
                    Memahami potensi diri, nilai pribadi, serta tanggung jawab
                    dalam menjadi teladan bagi orang lain.
                  </p>
                </div>
              </div>


              <div className="materi-item">
                <div className="materi-icon">
                  ▱
                </div>

                <div>
                  <h3>
                    Komunikasi dan kerja sama tim
                  </h3>

                  <p>
                    Membangun kebiasaan mendengarkan, menyampaikan gagasan
                    dengan jelas, dan menghargai sudut pandang yang berbeda.
                  </p>
                </div>
              </div>


              <div className="materi-item">
                <div className="materi-icon">
                  ⚐
                </div>

                <div>
                  <h3>
                    Inisiatif untuk perubahan positif
                  </h3>

                  <p>
                    Menumbuhkan keberanian mengambil keputusan dan mengubah
                    kepedulian menjadi langkah nyata yang bermanfaat.
                  </p>
                </div>
              </div>

            </div>

          </div>


          {/* SIDEBAR */}
          <aside className="kegiatan-sidebar">

            <div className="informasi-card">

              <h3>
                Informasi kegiatan
              </h3>

              <div className="informasi-item">
                <span className="informasi-icon">▣</span>

                <div>
                  <small>
                    Tanggal kegiatan
                  </small>

                  <strong>
                    12 Apr 2026
                  </strong>
                </div>
              </div>


              <div className="informasi-item">
                <span className="informasi-icon">⌖</span>

                <div>
                  <small>
                    Lokasi
                  </small>

                  <strong>
                    Aula Kampus
                  </strong>
                </div>
              </div>


              <div className="informasi-status">

                <span>
                  Status kegiatan
                </span>

                <span className="status-badge">
                  ◉ &nbsp; Selesai
                </span>

              </div>

            </div>


            <div className="selesai-card">

              <h3>
                ▤ &nbsp; Kegiatan telah selesai
              </h3>

              <p>
                Halaman ini merupakan dokumentasi kegiatan.
                Pendaftaran untuk kegiatan ini sudah ditutup.
              </p>

              <Link to="/kegiatan">
                Jelajahi kegiatan lainnya &nbsp; →
              </Link>

            </div>

          </aside>

        </div>

      </section>


      {/* =========================================
          KEGIATAN LAINNYA
      ========================================= */}
      <section className="kegiatan-lainnya-section">

        <div className="kegiatan-lainnya-container">

          <div className="kegiatan-lainnya-header">

            <div>
              <h2>
                KEGIATAN <span>LAINNYA</span>
              </h2>

              <p>
                Cerita lain tentang belajar, berkolaborasi, dan berbagi bersama SATUASA.
              </p>
            </div>

            <Link to="/kegiatan">
              Lihat Semua Kegiatan &nbsp; →
            </Link>

          </div>


          <div className="kegiatan-lainnya-grid">

            {kegiatanLainnya.map((item, index) => (

              <div
                className="kegiatan-lainnya-card"
                key={index}
              >

                <div className="lainnya-image">

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                  <span className="lainnya-status">
                    ◉ &nbsp; {item.status}
                  </span>

                </div>


                <div className="lainnya-content">

                  <div className="lainnya-meta">
                    <span>▣ {item.date}</span>
                    <span>⌖ {item.location}</span>
                  </div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.description}
                  </p>

                  <Link to="/kegiatan">
                    Lihat Detail &nbsp; →
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          CTA
      ========================================= */}
      <section className="kegiatan-cta">

        <div className="kegiatan-cta-container">

          <h2>
            SETIAP KEGIATAN
            <br />
            ADALAH LANGKAH MENUJU
            <span> PERUBAHAN.</span>
          </h2>

          <div className="kegiatan-cta-right">

            <p>
              Ikuti terus kegiatan kami dan jadi bagian dari perjalanan
              untuk menciptakan dampak yang lebih besar.
            </p>

            <Link to="/kegiatan">
              Lihat Kegiatan Lainnya &nbsp; →
            </Link>

          </div>

        </div>

      </section>

    </main>
  )
}

export default Kegiatan