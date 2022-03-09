
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
export default function Download() {
    return (
        <div className="bg-gradient-to-b from-emas1 via-emas2 to-emas1 py-4 mt-4">
            <div className="container mx-auto px-2">
                <div className="flex justify-evenly text-hitam1">
                    <h3 className=' text-2xl my-auto'>AqsoGG.com</h3>
                    <div className='mx-auto text-center mt-2'>
                        <h3 className='text-xl'>Mainkan Melalui Aplikasi Android</h3>
                        <button className='bg-gradient-to-b from-slate-300 to-slate-100 hover:from-slate-500 hover:to-slate-300 text-hitam2 rounded-md py-1 px-4 font-semibold border-2 border-hitam1 transition'>
                            <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon> Download
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}