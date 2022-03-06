import { Link } from "react-router-dom";

function Daftar() {
    return (
        <div className="container mx-auto px-2 mb-20">
            <div className="max-w-lg mx-auto mt-20 px-2  py-4 border-2 bg-gradient-to-r from-hitam1 via-hitam2 to-hitam1 border-emas1 rounded-md">
                <h2 className="subjudul">Daftar/Buat Akun Baru</h2>
                <form action="">
                    <label>
                        <p className="text-sm mt-2">Nama Pengguna</p>
                        <input type="text" name="namaPengguna" className="input" placeholder="Masukkan Nama Pengguna" />
                    </label>
                    <label >
                        <p className="text-sm mt-2 ">Kata Sandi</p>
                        <input type="password" name="kataSandi" id="kataSandi" className="input " placeholder="Masukkan Kata Sandi" />
                    </label>
                    <label >
                        <p className="text-sm mt-2">Konfirmasi Kata Sandi</p>
                        <input type="password" name="konfirmasiKataSandi" id="konfirmasiKataSandi" className="input " placeholder="Konfirmasi Kata Sandi" />
                    </label>
                    <label>
                        <p className="text-sm mt-2">Email</p>
                        <input type="email" name="emailPengguna" className="input" placeholder="Masukkan Email" />
                    </label>
                    <label>
                        <p className="text-sm mt-2">Bank</p>
                        <input type="text" name="namaPengguna" className="input" placeholder="Masukkan Nama Pengguna" />
                    </label>
                    <label>
                        <p className="text-sm mt-2">Nomer Ponsel</p>
                        <input type="text" name="namaPengguna" className="input" placeholder="Masukkan Nomer Ponsel" />
                    </label>
                    <label>
                        <p className="text-sm mt-2">Nama Rekening</p>
                        <input type="text" name="namaPengguna" className="input" placeholder="Masukkan Nama Rekening" />
                    </label>
                    <label>
                        <p className="text-sm mt-2">Nomer Rekening</p>
                        <input type="text" name="namaPengguna" className="input" placeholder="Masukkan Nomer Rekening" />
                    </label>
                    <button type="submit" className="bg-gradient-to-b from-emas1 to-emas2 hover:bg-yellow-200 hover:to-yellow-100 text-hitam1 font-semibold mt-2 py-1 px-3 rounded">Daftar</button>
                </form>
                <p className='mt-4'>Sudah punya akun? <Link to="/masuk" className='text-blue-400'>Masuk!</Link></p>
            </div>
        </div>
    )
}
export default Daftar;