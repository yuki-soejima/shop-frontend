import { FC } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

type ProductItemProps = {
  price: number
  name: string
  width?: number
  height?: number
  imageWidth?: number
  imageHeight?: number
  imagePath?: string
}
export const ProductItem: FC<ProductItemProps> = ({
  price,
  name,
  width = 200,
  height = 400,
  imageWidth = 100,
  imageHeight = 100,
  imagePath = '/assets/images/dummy/NoImage.jpeg',
}) => {
  const ItemDiv = styled.div`
    width: ${width}px;
    height: ${height}px;
  `

  return (
    <ItemDiv>
      <Image
        src={imagePath}
        width={imageWidth}
        height={imageHeight}
        alt='商品イメージ'
      />
      <p>{name}</p>
      <p>¥{price}</p>
    </ItemDiv>
  )
}
