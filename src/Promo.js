import PromoCard from './comp_promo/PromoCard'
function Promo() {
    return (
        <div className="container mx-auto mt-20 px-2">
            <h2 className='subjudul'>Promo Keren Untukmu</h2>
            <div className="mt-3 grid grid-cols-1 lg:grid-cols-2 gap-3">
                <PromoCard src="/slider-hero.jpg" kearah="bla-bla-bla">Bonus Cashback 70%</PromoCard>
                <PromoCard src="/slider-hero.jpg" kearah="bonus-cashback-smpe-meninggal">Bonus Potongan sampe mau meninggal</PromoCard>
                <PromoCard src="/slider-hero.jpg" kearah="bonus-cashback-smpe-meninggal">Bonus Cashback 70%</PromoCard>
                {/* <PromoCard src="/logo512.png">Langsung jackpot</PromoCard> */}
            </div>
        </div>
    )
}

export default Promo;