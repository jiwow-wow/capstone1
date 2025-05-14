import React from 'react';

export interface Product {
  category: string;
  detail: string;
  brand: string;
  name: string;
  tags: string[];
  volumePrice: string;
  rating: number;
  reviewCount: number;
  image: string;
  link: string;
}

interface ProductRecommendationsProps {
  products: Product[];
}

const ProductRecommendations: React.FC<ProductRecommendationsProps> = ({ products }) => {
  return (
    <div className='result-box'>
      <h2 className="recommend-title">당신에게 추천하는 화장품 TOP 5</h2>
      <ul className="product-list">
        {products.map((product, idx) => (
          <li key={idx} className="product-card">
            {/* 상위 박스 1: 텍스트 정보 */}
            <div className="product-info">
              <div className="product-header">
                {product.category} - {product.brand}
              </div>
              <div className="product-name">{product.name}</div>
              <div className="product-tags">{product.tags.join(' ')}</div>
              <div className="product-volume">{product.volumePrice}</div>
              <div className="product-rating">⭐ {product.rating} / 리뷰 {product.reviewCount}개</div>
            </div>

            {/* 상위 박스 2: 이미지 및 링크 */}
            <div className="product-media">
              <img src={product.image} alt={product.name} className="product-image" />
              <a href={product.link} target="_blank" rel="noopener noreferrer" className="product-link">
                제품 보러가기 🔗
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductRecommendations;
