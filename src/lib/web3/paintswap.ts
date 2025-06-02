
import { NFTMetadata } from './nftImport';

/**
 * Fetches all NFTs owned by a wallet from PaintSwap's public API
 */
export const fetchPaintswapNFTs = async (walletAddress: string): Promise<NFTMetadata[]> => {
  try {
    if (!walletAddress) return [];

    const response = await fetch(`https://api.paintswap.finance/userNFTs/${walletAddress}`);
    if (!response.ok) throw new Error('PaintSwap API request failed');

    const data = await response.json();

    // Normalize data to fit NFTMetadata interface (if necessary)
    return data.map((nft: any) => ({
      id: nft.tokenId || nft.id,
      name: nft.name || `NFT #${nft.tokenId || nft.id}`,
      image: nft.image || nft.cachedImage || '',
      description: nft.description || '',
      attributes: nft.attributes || [],
      contractAddress: nft.contractAddress,
    }));
  } catch (error) {
    console.error("Error fetching NFTs from PaintSwap:", error);
    return [];
  }
};
