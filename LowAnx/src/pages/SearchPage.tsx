import { Link } from "react-router-dom"
import { routes } from "../router/routes"
import Footer from "../components/footer"
import Divider from "../components/divider"
import Header from "../components/header"

export default function SearchPage() {
  return (
    <>
      <Header />
      <Divider />
      <main>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <form className="mt-4">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Digite sua pesquisa..." />
                            <button className="btn btn-primary" type="submit">Pesquisar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </main>
      <Footer />
    </>
  );
}
