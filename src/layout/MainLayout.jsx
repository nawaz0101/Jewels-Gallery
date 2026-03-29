import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function MainLayout({children,search,setSearch,scrollToProducts}){
    return(
        <div className="app">
            <Navbar search={search} setSearch={setSearch} scrollToProducts={scrollToProducts}/>
            <main>{children}</main>
            <Footer/>
        </div>
    );
}
