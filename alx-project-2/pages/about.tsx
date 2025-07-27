// pages/about.tsx
import React from 'react';
import Button from "@/components/common/Button";
const AboutPage = () => {
  return (
    <div className="p-8">
      <h1>About Page</h1>
      <p>This is the about page content.</p>
       <div className="space-x-4">
        <Button label="Small Button" size="small" shape="rounded-sm" />
        <Button label="Medium Button" size="medium" shape="rounded-md" />
        <Button label="Large Button" size="large" shape="rounded-full" />
      </div>
    </div>
  );
};

export default AboutPage;
