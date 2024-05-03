import { Link } from "react-router-dom"
import { routes } from "../router/routes"
import Footer from "../components/footer"
import Divider from "../components/divider"
import Header from "../components/header"
import Waves from "../components/waves"

export default function AboutPage() {
  return (
    <>
      <Header />
      <Divider />
      
      <Footer />
      <Waves />
    </>
  );
}
