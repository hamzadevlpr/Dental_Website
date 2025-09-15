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
    <div className="rounded-2xl border-[#14a085] border bg-white p-[6px]">
      <div className="relative flex h-[180px] w-full items-center justify-center rounded-xl p-4">
        <img src={image} alt={`${title} image`} className="max-h-full max-w-full object-contain" />
        {discount && (
          <span className="absolute top-2 left-2 rounded-md bg-[#14a085] px-2 py-1 text-sm text-white">
            -{discount}%
          </span>
        )}
        <button onClick={hanleFavorite} className="cursor-pointer group absolute top-2 right-1 rounded-md px-2 py-1 text-sm text-[#14a085]">
          <Heart
            size={24}
            className={`stroke-current fill-${isFavorite ? "current" : "transparent"} group-hover:fill-current transition-colors`}
          />
        </button>

      </div>

      <div className="p-2 pt-0">
        <h3 className="my-2 line-clamp-2 text-sm font-medium sm:h-12">{title}</h3>

        <div className="mb-2 flex items-center">
          <span className="mr-2 text-lg font-medium text-[#14a085]">PKR {price}</span>
          {discountedPrice && (
            <span className="font-medium text-[#C9C9C9] line-through">PKR {discountedPrice}</span>
          )}
        </div>

        <div className="flex gap-[10px]">
          <button
            onClick={handleShowProductInfo}
            className="cursor-pointer rounded-md bg-[#d7fdf6] p-2 hover:bg-[#aef5e8] focus:outline-[#e1e2e6]"
            aria-label={`View details of ${title}`}
          >
            <BadgeInfo color="#C9C9C9" />
          </button>
          <button
            onClick={handleAddToCart}
            className="cursor-pointer w-full rounded-md bg-[#d7fdf6] py-[6px] font-medium text-[#14a085] hover:bg-[#aef5e8] focus:outline-[#e1e2e6]"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard