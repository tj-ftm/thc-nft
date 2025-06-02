
import React from 'react';
import { useWeb3 } from '@/contexts/Web3Context';

const PaintswapGallery = () => {
  const { paintswapNFTs } = useWeb3();

  if (!paintswapNFTs.length) return <p>No NFTs found via PaintSwap.</p>;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {paintswapNFTs.map(nft => (
        <div key={nft.id} className="border rounded p-2">
          <img src={nft.image} alt={nft.name} className="w-full h-auto rounded" />
          <p className="mt-1 text-sm text-center">{nft.name}</p>
        </div>
      ))}
    </div>
  );
};

export default PaintswapGallery;
