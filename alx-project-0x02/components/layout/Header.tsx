// components/Header.tsx
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header style={{ background: '#f0f0f0', padding: '1rem' }}>
      <nav className="flex gap-6 text-black">
        <Link href="/home" className="hover:underline ">
          Home
        </Link>
        <Link href="/about" className="hover:underline ">
          About
        </Link>
        <Link href="/posts" className="hover:underline ">
          Posts
        </Link>
        <Link href="/users" className="hover:underline ">
          Users
        </Link>
      </nav>
    </header>
  );
};

export default Header;
