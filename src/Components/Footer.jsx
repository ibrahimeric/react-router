import React from 'react'
import '../Style/Footer.css'

const Footer = () => {
    return (
        <>
            <footer class="flex-rw">
                <ul class="footer-list-top">
                    <li>
                        <h4 class="footer-list-header">Sobre Nosotros</h4>
                    </li>
                    <li><a href='/shop/about-mission' class="generic-anchor footer-list-anchor" itemprop="significantLink">CONOCENOS</a></li>
                    <li><a href='/promos.html' class="generic-anchor footer-list-anchor" itemprop="significantLink">PROMOS</a></li>
                    <li><a href='/retailers/new-retailers.html' class="generic-anchor footer-list-anchor" itemprop="significantLink">SE MINORISTA</a></li>
                    <li><a href='/job-openings.html' itemprop="significantLink" class="generic-anchor footer-list-anchor">PUESTOS</a></li>
                    <li><a href='/shop/about-show-schedule' class="generic-anchor footer-list-anchor" itemprop="significantLink">EVENTOS</a></li>
                </ul>
                <ul class="footer-list-top">
                    <li>
                        <h4 class="footer-list-header">Seleccion de Regalo</h4>
                    </li>
                    <li><a href='/Angels/cat/id/70' class="generic-anchor footer-list-anchor">ESCULTURAS</a></li>
                    <li><a href='/Home-Decor/cat/id/64' class="generic-anchor footer-list-anchor">DECORA TU HOGAR</a></li>
                    <li><a href='/Mugs/cat/id/32' class="generic-anchor footer-list-anchor">TAZAS</a></li>
                    <li><a href='/Pet-Lover/cat/id/108' class="generic-anchor footer-list-anchor">AMANTE DE MASCOTAS</a></li>
                    <li><a href='/Ladies-Accessories/cat/id/117' class="generic-anchor footer-list-anchor" target="_blank">BOLSOS Y JOYAS</a></li>
                </ul>
                <ul class="footer-list-top">
                    <li id='help'>
                        <h4 class="footer-list-header">Ayuda</h4>
                    </li>
                    <li><a href='/shop/about-contact' class="generic-anchor footer-list-anchor" itemprop="significantLink">CONTACTO</a></li>
                    <li><a href='/faq.html' class="generic-anchor footer-list-anchor" itemprop="significantLink">PREGUTNAS FRECUENTES</a></li>
                    <li id='find-a-store'><a href='/shop/store-locator' class="generic-anchor footer-list-anchor" itemprop="significantLink">UBICACION</a></li>
                    <li id='user-registration'><a href='/shop/user-registration?URL=' class="generic-anchor footer-list-anchor" itemprop="significantLink">nuevos usuarios</a></li>
                    <li id='order-tracking'><a href='/shop/order-status' itemprop="significantLink" class="generic-anchor footer-list-anchor">ESTADO DE ORDEN</a></li>
                </ul>
                <section class="footer-social-section flex-rw">
                    <span class="footer-social-overlap footer-social-connect">
                        Conecta Ahora {/* <span class="footer-social-small"></span> */}
                    </span>
                    {/* <span class="footer-social-overlap footer-social-icons-wrapper">
                        <a href="https://www.pinterest.com/paviliongift/" class="generic-anchor" target="_blank" title="Pinterest" itemprop="significantLink"><i class="fa fa-pinterest"></i></a>
                        <a href="https://www.facebook.com/paviliongift" class="generic-anchor" target="_blank" title="Facebook" itemprop="significantLink"><i class="fa fa-facebook"></i></a>
                        <a href="https://twitter.com/PavilionGiftCo" class="generic-anchor" target="_blank" title="Twitter" itemprop="significantLink"><i class="fa fa-twitter"></i></a>
                        <a href="http://instagram.com/paviliongiftcompany" class="generic-anchor" target="_blank" title="Instagram" itemprop="significantLink"><i class="fa fa-instagram"></i></a>
                        <a href="https://www.youtube.com/channel/UCYgUODvd0qXbu_LkUWpTVEg" class="generic-anchor" target="_blank" title="Youtube" itemprop="significantLink"><i class="fa fa-youtube"></i></a>
                        <a href="https://plus.google.com/+Paviliongift/posts" class="generic-anchor" target="_blank" title="Google Plus" itemprop="significantLink"><i class="fa fa-google-plus"></i></a>
                    </span> */}
                </section>
                <section class="footer-bottom-section flex-rw">
                    <div class="footer-bottom-wrapper">
                        <i class="fa fa-copyright" role="copyright">
                        </i> 2019 eComerce en <address class="footer-address" role="company address">Tucuman, Argentina</address><span class="footer-bottom-rights"> - Todos los Derechos Reservados - </span>
                    </div>
                    <div class="footer-bottom-wrapper">
                        <a href="/terms-of-use.html" class="generic-anchor" rel="nofollow">Terminos</a> | <a href="/privacy-policy.html" class="generic-anchor" rel="nofollow">Privacidad</a>
                    </div>
                </section>
            </footer>
        </>
    )
}

export default Footer
