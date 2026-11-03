import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

function Login() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="login-page">

      <div className="login-container">

        <div className="login-info">

          <Link to="/" className="login-brand">
            <span className="login-logo">S</span>
            <span>SATUASA</span>
          </Link>

          <div className="login-text">

            <div className="login-label">
              ORGANISASI MAHASISWA
            </div>

            <h1>
              Bersama
              <br />
              untuk
              <br />
              <span>bertumbuh.</span>
            </h1>

            <p>
              Masuk ke halaman organisasi untuk
              mengakses berbagai informasi dan
              kegiatan organisasi.
            </p>

          </div>

        </div>


        <div className="login-box">

          <div className="login-header">

            <div className="login-small-title">
              SELAMAT DATANG
            </div>

            <h2>Masuk</h2>

            <p>
              Silakan masukkan akun kamu.
            </p>

          </div>


          <form>

            <div className="login-form-group">

              <label>
                Username
              </label>

              <input
                type="text"
                placeholder="Masukkan username"
              />

            </div>


            <div className="login-form-group">

              <label>
                Password
              </label>

              <div className="password-wrapper">

                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Masukkan password"
                />

                <button
                  type="button"
                  className="show-password"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword
                    ? 'SEMBUNYIKAN'
                    : 'LIHAT'}
                </button>

              </div>

            </div>


            <button
              type="button"
              className="login-submit"
            >
              LOGIN →
            </button>

          </form>


          <div className="login-back">

            <Link to="/">
              ← Kembali ke Beranda
            </Link>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Login