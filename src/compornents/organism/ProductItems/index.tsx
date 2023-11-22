import { ProductItem } from '@/compornents/molecules/ProductItem'
import { Product } from '@/types/Product'
import { styled } from 'styled-components'
import { FC } from 'react'

const Conteiner = styled.div`
  display: flex;
  gap: 25px;
`

type Props = {
  productList: Product[]
}

export const ProductItems: FC<Props> = ({ productList }) => {
  return (
    <Conteiner>
      {productList.map((elem) => (
        <ProductItem
          key={elem.id}
          price={elem.price}
          name={elem.name}
          imagePath={elem.thumbnail}
        />
      ))}
    </Conteiner>
  )
}
