'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function NavbarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get('genre');
  return (
    <div>
      <Link
        className={`text-white hover:text-amber-500 font-semibold ${
          genre === param
            ? ' text-lime-500'
            : ''
        }`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}