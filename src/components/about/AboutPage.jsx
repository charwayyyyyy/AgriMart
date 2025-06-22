import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GhanaPattern from '../assets/ghana-pattern.svg';
import TeamMember1 from '../assets/team1.jpg';
import TeamMember2 from '../assets/team2.jpg';
import TeamMember3 from '../assets/team3.jpg';

gsap.registerPlugin(ScrollTrigger);

const ValueCard = ({ symbol, title, description }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="w-20 h-20 mb-4 bg-green-100 rounded-full flex items-center justify-center">
        <img src={symbol} alt="Adinkra symbol" className="w-12 h-12" />
      </div>
      <h3 className="text-lg font-bold text-green-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </motion.div>
  );
};

const TeamMember = ({ image, name, role }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-green-700 mb-3">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h4 className="font-medium text-gray-900">{name}</h4>
      <p className="text-sm text-green-600">{role}</p>
    </div>
  );
};

const TimelineItem = ({ year, event }) => {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-green-500">
      <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-2 top-0"></div>
      <div className="font-bold text-green-700">{year}</div>
      <p className="text-gray-600">{event}</p>
    </div>
  );
};

export default function AboutPage() {
  const values = [
    {
      symbol: GhanaPattern,
      title: "Sustainability",
      description: "We prioritize eco-friendly farming practices that protect Ghana's rich agricultural heritage."
    },
    {
      symbol: GhanaPattern,
      title: "Community",
      description: "Building strong relationships with local farmers to create shared prosperity."
    },
    {
      symbol: GhanaPattern,
      title: "Quality",
      description: "Delivering the freshest, highest quality produce from farm to your table."
    }
  ];

  const team = [
    {
      image: TeamMember1,
      name: "Kwame Asante",
      role: "Founder & CEO"
    },
    {
      image: TeamMember2,
      name: "Ama Osei",
      role: "Head of Farmer Relations"
    },
    {
      image: TeamMember3,
      name: "Kofi Mensah",
      role: "Product Manager"
    }
  ];

  const milestones = [
    { year: "2018", event: "Founded with 5 local farmers in Kumasi" },
    { year: "2019", event: "Expanded to serve Accra region" },
    { year: "2020", event: "Reached 100+ partner farmers" },
    { year: "2021", event: "Launched mobile app for easier ordering" },
    { year: "2022", event: "Served over 10,000 customers nationwide" }
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Our Story</h1>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            AgriMart was born from a deep respect for Ghana's farming traditions and a vision to connect urban consumers directly with rural farmers. Our mission is to create sustainable livelihoods for farmers while providing fresh, quality produce to our customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Rooted in Ghanaian Heritage</h2>
            <p className="text-gray-600 mb-4">
              Drawing inspiration from centuries of agricultural wisdom, we've built a platform that honors the hard work of Ghana's farmers while embracing modern technology to improve efficiency and reach.
            </p>
            <p className="text-gray-600">
              The Adinkra symbol of 'Sankofa' - learning from the past to build the future - guides our approach as we blend tradition with innovation.
            </p>
          </div>
          <div className="bg-green-100 rounded-lg overflow-hidden aspect-video">
            {/* Placeholder for farming video or image */}
            <div className="w-full h-full flex items-center justify-center text-green-800">
              <span>Farming Heritage Visual</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Our Values</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <ValueCard 
              key={index}
              symbol={value.symbol}
              title={value.title}
              description={value.description}
            />
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Meet Our Team</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A passionate group of individuals dedicated to transforming Ghana's agricultural sector.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
          {team.map((member, index) => (
            <TeamMember 
              key={index}
              image={member.image}
              name={member.name}
              role={member.role}
            />
          ))}
        </div>
      </section>

      {/* Milestones Section */}
      <section className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Our Journey</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          {milestones.map((milestone, index) => (
            <TimelineItem 
              key={index}
              year={milestone.year}
              event={milestone.event}
            />
          ))}
        </div>
      </section>
    </div>
  );
}