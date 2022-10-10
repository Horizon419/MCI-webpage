import { FaCrown } from 'react-icons/fa';
import SectionHead from './SectionHead';
import { Link } from "react-router-dom";


const Programs = () => {
  return (
    <>
      <section className="programs">
        <div className="container programs__container">
          <SectionHead icon={<FaCrown />} title="Our Programs" />
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-4 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
        <div className="bg-red-400 rounded-xl shadow-2xl">
          <div className="p-8">
            <h3 className="font-bold text-2xl my-6">Coding Academy</h3>
            <p className="text-black-600 text-xl">
              Click below to know more about this program
            </p>
          </div>
          <div className="bg-slate-100 pl-8 py-4">
            <p className="flex items-center text-indigo-600">
              <Link to="/contact">View More</Link>
            </p>
          </div>
        </div>
        <div className="bg-red-400 rounded-xl shadow-2xl">
          <div className="p-8">
            <h3 className="font-bold text-2xl my-6">Fashion Designing</h3>
            <p className="text-black-600 text-xl">
              Click below to know more about this program
            </p>
          </div>
          <div className="bg-slate-100 pl-8 py-4">
            <p className="flex items-center text-indigo-600">
              {" "}
              <Link to="/contact">View More</Link>
            </p>
          </div>
        </div>
        <div className="bg-red-400 rounded-xl shadow-2xl">
          <div className="p-8">
            <h3 className="font-bold text-2xl my-6">Catering & Decoration</h3>
            <p className="text-black-600 text-xl">
              Click below to know more about this program
            </p>
          </div>
          <div className="bg-slate-100 pl-8 py-4">
            <p className="flex items-center text-indigo-600">
              {" "}
              <Link to="/contact">View More</Link>
            </p>
          </div>
        </div>
        <div className="bg-red-400 rounded-xl shadow-2xl">
          <div className="p-8">
            <h3 className="font-bold text-2xl my-6">MCI Driving School</h3>
            <p className="text-black-600 text-xl">
              Click below to know more about this program
            </p>
          </div>
          <div className="bg-slate-100 pl-8 py-4">
            <p className="flex items-center text-indigo-600">
              {" "}
              <Link to="/contact">View More</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Programs