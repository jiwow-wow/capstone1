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
        category: '스킨/토너',
        detail: '워터토너',
        brand: '웰라쥬',
        name: '리얼 히알루로닉 100 토너',
        tags: ['#보습', '#수분공급', '#저자극', '#피부진정'],
        volumePrice: '200ml / 20,000원',
        rating: 4.59,
        reviewCount: 977,
        image: 'https://dn5hzapyfrpio.cloudfront.net/product/4f0/4f099f10-4086-11ee-9736-9b07020e79ca.jpeg',
        link: 'https://www.glowpick.com/products/167428'
      },
      {
        category: '스킨/토너',
        detail: '워터토너',
        brand: '닥터릴리프',
        name: '디에이씨투 알래스카 엘엠더블유 히알루로닉 토너',
        tags: ['#미스트토너', '#보습', '#수분공급', '#저자극', '#피부결정돈', '#피부진정', '#피지조절'],
        volumePrice: '205ml / 39,000원',
        rating: 4.62,
        reviewCount: 292,
        image: 'https://dn5hzapyfrpio.cloudfront.net/product/760/760a86d0-5617-11eb-aec2-430bda4ab232.jpeg',
        link: 'https://www.glowpick.com/products/142713'
      },
      {
        category: '스킨/토너',
        detail: '워터토너',
        brand: '에스트라',
        name: '에이시카365 수분 진정 결 토너',
        tags: ['#수분공급', '#약산성', '#저자극', '#피부진정'],
        volumePrice: '250ml / 30,000원',
        rating: 4.61,
        reviewCount: 547,
        image: 'https://dn5hzapyfrpio.cloudfront.net/product/d4c/d4c68260-8648-11ed-a933-9b1327ab78fd.jpeg',
        link: 'https://www.glowpick.com/products/161713'
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
