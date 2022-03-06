import { Link } from 'react-router-dom'
function Masuk() {
    return (
        <div className="container mx-auto px-2">
            <div className="max-w-lg mx-auto mt-20 px-2  py-4 border-2 bg-gradient-to-r from-hitam1 via-hitam2 to-hitam1 border-emas1 rounded-md">
                <h2 className="subjudul">Masuk ke Akun Anda</h2>
                <form action="">
                    <label>
                        <p className="text-sm">Nama pengguna</p>
                        <input type="text" name="namaPengguna" className="input" placeholder="Masukkan Nama pengguna" />
                    </label>
                    <label >
                        <p className="text-sm mt-1">Kata Sandi</p>
                        <input type="password" name="kataSandi" id="kataSandi" className="input" placeholder="Masukkan Kata Sandi" />
                    </label>
                    <button type="submit" className="bg-gradient-to-b from-emas1 to-emas2 hover:bg-yellow-200 hover:to-yellow-100 text-hitam1 font-semibold mt-2 py-1 px-3 rounded">Masuk</button>
                </form>
                <p className='mt-4'>Belum punya akun? <Link to="/daftar" className='text-blue-400'>Daftar!</Link></p>
            </div>
        </div>
    )
}

export default Masuk;