import { useState } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { CakeSelector } from './components/CakeSelector';
import { imagesCakes } from './constants';
import { Form } from './components/Form/form';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

interface IData {
  name: string;
  lastName: string;
  delivery_date: string;
  delivery_time?: string;
  email: string;
  address?: string;
  addressLine?: string;
  city?: string;
  region?: string;
  postal?: string;
  country: string;
  cake: string
}


function App() {
  const [selectedCake, setSelectedCake] = useState<string>('');

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if(selectedCake === '') {
      return toast.error('Selecione um tipo de bolo')
    }

    const formData = new FormData(event.currentTarget);
    const data: IData = {
      name: formData.get('name') as string,
      lastName: formData.get('lastName') as string,
      delivery_date: formData.get('deliveryDate') as string,
      delivery_time: formData.get('deliveryTime') as string,
      email: formData.get('email') as string,
      address: formData.get('address') as string,
      addressLine: formData.get('addressLine') as string,
      city: formData.get('city') as string,
      region: formData.get('region') as string,
      postal: formData.get('postal') as string,
      country: formData.get('country') as string,
      cake: selectedCake
    };

    const response = await fetch(' https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({data}),
    })
      .then(response => response.json())
      .then(data => {
        return {
          data,
          statusCode: 200,
        }
      })
      .catch(error => {
        return {
          error,
          statusCode: 400,
        }
      });

    if (response.statusCode === 200) {
      toast.success('Pedido realizado com sucesso')
    } else {
      toast.error('Aconteceu algo de errado com seu pedido')
    }
  };

  return (
    <div className='container d-flex flex-column gap-3'>
      <Header title='Cake Order Form' subtitle='Order your freshly baked cakes made using only the finest quality natural ingredients.' />
      <CakeSelector headerText='Please choose your favorite cake from among the following: ' images={imagesCakes} selectedCake={selectedCake} setSelectedCake={setSelectedCake} />
      <Form onSubmit={onSubmit} />
    </div>
  );
}

export default App;
