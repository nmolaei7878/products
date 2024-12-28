'use client';

import { getProducts } from '@/api/product';
import { DebouncedInput } from '@/components/DebouncedInput';
import ListTile from '@/components/ListTile';
import { Product } from '@/types/Product';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

export default function Home() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(),
    staleTime: 15 * 1000,
  });

  const [product, setProduct] = useState<Array<Product>>(data ?? []);

  useEffect(() => {
    if (data) {
      setProduct(data);
    }
  }, [data]);

  function search(searchText: string) {
    if (!searchText.trim()) {
      setProduct(data ?? []);
      return;
    }
    const lowercasedFilter = searchText.toLowerCase();
    const filteredData = data?.filter((p) =>
      p.title.toLowerCase().includes(lowercasedFilter)
    );
    setProduct(filteredData ?? []);
  }

  if (isLoading) {
    return <div>loading products</div>;
  }

  if (error) {
    return <div>there is a problem</div>;
  }

  return (
    <>
      <DebouncedInput
        value={''}
        onChange={search}
        placeholder="Type to search..."
        delay={500}
      />
      <div
        className={`bg-cover w-full dark:bg-slate-200 bg-background bg-center text-white pt-20 sm:pt-0 p-4`}
      >
        {product?.length > 0 ? (
          <div className=" items-center justify-center gap-6 sm:gap-10 grid sm:grid-cols-5 grid-cols-2">
            {product.map((product) => {
              return <ListTile key={product.id} product={product} />;
            })}
          </div>
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </>
  );
}
