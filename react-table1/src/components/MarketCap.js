import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MarketCap() {
  const [marketCap, setMarketCap] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMarketCap = async () => {
      try {
        // 요청이 시작할 때에는 error와 marketCap을 초기화하고
        setError(null);
        setMarketCap(null);
        // loading 상태를 true로 바꿉니다.
        setLoading(true);
        const response = await axios.get(
          'http://13.125.107.80:3000/api/companies'
        );
        setMarketCap(response.data); // 데이터는 response.data 안에 들어있습니다.
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchMarketCap();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!marketCap) return null;
  
  return (
    <ul>
      {marketCap.map(cap =>(
        <li key={cap.stock_code}>
          {cap.stock_code} | {cap.name} | {cap.wics_name_1} | {cap.common_shrs}
        </li>
      ))}
    </ul>
  );
}




export default MarketCap
