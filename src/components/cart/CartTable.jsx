"use client"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash2 } from "lucide-react"
import { useState, useEffect } from "react"
import { cartUtils } from "@/lib/utils"
import { toast } from "sonner"
import Link from "next/link"
import { useRouter } from "next/navigation"

const CartTable = ({ onProductSelect }) => {
  const [cartItems, setCartItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Load cart data from localStorage on component mount
  useEffect(() => {
    loadCartData()
  }, [])

  // Pass the first cart item's ID to parent component when cart loads
  useEffect(() => {
    if (cartItems.length > 0 && onProductSelect) {
      onProductSelect(cartItems[0].product_id)
    }
  }, [cartItems, onProductSelect])

  const loadCartData = () => {
    try {
      const cartData = cartUtils.getCart()
      setCartItems(cartData)
    } catch (error) {
      console.error('Error loading cart data:', error)
      toast.error('Failed to load cart data')
    } finally {
      setIsLoading(false)
    }
  }

  const updateQuantity = (productId, change) => {
    const item = cartItems.find(item => item.product_id === productId)
    if (!item) return

    const newQuantity = Math.max(1, item.quantity + change)
    
    try {
      const success = cartUtils.updateQuantity(productId, newQuantity)
      if (success) {
        // Update local state
        setCartItems(prevItems => 
          prevItems.map(item => 
            item.product_id === productId 
              ? { ...item, quantity: newQuantity }
              : item
          )
        )
        toast.success('Quantity updated successfully')
      } else {
        toast.error('Failed to update quantity')
      }
    } catch (error) {
      console.error('Error updating quantity:', error)
      toast.error('Failed to update quantity')
    }
  }

  const removeItem = (productId) => {
    try {
      const success = cartUtils.removeFromCart(productId)
      if (success) {
        // Update local state
        setCartItems(prevItems => prevItems.filter(item => item.product_id !== productId))
        toast.success('Item removed from cart')
      } else {
        toast.error('Failed to remove item')
      }
    } catch (error) {
      console.error('Error removing item:', error)
      toast.error('Failed to remove item')
    }
  }

  const clearCart = () => {
    try {
      cartUtils.clearCart()
      setCartItems([])
      toast.success('Cart cleared successfully')
    } catch (error) {
      console.error('Error clearing cart:', error)
      toast.error('Failed to clear cart')
    }
  }

  const handleProductClick = (productId) => {
    if (onProductSelect) {
      onProductSelect(productId)
    }
  }

  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => {
    const price = parseFloat(item.discount_price || item.regular_price)
    return total + (price * item.quantity)
  }, 0)

  const deliveryCharge = subtotal > 0 ? 5.0 : 0 // Example delivery charge
  const total = subtotal + deliveryCharge

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error('Your cart is empty')
      return
    }

    // Prepare checkout data
    const checkoutData = {
      items: cartItems,
      subtotal: subtotal,
      deliveryCharge: deliveryCharge,
      total: total
    }

    // Store checkout data in localStorage
    localStorage.setItem('checkout_data', JSON.stringify(checkoutData))
    
    // Navigate to checkout page
    router.push('/checkout')
  }

  if (cartItems.length === 0) {
    return (
      <div className=" mt-[120px] p-8 font-inter">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add some products to your cart to get started!</p>
          <Link href="/products"
            // onClick={() => window.history.back()}
            className="bg-heading hover:bg-gray-800 text-white p-4 rounded-md"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }
  if (isLoading) {
    return (
      <div className="container mt-[120px] p-8">
        <div className="text-center">Loading cart...</div>
      </div>
    )
  }
  return (
    <div>
      <div className="container">
        <div
          style={{
            background: "var(--Gradient, linear-gradient(92deg, #F1FAFE 0%, #F8DAB0 100%))",
          }}
          className="p-3 md:p-[30px] mt-[120px]"
        >
          <div className="bg-white">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200 font-inter text-heading text-[20px]">
                    <th className="text-center py-4 pl-[21px]">Image</th>
                    <th className="text-left py-4">Product Name</th>
                    <th className="text-left py-4">Price</th>

                    <th className="text-center py-4">Quantity</th>
                    <th className="text-center py-4">Total</th>
                    <th className="text-center py-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.product_id} className="border-b border-gray-100 font-inter text-heading text-[20px]">
                      <td className="py-4 pl-[21px]">
                        <img
                          src={item.product_image || "/placeholder.svg"}
                          alt={item.product_name}
                          className="w-[103px] h-[100px] object-cover rounded border bg-gray-400"
                        />
                      </td>
                      <td className="py-4 text-left">
                        <div>
                          <div 
                            className="font-medium text-heading text-[20px] leading-[30px] cursor-pointer hover:text-blue-600 hover:underline"
                            onClick={() => handleProductClick(item.product_id)}
                          >
                            {item.product_name}
                          </div>
                          <div className="text-[16px] text-[#A0A6A8]">Code: {item.product_id}</div>
                        </div>
                      </td>
                      <td className="py-4 text-left text-heading text-[20px] leading-[30px]">
                        ${parseFloat(item.discount_price || item.regular_price).toFixed(2)}
                      </td>

                      <td className="py-4 text-center">
                        <div className="flex items-center gap-4 justify-center">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="bg-[#E5E5E5] h-[50px] w-[50px] rounded-[8px]"
                            onClick={() => updateQuantity(item.product_id, -1)}
                          >
                            <Minus className="h-[13px] w-[13px]" />
                          </Button>
                          <span className="flex items-center justify-center h-[50px] w-[50px] text-center text-[20px] font-inter font-medium bg-[#fff] rounded-[8px] border border-[#E5E5E5]">
                            {item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="bg-[#E5E5E5] h-[50px] w-[50px] rounded-[8px]"
                            onClick={() => updateQuantity(item.product_id, 1)}
                          >
                            <Plus className="h-[13px] w-[13px]" />
                          </Button>
                        </div>
                      </td>
                      <td className="py-4 text-center text-heading font-medium">
                        ${(parseFloat(item.discount_price || item.regular_price) * item.quantity).toFixed(2)}
                      </td>
                      <td className="py-4 text-center">
                        <Button
                          variant="ghost"
                          size="sm"
                          className=" p-0 text-gray-500 hover:text-red-500 hover:bg-red-50"
                          onClick={() => removeItem(item.product_id)}
                        >
                          <Trash2 size={24} className="h-10 w-10" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="mt-6 max-w-[700px] ml-auto">
          {" "}
          {/* Added max-w-sm and ml-auto for positioning */}
          <div
            style={{
              background: "var(--Gradient, linear-gradient(92deg, #F1FAFE 0%, #F8DAB0 100%))",
            }}
            className="p-3 md:p-[30px]"
          >
            <div className="bg-white p-6 font-inter rounded">
              <h2 className="text-[26px]  font-medium text-heading mb-6 text-center">Order Summary</h2>

              <div className="space-y-4 mb-6 text-[18px]">
                <div className="flex justify-between items-center">
                  <span className="text-heading">Price</span>
                  <span className="font-medium">KD {subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-head">Delivery Charge</span>
                  <span className="font-medium">KD {deliveryCharge.toFixed(2)}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-head">Subtotal</span>
                  <span className="font-medium">KD {subtotal.toFixed(2)}</span>
                </div>

                <hr className="border-gray-200" />

                <div className="flex justify-between items-center text-lg">
                  <span className="font-medium">Total</span>
                  <span className="font-bold">KD {total.toFixed(2)}</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button 
                  className="w-full bg-black hover:bg-gray-800 text-white py-[25px] text-lg font-medium"
                  onClick={handleCheckout}
                >
                  Checkout
                </Button>
                <Button 
                  variant="outline" 
                  onClick={clearCart}
                  className="w-full border-red-500 text-red-500 hover:bg-red-50 py-[25px] text-lg font-medium"
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartTable
