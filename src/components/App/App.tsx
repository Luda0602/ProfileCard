import Header from "../Header/Header";
import ProfileCard from "../ProfileCard/ProfileCard";
import Footer from "../Footer/Footer";


export default function App () {
  return (
    <>
    <Header />
    <ProfileCard
    name="Luda"
    description="React beginner"
    email="ludamocuk29@gmail.com"
    />
    <Footer />
    </>
  );
}


