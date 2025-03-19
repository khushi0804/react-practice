import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loading from './Loading';


function Show() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    const getProductsList = async () => {
      try {
        const api = 'https://fakestoreapi.com/products'
        const response = await axios.get(api)
        setProducts(response.data);
      }
      catch (err) {
        console.error(err);
      }
      finally {
        setLoading(false); // Set loading state false after fetching is done
      }
    }
    getProductsList()
  }, []);
  if (loading) {
    return <div><Loading/> </div>
  }



  // const addnewProducts = () => {
  //   const api = 'https://fakestoreapi.com/products'
  //   axios.post(api, {
  //     title: 'test product',
  //     price: 13.5,
  //     description: 'lorem ipsum set',
  //     image: 'https://i.pravatar.cc',
  //     category: 'electronic'
  //   })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }
  return (


    <div>
      {/* <button onClick={getProductsList} className='rounded p-2 bg-sky-400 text-white'>get the api</button> */}

      <br /><br />
      {/* <button onClick={addnewProducts} className=' rounded p-2 bg-red-400 text-white'>add the product in api api</button> */}
      <br /><br />
      <hr />

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-lg transition-all hover:shadow-2xl"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 object-cover rounded-t-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{product.category}</p>
            <p className="text-gray-700 text-sm mb-4">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold text-sky-500">${product.price}</span>
              <button className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Show