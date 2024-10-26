import Background from "./_components/background";
import Body from "./_components/body";
import Footer from "./_components/footer";
import Header from "./_components/header";

export default function Index() {
  return (
    <main>
      <div className="relative">
        <Background quantityImages={32} />
        <Header />
        <Body />
        <Footer />
      </div>
    </main>
  );
}
