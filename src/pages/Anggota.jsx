import './Anggota.css'

function Anggota() {

  const members = [
    {
      image: '/images/anggota1.jpg',
      name: 'Andi Pratama',
      role: 'Ketua',
      division: 'Divisi Umum',
      year: 'Angkatan 2022',
      status: 'Aktif'
    },
    {
      image: '/images/anggota2.jpg',
      name: 'Nabila Putri',
      role: 'Wakil Ketua',
      division: 'Divisi Umum',
      year: 'Angkatan 2022',
      status: 'Aktif'
    },
    {
      image: '/images/anggota3.jpg',
      name: 'Rizky Maulana',
      role: 'Sekretaris',
      division: 'Divisi Humas',
      year: 'Angkatan 2023',
      status: 'Aktif'
    },
    {
      image: '/images/anggota4.jpg',
      name: 'Salsabila Aini',
      role: 'Bendahara',
      division: 'Divisi Keuangan',
      year: 'Angkatan 2023',
      status: 'Aktif'
    },
    {
      image: '/images/anggota5.jpg',
      name: 'Dimas Saputra',
      role: 'Anggota',
      division: 'Divisi Acara',
      year: 'Angkatan 2024',
      status: 'Aktif'
    },
    {
      image: '/images/anggota6.jpg',
      name: 'Aulia Rahma',
      role: 'Anggota',
      division: 'Divisi Media Kreatif',
      year: 'Angkatan 2024',
      status: 'Aktif'
    },
    {
      image: '/images/anggota1.jpg',
      name: 'Farel Ramadhan',
      role: 'Anggota',
      division: 'Divisi PSD',
      year: 'Angkatan 2024',
      status: 'Nonaktif'
    },
    {
      image: '/images/anggota2.jpg',
      name: 'Dewi Anggaraini',
      role: 'Anggota',
      division: 'Divisi PSD',
      year: 'Angkatan 2026',
      status: 'Nonaktif'
    }
  ]

  return (
    <main className="anggota-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="anggota-hero">

        <div className="anggota-breadcrumb">
          <span>Beranda</span>
          <b>/</b>
          <span>Anggota</span>
        </div>

        <div className="anggota-hero-container">

          <div className="anggota-hero-content">

            <h1>
              TEMUKAN ORANG-ORANG
              <br />

              <span>
                DI BALIK GERAKAN.
              </span>
            </h1>

            <p>
              Kenali anggota yang menjadi bagian dari perjalanan
              organisasi kami.
            </p>

          </div>

          <div className="anggota-hero-image">

            <img
              src="/images/bgawal.jpg"
              alt="Anggota organisasi SATUASA"
            />

          </div>

        </div>

      </section>


      {/* =========================================
          SEARCH
      ========================================= */}

      <section className="anggota-search-section">

        <div className="anggota-search-container">

          <div className="anggota-search-box">

            <span className="search-icon">
              ⌕
            </span>

            <input
              type="text"
              placeholder="Cari nama anggota organisasi..."
            />

          </div>

          <button className="anggota-search-button">
            CARI ANGGOTA
            <span>→</span>
          </button>

        </div>

      </section>


      {/* =========================================
          MEMBER LIST
      ========================================= */}

      <section className="anggota-list-section">

        <div className="anggota-list-container">

          <div className="anggota-grid">

            {members.map((member, index) => (

              <div
                className="anggota-card"
                key={index}
              >

                {/* FOTO */}

                <div className="anggota-card-image">

                  <img
                    src={member.image}
                    alt={member.name}
                  />

                </div>


                {/* DETAIL */}

                <div className="anggota-card-content">

                  <h3>
                    {member.name}
                  </h3>

                  <p className="anggota-role">
                    {member.role}
                  </p>


                  <div className="anggota-detail">

                    <span>
                      ♧
                    </span>

                    <p>
                      {member.division}
                    </p>

                  </div>


                  <div className="anggota-detail">

                    <span>
                      ▣
                    </span>

                    <p>
                      {member.year}
                    </p>

                  </div>


                  <div
                    className={
                      member.status === 'Aktif'
                        ? 'anggota-status aktif'
                        : 'anggota-status nonaktif'
                    }
                  >

                    <span>●</span>

                    {member.status}

                  </div>


                  <button className="anggota-profile-button">

                    Lihat Profil

                    <span>
                      →
                    </span>

                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================
          BOTTOM DECORATION
      ========================================= */}

      <section className="anggota-bottom-image">

        <img
          src="/images/anggota-bottom.jpg"
          alt=""
        />

      </section>

    </main>
  )
}

export default Anggota