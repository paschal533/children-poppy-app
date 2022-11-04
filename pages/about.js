import Image from 'next/image';
import { grpahCMSImageLoader } from '../util';
import { Categories } from '../components';

function About() {
  return (
    <div className="container mx-auto px-2 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="col-span-1 lg:col-span-8">
          <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
            <div className="absolute left-0 right-0 -top-14">
              <Image
                unoptimized
                loader={grpahCMSImageLoader}
                alt="image"
                height="200px"
                width="200px"
                className="align-middle rounded-full"
                src="/koi.jpg"
              />
            </div>
            <h3 className="name text-white mt-20 mb-4 text-xl font-bold">Miss Okwuosah Victoria</h3>
            <p className="text-white text-ls">Miss Kosi Okwusah is graduate of Early Childhood
              Education from the University of Benin, Nigeria. she is very passionate about children and has had a worthwhile
              experience in teaching. she shares the knowledge and skills she has acquired overtime as she
              embarks on an unending journey to acquire more.
            </p>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
