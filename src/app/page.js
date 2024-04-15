
import Coolvibes from '@/components/coolvibes/page';
import Main from '@/components/main/page';
import Header from '@/components/header/page';
import Special from '@/components/special/page';
import Bestsellers from '@/components/bestsellers/page';
import VisitUs from '@/components/visiteus/visiteus';
import Footer from '@/components/footer/footer';


export default function Home() {
  return (
      <>
        <Header/>
        <Main/>
        <Coolvibes/>
        <Special/>
        <Bestsellers/>
        <VisitUs/>
        <Footer/>
      </>    
  );
}
