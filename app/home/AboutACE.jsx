import React from 'react';

const AboutACE = () => {
  return (
    <div className="flex items-center justify-center w-full bg-black text-white py-12">
      <div className="gap-8 max-w-5xl p-6 text-left">
        <div className="col-span-2 flex items-center mb-6">
          {/* Icon */}
          <div className="w-6 h-6 rounded-full bg-red-600 mr-2"></div>
          <div className="w-6 h-6 rounded-full border-2 border-red-600"></div>
          {/* Heading */}
          <h2 className="ml-4 text-4xl font-bold">About ACE</h2>
        </div>

        <div className='grid lg:grid-cols-2 w-full gap-[1rem] '>
            {/* Column 1, Row 1 */}
            <div className="p-4 border rounded-md hover:bg-white hover:text-black transition w-full">
            <h3 className="text-2xl font-semibold mb-2">A Leader in Engineering Education</h3>
            <p className="text-lg">
                Since 2007, ACE has been shaping industry-ready engineers with a focus on innovation and leadership.
            </p>
            </div>

            {/* Column 2, Row 1 */}
            <div className="p-4 border rounded-md hover:bg-white hover:text-black transition w-full">
            <h3 className="text-2xl font-semibold mb-2">Pioneers in Innovation</h3>
            <p className="text-lg">
                From AI to IoT, ACE fosters cutting-edge technological advancements and entrepreneurial growth through its start-up incubator.
            </p>
            </div>

            {/* Column 1, Row 2 */}
            <div className="p-4 border rounded-md hover:bg-white hover:text-black transition w-full">
            <h3 className="text-2xl font-semibold mb-2">Unmatched Placements</h3>
            <p className="text-lg">
                Our graduates secure top placements with global giants like Cisco and Amazon, with packages up to INR 17.8 LPA.
            </p>
            </div>

            {/* Column 2, Row 2 */}
            <div className="p-4 border rounded-md hover:bg-white hover:text-black transition w-full">
            <h3 className="text-2xl font-semibold mb-2">Transformative Education</h3>
            <p className="text-lg">
                A blend of practical learning, global perspectives, and holistic development ensures ACE produces well-rounded engineers.
            </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutACE;
