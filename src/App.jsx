import { useContext } from 'react';
import Card from './components/Card';
import BreadCrumb from './components/BreadCrumb';
import Container from './components/Container';
import { ContextApi } from './ContextApi/Context';
import { formatDate } from './components/Date';


const App = () => {
  const { products } = useContext(ContextApi);
  // console.log(products);

  return (
    <>
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
        <div className='flex flex-wrap justify-between'>
          {
            products.map((items) => {
              return <Card
                key={items.id}
                product={items} />
            })
          }
        </div>
      </Container>
    </>
  )
}

export default App;
