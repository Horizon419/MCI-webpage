import { FaCrown } from 'react-icons/fa';
import SectionHead from './SectionHead';
import { programs } from '../data'
import {Link} from 'react-router-dom'
import Card from '../UI/Card';

const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionHead icon={<FaCrown />} title="Programs" />

        <div className="programs__wrapper">
          {programs.map(({ id, icon, title, info }) => {
            return (
              <Card className="programs__programs" key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to='/contact' className="btn sm">
                  More
                  
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Programs