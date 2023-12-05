import { FC } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { getImageFromStorage } from '@/lib/hooks/api/getImageFromStorage'

type ProductItemProps = {
  price: number
  name: string
  width?: number
  height?: number
  imageWidth?: number
  imageHeight?: number
  imageFileName?: string
}
export const ProductItem: FC<ProductItemProps> = ({
  price,
  name,
  imageFileName,
  width = 200,
  height = 250,
  imageWidth = 100,
  imageHeight = 100,
}) => {
  const ItemDiv = styled.div`
    width: ${width}px;
    height: ${height}px;
    background: #949593;
    padding: 10px;
  `
  const ImageWrapper = styled.div`
    text-align: center;
  `
  imageFileName = getImageFromStorage(imageFileName ?? '')

  return (
    <ItemDiv>
      <ImageWrapper>
        <Image
          src={imageFileName}
          width={imageWidth}
          height={imageHeight}
          alt='商品イメージ'
        />
      </ImageWrapper>
      <p>商品名：{name}</p>
      <p>価格：¥{price}</p>
    </ItemDiv>
  )
}
