'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Product } from '@/types/Product';

interface Props {
  product: Product;
}

const ListTile: React.FC<Props> = ({ product }) => {
  const router = useRouter();

  function navigateToDetailPage() {
    router.push(`/${product.id}`);
  }

  return (
    <>
      <div
        onClick={navigateToDetailPage}
        className="w-44 h-44 relative group cursor-pointer mt-2"
      >
        <Image
          width={300}
          height={300}
          className="w-full h-full rounded-3xl filter grayscale group-hover:scale-105 "
          src={product.image}
          alt=""
        />
        <div className="hidden p-4 group-hover:block absolute bottom-0 left-0 w-full h-1/3 z-20 rounded-3xl bg-slate-500 opacity-70">
          <p className="text-sm text-white">{product.title}</p>
        </div>
      </div>
    </>
  );
};

export default ListTile;
