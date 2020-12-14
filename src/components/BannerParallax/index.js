import './BannerParallax.css';

const BannerParallax = ({imageUrl}) => {
    return(
        <>
        {/* parallax section */}
        <section id="section-hero" className="full-height d-none d-md-block" style={{
            backgroundImage: `url(${imageUrl})`
            }} data-stellar-background-ratio=".2">
        </section>
        {/* section close */}
        </>
    );
}

export default BannerParallax;