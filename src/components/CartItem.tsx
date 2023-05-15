import { Button, Stack } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import storeItems from '../data/items.json'
import { formatCurrency } from '../utils/formatCurrency'
type CartItemProps = {
    id: number
    quantity: number
}

const CartItem = ({ id, quantity }: CartItemProps) => {

    const { removerFromCart } = useShoppingCart()
    const item = storeItems.find(i => i.id === id)
    if (item == null) return null
    return (
        <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
            <img src={item.imgUrl} style={{ width: '125px', height: '75px', objectFit: 'cover' }} />
            <div className="me-auto">
                <div>
                    {item.name}
                    {quantity > 1 &&
                        <span style={{ fontSize: '.65rem' }} className='text-muted'>
                            x{quantity}
                        </span>}
                </div>
                <div
                    style={{ fontSize: '.75rem' }}
                    className="text-muted">
                    {formatCurrency(item.price)}
                </div>
                <div
                    >
                    {formatCurrency(item.price * quantity)}
                </div>
                <Button variant='danger' size='sm' onClick={()=>removerFromCart(item.id)}>&times;</Button>
            </div>
        </Stack>
    )
}

export default CartItem