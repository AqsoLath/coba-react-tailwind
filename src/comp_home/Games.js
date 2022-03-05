
export default function Games() {
    return (
        <div className=" mt-20">
            <h2 className="text-3xl font-bold text-center bg-gradient-to-b from-emas1 via-emas2 to-emas1 py-2 ">Game Populer</h2>
            <div className="container mx-auto">

                <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 mt-2">
                    <div className="bg-red-600 animate-pulse">
                        <img src="/logo192.png" alt="" className="w-full" />
                    </div>
                    <div className="bg-blue-600 animate-pulse">
                        <img src="/logo192.png" alt="" className="w-full" />
                    </div>
                    <div className="bg-green-600 animate-pulse">
                        <img src="/logo192.png" alt="" className="w-full" />
                    </div>
                    <div className="bg-yellow-600 animate-pulse">
                        <img src="/logo192.png" alt="" className="w-full" />
                    </div>
                    <div className="bg-violet-600 animate-pulse">
                        <img src="/logo192.png" alt="" className="w-full" />
                    </div>
                    <div className="bg-indigo-600 animate-pulse">
                        <img src="/logo192.png" alt="" className="w-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}