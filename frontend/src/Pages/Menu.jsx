import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Menu = () => {
  const menuUrl = "https://68fe1ad67c700772bb12cf2a.mockapi.io/menuitems/Menu"; // your MockAPI endpoint
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get(menuUrl);
        setMenu(response.data);
      } catch (error) {
        console.log("Error fetching menu data:", error);
      }
    };
    fetchMenu();
  }, []);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="text-center mb-10 space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-900">Our Menu</h2>
        <p className="text-lg md:text-2xl text-gray-900 font-semibold">
          Discover our carefully curated selection of coffee and cuisine
        </p>
      </div>

      {/* Menu Section */}
      <section className="max-w-7xl mx-auto">
        <div className="flex gap-6 overflow-x-auto px-4 md:px-8 py-4  scroll-smooth">
          {menu.map((item) => (

            <div key={item.id} className="p-4 max-w-[80px] sm:max-w-[280px] md:max-w-[280px]  bg-amber-50 rounded-2xl shadow-md  flex-shrink-0">
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t-2xl"/>
            
              <div className="p-4 space-y-2 ">
                <h3 className="text-lg md:text-xl font-bold text-amber-950 text-center">{item.title}</h3>
                <p className="text-sm md:text-base text-amber-700 text-center">{item.description}</p>
                
                {item.items && (
                  <ul className="text-gray-700 text-sm md:text-base list-disc pl-5 space-y-1">
                    {item.items.map((subItem, index) => (
                      <li key={index}>{subItem}</li>
                    ))}
                  </ul>
                )}
              
              </div>
            </div>
          ))}
        </div>
        <div className='flex items-center justify-center m-8 mt-16'><p className='text-center flex text-lg text-gray-800 '>""""All menu items are prepared fresh daily. Ask about our seasonal specials and dietary accommodations.""""</p></div>
      </section>
    </div>
  );
};

export default Menu;
