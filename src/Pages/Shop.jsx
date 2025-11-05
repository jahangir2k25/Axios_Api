import { useEffect, useState } from 'react';
import Container from '../components/Container';
import BreadCrumb from '../components/BreadCrumb';
import Card from '../components/Card';
import axios from 'axios';
import Skeleton from '../components/Skeleton';
import { formatDate } from '../components/Date';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);


  async function getAllProducts() {
    let data = await axios.get('https://dummyjson.com/products')
    setProducts(data.data.products);
    setLoading(false);
  }

  useEffect(() => {
    // fetch('https://dummyjson.com/products')
    //   .then(res => res.json())
    //   .then((data) => setProducts(data.products));

    getAllProducts();

  }, [])

  // console.log(products);

  return (
    <>
      <section>
        <Container>
          <div className='flex justify-between'>
            <BreadCrumb />
            <span className='mt-5'>
              আজকের তারিখ:
              {
                formatDate(new Date().toISOString(), 'bn-BD')
              }
            </span>
          </div>

          <div>
            <p className='text-center text-5xl font-bold'>"Where Confidence Begins with a Glow."</p>
            <div className='flex flex-wrap justify-between'>
              {
                loading ?
                  Array.from({ length: 3 }).map((_, index) => <Skeleton key={index} />)
                  :
                  products.map((items) => {
                    return <Card
                      key={items.id}
                      product={items}/>
                  })
              }
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Shop;
