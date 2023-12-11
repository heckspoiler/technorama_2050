import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <div>
      <Image
        src="/images/header/logo_schriftzug.png" // Changed to direct path from the public folder
        height={472 / 18}
        width={3000 / 18}
        alt="Technorama Logo"
      />
    </div>
  );
};

export default Logo;
