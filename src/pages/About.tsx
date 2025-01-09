import React from 'react';

const About: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gradient-to-br from-indigo-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-indigo-900 mb-8">About Us</h1>
          <div className="bg-white rounded-xl shadow-md p-8">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
              alt="Team collaboration"
              className="w-full h-64 object-cover rounded-lg mb-8"
            />
            <div className="prose max-w-none">
              <p className="text-lg text-gray-600 mb-6">
                We are a passionate team dedicated to creating amazing experiences
                for our users. Our mission is to provide innovative solutions that
                make a difference in people's lives.
              </p>
              <h2 className="text-2xl font-semibold text-indigo-900 mb-4">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                To be the leading provider of innovative solutions in our industry,
                setting new standards for excellence and user satisfaction.
              </p>
              <h2 className="text-2xl font-semibold text-indigo-900 mb-4">
                Our Values
              </h2>
              <ul className="list-disc list-inside text-lg text-gray-600 mb-6">
                <li>Innovation and creativity</li>
                <li>Customer satisfaction</li>
                <li>Team collaboration</li>
                <li>Continuous improvement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;