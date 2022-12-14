import React, { useEffect } from 'react';
import { FiPhoneCall, FiMapPin, FiMail } from 'react-icons/fi';
import Head from '../Contact/Head';
// import Layout from '../Layout/Layout';

function ContactUs() {
  const ContactData = [
    {
      id: 1,
      title: 'Email Us',
      // info: 'Interactively grow backend ideas for cross-platform models.',
      icon: FiMail,
      contact: 'Boxoffice@gmail.com',
    },
    {
      id: 2,
      title: 'Call Us',
      // info: 'Distinctively exploit optimal alignments for intuitive bandwidth.',
      icon: FiPhoneCall,
      contact: '+962 778 083 539',
    },
    {
      id: 3,
      title: 'Location',
      info: 'Amman-Jordan',
      icon: FiMapPin,
      contact: '',
    },
  ];
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
  });
  },[])
  return (
    <div>
      <div className="min-height-screen container mx-auto px-2 my-6">
        <Head title="Contact Us" />
        <div className="grid mg:grid-cols-2 gap-6 lg:my-20 my-10 lg:grid-cols-3 xl:gap-8 ">
          {ContactData.map((item) => (
            <div
              key={item.id}
              className="border border-border flex-colo p-10 bg-dark rounded-lg text-center"
            >
              <span className="flex-colo w-20 h-20 mb-4 rounded-full bg-main text-subMain text-4xl ">
                <item.icon />
              </span>
              <h5 className="text-2xl font-semibold mb-2">{item.title}</h5>
              <p className="mb-0 text-xl text-text leading-7">
                <a href={`mailto:${item.contact}`} className="text-wight-600">
                  {item.contact}
                </a>{' '}
                <span className="text-wight-600">{item.info}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ContactUs;