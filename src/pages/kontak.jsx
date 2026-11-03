import './kontak.css'

function Kontak() {
  const kontakItems = [
    {
      icon: '⌖',
      title: 'Alamat Sekretariat',
      text: (
        <>
          Kampus Utama
          <br />
          Jl. Pemuda No. 22
          <br />
          Magelang, Jawa Tengah
          <br />
          56123
        </>
      ),
      className: 'alamat'
    },
    {
      icon: '✉',
      title: 'Email Resmi',
      text: 'satuasa.official@gmail.com',
      className: ''
    },
    {
      icon: '⌕',
      title: 'Nomor Kontak',
      text: '+62 812-3456-7890',
      className: ''
    },
    {
      icon: '◎',
      title: 'Instagram',
      text: '@satuasa',
      className: ''
    },
    {
      icon: '♪',
      title: 'TikTok',
      text: '@satuasa',
      className: ''
    },
    {
      icon: '▶',
      title: 'YouTube',
      text: 'SATUASA Official',
      className: ''
    }
  ]

  return (
    <main className="kontak-page">

      {/* =====================================================
          HERO KONTAK
      ===================================================== */}
      <section className="kontak-hero">

        <div className="kontak-hero-left">

          <div className="kontak-breadcrumb">
            <span>Beranda</span>
            <b>/</b>
            <span>Kontak</span>
          </div>

          <div className="kontak-hero-text">
            <h1>
              PUNYA IDE?
            </h1>

            <h2>
              MARI BERKOLABORASI.
            </h2>

            <p>
              Setiap kolaborasi besar dimulai dari sebuah percakapan.
            </p>
          </div>

        </div>

        <div className="kontak-hero-image">
          <img
            src="/images/kontak-banner.jpg"
            alt="Kegiatan organisasi SATUASA"
          />
        </div>

      </section>


      {/* =====================================================
          INFORMASI KONTAK + FORM
      ===================================================== */}
      <section className="kontak-main">

        <div className="kontak-main-container">

          {/* =================================================
              INFORMASI KONTAK
          ================================================= */}
          <div className="informasi-kontak">

            <div className="kontak-section-heading">
              <h2>
                INFORMASI <span>KONTAK</span>
              </h2>

              <p>
                Hubungi kami melalui berbagai kanal resmi berikut.
              </p>
            </div>


            <div className="kontak-card-grid">

              {kontakItems.map((item, index) => (
                <div
                  className={`kontak-info-card ${item.className}`}
                  key={index}
                >

                  <div className="kontak-info-icon">
                    {item.icon}
                  </div>

                  <div className="kontak-info-content">

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.text}
                    </p>

                  </div>

                  <span className="kontak-card-arrow">
                    ›
                  </span>

                </div>
              ))}

            </div>

          </div>


          {/* =================================================
              FORM KIRIM PESAN
          ================================================= */}
          <div className="kirim-pesan-card">

            <div className="kirim-pesan-heading">

              <h2>
                KIRIM <span>PESAN</span>
              </h2>

              <p>
                Sampaikan pertanyaan, saran, atau ide kolaborasi
                melalui formulir berikut.
              </p>

            </div>


            <form className="kontak-form">

              <div className="form-row">

                <div className="form-group">
                  <div className="form-icon">
                    ♙
                  </div>

                  <input
                    type="text"
                    placeholder="Nama Lengkap"
                  />
                </div>


                <div className="form-group">
                  <div className="form-icon">
                    ✉
                  </div>

                  <input
                    type="email"
                    placeholder="Email"
                  />
                </div>

              </div>


              <div className="form-group full">
                <div className="form-icon">
                  ▤
                </div>

                <input
                  type="text"
                  placeholder="Subjek"
                />
              </div>


              <div className="form-group textarea-group">

                <div className="form-icon textarea-icon">
                  □
                </div>

                <textarea
                  placeholder="Tulis pesan Anda di sini..."
                  rows="5"
                ></textarea>

              </div>


              <button
                type="submit"
                className="kirim-button"
              >
                <span className="send-icon">
                  ➤
                </span>

                <span>
                  KIRIM PESAN
                </span>

                <span className="send-arrow">
                  →
                </span>
              </button>

            </form>

          </div>

        </div>

      </section>


      {/* =====================================================
          LOKASI
      ===================================================== */}
      <section className="lokasi-section">

        <div className="lokasi-container">

          <div className="lokasi-content">

            <div className="lokasi-heading">

              <h2>
                LOKASI
                <br />
                <span>SEKRETARIAT</span>
              </h2>

              <p>
                Ruang berkumpul dan bertukar gagasan bersama komunitas
                Satuasa.
              </p>

            </div>


            <div className="lokasi-card">

              <div className="lokasi-icon">
                ⌖
              </div>

              <div className="lokasi-info">

                <strong>
                  Basecamp Utama
                </strong>

                <span>
                  Jl. Pemuda No. 22 Magelang, Jawa Tengah 56123
                </span>

              </div>

              <span className="lokasi-arrow">
                ›
              </span>

            </div>

          </div>


          <div className="lokasi-map">

            <img
              src="/images/map.jpg"
              alt="Lokasi Sekretariat SATUASA"
            />

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}
      <section className="kontak-cta">

        <div className="kontak-cta-background"></div>

        <div className="kontak-cta-container">

          <div className="kontak-cta-title">
            SATU PESAN BISA
            <br />
            MEMULAI <span>PERUBAHAN.</span>
          </div>


          <div className="kontak-cta-right">

            <p>
              Kami selalu terbuka untuk ide, kolaborasi, dan semangat
              baru. Mari bergerak bersama untuk Indonesia.
            </p>

            <a
              href="https://wa.me/6281234567890"
              className="kontak-cta-button"
              target="_blank"
              rel="noreferrer"
            >
              Hubungi Kami Sekarang
              <span>→</span>
            </a>

          </div>

        </div>

      </section>

    </main>
  )
}

export default Kontak