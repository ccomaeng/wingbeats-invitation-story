
import React from 'react';

const Map = () => {
  return (
    <div className="w-full h-full min-h-[600px] bg-white/80 backdrop-blur-sm rounded-lg shadow-lg">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.9815876545937!2d127.88333!3d37.68333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQxJzAwLjAiTiAxMjfCsDUzJzAwLjAiRQ!5e0!3m2!1sko!2skr!4v1650000000000!5m2!1sko!2skr"
        className="w-full h-full rounded-lg"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default Map;
