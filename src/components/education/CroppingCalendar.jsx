'use client';
import { motion } from 'framer-motion';

export default function CroppingCalendar() {
  // Sample cropping calendars
  const croppingCalendars = [
    {
      crop: 'Maize',
      seasons: [
        { name: 'Major Season', plantingTime: 'March-April', harvestTime: 'July-August' },
        { name: 'Minor Season', plantingTime: 'August-September', harvestTime: 'November-December' }
      ],
      regions: ['All regions except coastal areas']
    },
    {
      crop: 'Rice',
      seasons: [
        { name: 'Major Season', plantingTime: 'April-May', harvestTime: 'August-September' },
        { name: 'Minor Season', plantingTime: 'September-October', harvestTime: 'December-January' }
      ],
      regions: ['Volta Region', 'Northern Region', 'Upper East']
    },
    {
      crop: 'Cassava',
      seasons: [
        { name: 'Year-round', plantingTime: 'Beginning of rainy season', harvestTime: '9-12 months after planting' }
      ],
      regions: ['All regions']
    },
    {
      crop: 'Yam',
      seasons: [
        { name: 'Main Season', plantingTime: 'December-January', harvestTime: 'July-August' }
      ],
      regions: ['Brong Ahafo', 'Northern Region', 'Volta Region']
    },
    {
      crop: 'Tomatoes',
      seasons: [
        { name: 'Major Season', plantingTime: 'March-April', harvestTime: 'June-July' },
        { name: 'Minor Season', plantingTime: 'August-September', harvestTime: 'November-December' }
      ],
      regions: ['Upper East', 'Brong Ahafo', 'Greater Accra']
    },
    {
      crop: 'Plantain',
      seasons: [
        { name: 'Year-round', plantingTime: 'Beginning of rainy season', harvestTime: '12-18 months after planting' }
      ],
      regions: ['Forest zones', 'Ashanti Region', 'Eastern Region', 'Western Region']
    },
    {
      crop: 'Cocoa',
      seasons: [
        { name: 'Main Harvest', plantingTime: 'Beginning of rainy season', harvestTime: 'October-February' },
        { name: 'Light Crop', plantingTime: 'N/A', harvestTime: 'May-August' }
      ],
      regions: ['Western Region', 'Ashanti Region', 'Brong Ahafo', 'Eastern Region']
    },
    {
      crop: 'Groundnuts',
      seasons: [
        { name: 'Major Season', plantingTime: 'April-May', harvestTime: 'August-September' },
        { name: 'Minor Season', plantingTime: 'August-September', harvestTime: 'November-December' }
      ],
      regions: ['Northern Region', 'Upper East', 'Upper West']
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-ghana-green-700 mb-8">Ghana Cropping Calendar</h2>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-ghana-green-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-ghana-green-700 uppercase tracking-wider">
                  Crop
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-ghana-green-700 uppercase tracking-wider">
                  Season
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-ghana-green-700 uppercase tracking-wider">
                  Planting Time
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-ghana-green-700 uppercase tracking-wider">
                  Harvest Time
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-ghana-green-700 uppercase tracking-wider">
                  Suitable Regions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {croppingCalendars.flatMap((calendar) => 
                calendar.seasons.map((season, index) => (
                  <tr key={`${calendar.crop}-${index}`} className="hover:bg-ghana-green-50">
                    {index === 0 ? (
                      <td rowSpan={calendar.seasons.length} className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 align-top">
                        {calendar.crop}
                      </td>
                    ) : null}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {season.name}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {season.plantingTime}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {season.harvestTime}
                    </td>
                    {index === 0 ? (
                      <td rowSpan={calendar.seasons.length} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 align-top">
                        {calendar.regions.join(', ')}
                      </td>
                    ) : null}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-8 bg-ghana-green-50 p-6 rounded-lg">
        <h3 className="text-lg font-semibold text-ghana-green-700 mb-4">Understanding Ghana's Agricultural Seasons</h3>
        <p className="text-gray-700 mb-4">
          Ghana generally has two main growing seasons in the south: the major season from March/April to July/August and the minor season from September to November. 
          The northern regions typically have one main growing season from May to September.
        </p>
        <p className="text-gray-700">
          These timings can vary based on local climate conditions and annual rainfall patterns. Always consult with local agricultural extension officers for specific advice for your area.
        </p>
      </div>
    </div>
  );
}