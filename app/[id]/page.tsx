'use client';

import { getProductById } from '@/api/product';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useParams } from 'next/navigation';
const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { data, error, isLoading } = useQuery({
    queryKey: [id],
    queryFn: () => getProductById(id),
    staleTime: 5 * 1000,
  });

  if (isLoading) {
    return <div>loading product {id}</div>;
  }

  if (error) {
    return <div>there is a problem</div>;
  }
  return (
    <>
      <section className="w-screen h-screen">
        <div className="grid sm:grid-cols-2 grid-cols-1 py-10 px-6 justify-items-center h-full">
          <div className="filter grayscale h-5/6 w-2/3">
            <Image
              blurDataURL={'publicwindow.svg'}
              placeholder={'blur'}
              width={500}
              height={500}
              className="rounded-3xl h-full w-full"
              src={data?.image ?? '*static import*'}
              alt={data?.title ?? ''}
            />
          </div>
          <div>
            <h1 className="text-slate-600 font-bold text-[3rem]">
              {data?.title}
            </h1>
            <h3 className="text-slate-600 text-xl mt-10">{data?.title} </h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
