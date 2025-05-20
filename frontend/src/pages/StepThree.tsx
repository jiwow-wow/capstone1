import React, { useEffect, useState } from 'react';
import * as Papa from 'papaparse';
import ProductRecommendations, { Product } from '../components/ProductRecommendations';
import './StepThree.css';

const StepThree: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
    // 예시 데이터
const exampleProducts: Product[] = [
  {
    category: '크림',
    detail: '',
    brand: '에스트라',
    name: '아토베리어365 크림',
    tags: [],
    volumePrice: '80ml / 33,000원',
    rating: 4.65,
    reviewCount: 0,
    image: 'https://dn5hzapyfrpio.cloudfront.net/product/4ff/4ffddc50-8812-11ee-b2fa-3b16a1075b95.jpeg',
    link: ''
  },
  {
    category: '스킨/토너',
    detail: '',
    brand: '비플랫',
    name: '퓨어 토너',
    tags: [],
    volumePrice: '210ml / 19,800원',
    rating: 4.22,
    reviewCount: 0,
    image: 'https://dn5hzapyfrpio.cloudfront.net/home/glowmee/upload/20190530/1559198978510.png',
    link: ''
  },
  {
    category: '패드',
    detail: '',
    brand: '어터',
    name: '스퀘어 팩 패드 모이스처',
    tags: [],
    volumePrice: '70ea / 32,000원',
    rating: 4.65,
    reviewCount: 0,
    image: 'https://dn5hzapyfrpio.cloudfront.net/product/f12/f1241d00-d1f2-11ed-9e4b-0b5cf4b72039.jpeg',
    link: ''
  },
  {
    category: '크림',
    detail: '',
    brand: '바이오더마',
    name: '아토덤 인텐시브 밤',
    tags: [],
    volumePrice: '200ml / 33,000원',
    rating: 4.49,
    reviewCount: 0,
    image: 'https://dn5hzapyfrpio.cloudfront.net/product/58f/58f66da0-20e4-11ec-98c2-4d15ad70e488.jpeg',
    link: ''
  },
  {
    category: '로션',
    detail: '',
    brand: '에스트라',
    name: '아토베리어 365 로션',
    tags: [],
    volumePrice: '150ml / 33,000원',
    rating: 4.43,
    reviewCount: 0,
    image: 'https://dn5hzapyfrpio.cloudfront.net/product/7fb/7fb55e40-e042-11ee-87c6-2137a11c980a.jpeg',
    link: ''
  }
];


    // 예시 데이터로 제품 정보 설정
    setProducts(exampleProducts);
  }, []);


  
  // useEffect(() => {
  //   fetch('../assets/Total_DB.csv')
  //     .then(res => res.text())
  //     .then(csvText => {
  //       Papa.parse(csvText, {
  //         header: true,
  //         skipEmptyLines: true,
  //         complete: (result: any) => {  // 타입을 any로 지정
  //           const parsed: Product[] = result.data.map((row: any) => ({
  //             category: row['카테고리'] || '',
  //             detail: row['세부'] || '',
  //             brand: row['브랜드'] || '',
  //             name: row['제품명'] || '',
  //             tags: typeof row['태그'] === 'string' ? row['태그'].split(',').map((tag: string) => `#${tag.trim()}`) : [],
  //             volumePrice: row['용량/가격'] || '',
  //             rating: parseFloat(row['별점']) || 0,
  //             reviewCount: parseInt(row['리뷰수']) || 0,
  //             image: row['이미지(링크)'] || '',
  //             link: row['제품링크'] || '',
  //           }));

  //           setProducts(parsed.slice(0, 5));
  //         }
  //       });
  //     })
  //     .catch(err => console.error('CSV 읽기 실패:', err));
  // }, []);

  return (
    <div className="StepThreeContainer">
      {products.length > 0 && <ProductRecommendations products={products} />}
    </div>
  );
};

export default StepThree;
