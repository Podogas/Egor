
import './Page.css';
import LifeStats from './LifeStats';
import Presentation from './Presentation';
import FlappyBird from './FlappyBird';
function Page() {
  return (
    <div className="pages">
      <Presentation></Presentation>
      {/* ДАТА ПОМЕНЯТЬ С УЧЕТОМ -3 ЧАСА */}
      <LifeStats birthDate="1996-04-05T07:45:00Z"></LifeStats>
      <FlappyBird></FlappyBird>
    </div>
  );
}

export default Page;
