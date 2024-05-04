import Footer from "../components/footer"
import Divider from "../components/divider"
import Header from "../components/header"
import Waves from "../components/waves"

export default function AboutPage() {
  return (
    <>
      <Header />
      <Divider />
      <header className="container">
        <div className="text-center mt-5">
                <img src="../../assets/img/logoLowAnx.jpg" alt="" className="border border-secondary rounded-circle" />
        </div>
        <h1 className="text-center display-1 mt-5 mb-3 fst-italic">PESQUISA e Redes Sociais da LowAnx</h1>
    </header>
        <div className="container mt-5">
            <div className="list-group glass">
                <a href="https://forms.gle/9og6RF3bNQ7gD8W28" className="list-group-item list-group-item-action d-flex align-items-center border-success aniBtn">
                    <svg className="bi pe-none me-2" width="60" height="60"><use xlinkHref="/src/assets/svg/lowanx.svg#lowanx"/></svg>
                    Pesquisa de análise sobre Ansiedade - GRATUITO
                </a>
                <a href="https://www.instagram.com/lowanx2024" className="list-group-item list-group-item-action d-flex align-items-center aniBtn">
                    <svg className="bi pe-none me-2" width="50" height="50"><use xlinkHref="/src/assets/svg/instagram.svg#instagram"/></svg>
                    Instagram
                </a>
                <a href="https://x.com/Low_Anx?t=3YPPsGYbWZt2fUC6m5VtAA&s=09" className="list-group-item list-group-item-action d-flex align-items-center aniBtn">
                    <svg className="bi pe-none me-2" width="50" height="50"><use xlinkHref="/src/assets/svg/twitter.svg#twitter"/></svg>
                    Twitter
                </a>
                <a href="mailto:lowanx2024@outlook.com" className="list-group-item list-group-item-action d-flex align-items-center aniBtn">
                    <svg className="bi pe-none me-2" width="50" height="50"><use xlinkHref="/src/assets/svg/email.svg#email"/></svg>
                    E-mail
                </a>
                <a href="https://www.linkedin.com/company/lowanx/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3B4EvV9IOuRxOpZ7DLOBq9Nw%3D%3D" className="list-group-item list-group-item-action d-flex align-items-center aniBtn">
                    <svg className="bi pe-none me-2" width="50" height="50"><use xlinkHref="/src/assets/svg/linkedin.svg#linkedin"/></svg>
                    LinkedIn
                </a>
                <a href="https://github.com/devKire/LowAnx" className="list-group-item list-group-item-action d-flex align-items-center aniBtn">
                    <svg className="bi pe-none me-2" width="50" height="50"><use xlinkHref="/src/assets/svg/github.svg#github"/></svg>
                    GitHub
                </a>
            </div>
        </div>
      <Footer />
      <Waves />
    </>
  );
}
