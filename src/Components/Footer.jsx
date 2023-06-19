import React from 'react'
import '../Style/Footer.css'

const Footer = () => {
    return (
        <>
            <footer className="flex-rw">
                <ul className="footer-list-top">
                    <li>
                        <h4 className="footer-list-header">Sobre Nosotros</h4>
                    </li>
                    <li><a href='/shop/about-mission' className="generic-anchor footer-list-anchor" itemprop="significantLink">CONOCENOS</a></li>
                    <li><a href='/promos.html' className="generic-anchor footer-list-anchor" itemprop="significantLink">PROMOS</a></li>
                    <li><a href='/retailers/new-retailers.html' className="generic-anchor footer-list-anchor" itemprop="significantLink">SE MINORISTA</a></li>
                    <li><a href='/job-openings.html' itemprop="significantLink" className="generic-anchor footer-list-anchor">PUESTOS</a></li>
                    <li><a href='/shop/about-show-schedule' className="generic-anchor footer-list-anchor" itemprop="significantLink">EVENTOS</a></li>
                </ul>
                <ul className="footer-list-top">
                    <li>
                        <h4 className="footer-list-header">Seleccion de Regalo</h4>
                    </li>
                    <li><a href='/Angels/cat/id/70' className="generic-anchor footer-list-anchor">ESCULTURAS</a></li>
                    <li><a href='/Home-Decor/cat/id/64' className="generic-anchor footer-list-anchor">DECORA TU HOGAR</a></li>
                    <li><a href='/Mugs/cat/id/32' className="generic-anchor footer-list-anchor">TAZAS</a></li>
                    <li><a href='/Pet-Lover/cat/id/108' className="generic-anchor footer-list-anchor">AMANTE DE MASCOTAS</a></li>
                    <li><a href='/Ladies-Accessories/cat/id/117' className="generic-anchor footer-list-anchor" target="_blank">BOLSOS Y JOYAS</a></li>
                </ul>
                <ul className="footer-list-top">
                    <li id='help'>
                        <h4 className="footer-list-header">Ayuda</h4>
                    </li>
                    <li><a href='/shop/about-contact' className="generic-anchor footer-list-anchor" itemprop="significantLink">CONTACTO</a></li>
                    <li><a href='/faq.html' className="generic-anchor footer-list-anchor" itemprop="significantLink">PREGUTNAS FRECUENTES</a></li>
                    <li id='find-a-store'><a href='/shop/store-locator' className="generic-anchor footer-list-anchor" itemprop="significantLink">UBICACION</a></li>
                    <li id='user-registration'><a href='/shop/user-registration?URL=' className="generic-anchor footer-list-anchor" itemprop="significantLink">nuevos usuarios</a></li>
                    <li id='order-tracking'><a href='/shop/order-status' itemprop="significantLink" className="generic-anchor footer-list-anchor">ESTADO DE ORDEN</a></li>
                </ul>
                <section className="footer-social-section flex-rw">
                    <span className="footer-social-overlap footer-social-connect">
                        Conecta Ahora {/* <span className="footer-social-small"></span> */}
                    </span>
                    {/* <span className="footer-social-overlap footer-social-icons-wrapper">
                        <a href="https://www.pinterest.com/paviliongift/" className="generic-anchor" target="_blank" title="Pinterest" itemprop="significantLink"><i className="fa fa-pinterest"></i></a>
                        <a href="https://www.facebook.com/paviliongift" className="generic-anchor" target="_blank" title="Facebook" itemprop="significantLink"><i className="fa fa-facebook"></i></a>
                        <a href="https://twitter.com/PavilionGiftCo" className="generic-anchor" target="_blank" title="Twitter" itemprop="significantLink"><i className="fa fa-twitter"></i></a>
                        <a href="http://instagram.com/paviliongiftcompany" className="generic-anchor" target="_blank" title="Instagram" itemprop="significantLink"><i className="fa fa-instagram"></i></a>
                        <a href="https://www.youtube.com/channel/UCYgUODvd0qXbu_LkUWpTVEg" className="generic-anchor" target="_blank" title="Youtube" itemprop="significantLink"><i className="fa fa-youtube"></i></a>
                        <a href="https://plus.google.com/+Paviliongift/posts" className="generic-anchor" target="_blank" title="Google Plus" itemprop="significantLink"><i className="fa fa-google-plus"></i></a>
                    </span> */}
                </section>
                <section className="footer-bottom-section flex-rw">
                    <div className="footer-bottom-wrapper">
                        <i className="fa fa-copyright" role="copyright">
                        </i> 2019 eComerce en <address className="footer-address" role="company address">Tucuman, Argentina</address><span className="footer-bottom-rights"> - Todos los Derechos Reservados - </span>
                    </div>
                    <div className="footer-bottom-wrapper">
                        <a href="/terms-of-use.html" className="generic-anchor" rel="nofollow">Terminos</a> | <a href="/privacy-policy.html" className="generic-anchor" rel="nofollow">Privacidad</a>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer
