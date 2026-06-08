'use client'
import { addToCart } from '@/redux/cartSlice'
import { toggleFavorite } from '@/redux/favoriteSlice'
import { RootState } from '@/redux/store'
import { BadgeInfo, Heart } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'

export interface ProductType {
  id: number
  title: string
  slug: string
  image: string
  discount?: number
  discountedPrice?: number
  price: number
  category: string
  quantity?: number
}

interface PropsType {
  product: ProductType
}

const ProductCard: React.FC<PropsType> = ({ product }) => {
  const { slug, title, image, discount, discountedPrice, price } = product
  const router = useRouter();
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favoriteSlice.items);
  const isFavorite = favorites.some((i) => i.id === product.id);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  }

  const hanleFavorite = () => {
    dispatch(toggleFavorite(product))
  }

  const handleShowProductInfo = () => {
    router.replace(`/product/${slug}`);
  }

  return (
    <div className="rounded-2xl border-brand-primary/15 border bg-white p-[6px] hover:shadow-[0_8px_30px_rgba(30,123,243,0.12)] transition-all duration-300">
      <div className="relative flex h-[180px] w-full items-center justify-center rounded-xl p-4">
        <img src={image} alt={`${title} image`} className="max-h-full max-w-full object-contain" />
        {discount && (
          <span className="absolute top-2 left-2 rounded-md bg-brand-primary px-2 py-1 text-sm text-white font-semibold">
            -{discount}%
          </span>
        )}
        <button onClick={hanleFavorite} className="cursor-pointer group absolute top-2 right-1 rounded-md px-2 py-1 text-sm text-brand-primary">
          <Heart
            size={24}
            className={`stroke-current fill-${isFavorite ? "current" : "transparent"} group-hover:fill-current transition-colors`}
          />
        </button>

      </div>

      <div className="p-2 pt-0">
        <h3 className="my-2 line-clamp-2 text-sm font-medium sm:h-12">{title}</h3>

        <div className="mb-2 flex items-center">
          <span className="mr-2 text-lg font-medium text-brand-primary">PKR {price}</span>
          {discountedPrice && (
            <span className="font-medium text-[#C9C9C9] line-through">PKR {discountedPrice}</span>
          )}
        </div>

        <div className="flex gap-[10px]">
          <button
            onClick={handleShowProductInfo}
            className="cursor-pointer rounded-md bg-brand-primary/10 p-2 hover:bg-brand-primary/20 focus:outline-brand-primary"
            aria-label={`View details of ${title}`}
          >
            <BadgeInfo className="text-brand-primary" />
          </button>
          <button
            onClick={handleAddToCart}
            className="cursor-pointer w-full rounded-md bg-brand-primary/10 py-[6px] font-medium text-brand-primary hover:bg-brand-primary/20 focus:outline-brand-primary"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard