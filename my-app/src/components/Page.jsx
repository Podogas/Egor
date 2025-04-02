
import './Page.css';
import LifeStats from './LifeStats';

function Page() {
  return (
    <div className="Page">
      {/* ДАТА ПОМЕНЯТЬ С УЧЕТОМ -3 ЧАСА */}
      <LifeStats birthDate="1996-04-02T22:18:00"></LifeStats>
    </div>
  );
}

export default Page;
