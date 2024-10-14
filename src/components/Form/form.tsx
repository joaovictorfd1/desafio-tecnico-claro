import { useState } from 'react';
import { countriesOptions } from '../../constants';
import './style.scss';

interface IForm {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export const Form = ({
  onSubmit
}: IForm) => {
  const [phone, setPhone] = useState<string>('');

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let value = e.target.value.replace(/\D/g, '');

    if (value.length > 11) value = value.slice(0, 11);

    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");

    setPhone(value);
  };
  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className='mt-2 mb-4'>
          <h2 className="orderText">Order Information</h2>
        </div>
        <div className="d-flex flex-column gap-2">
          <div className='row'>
            <div className='col-sm-12 col-md-6'>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input type="text" id="name" name='name' placeholder="First" required />
              </div>
            </div>
            <div className='col-sm-12 col-md-6'>
              <div className='form-group'>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name='lastName' placeholder="Last" required />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12 col-md-6'>
              <div className="form-group">
                <label htmlFor="deliveryDate">Delivery Date</label>
                <input type="date" id="deliveryDate" name='deliveryDate' placeholder="MM/DD/YYYY" min={new Date().toISOString().split('T')[0]} />
              </div>
            </div>
            <div className='col-sm-12 col-md-6'>
              <div className="form-group">
                <label htmlFor="deliveryTime">Preferred delivery time</label>
                <input type="time" id="deliveryTime" name='deliveryTime' placeholder="HH:MM AM" />
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12 col-md-6'>
              <div className="form-group">
                <label htmlFor="phone">Phone *</label>
                <input type="text" id="phone" name='phone' placeholder="(99) 99999-9999" required onChange={handlePhoneChange} value={phone} />
              </div>
            </div>
            <div className='col-sm-12 col-md-6'>
              <div className="form-group text-left">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name='email' required />
              </div>
            </div>
          </div>
          <div>
            <div className='row'>
              <div className='col-md-12 col-sm-12'>
                <div className="form-group">
                  <label htmlFor="address">Address *</label>
                  <input type="text" id="address" name='address' placeholder="Street Address" />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-12 col-sm-12'>
                <div className="form-group">
                  <input type="text" id="addressLine" name='addressLine' placeholder="Street Address Line 2" />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6 col-sm-12'>
                <div className="form-group">
                  <input type="text" id="city" name='city' placeholder="City" />
                </div>
              </div>
              <div className='col-md-6 col-sm-12'>
                <div className="form-group">
                  <input type="text" id="region" name='region' placeholder="Region" />
                </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-md-6 col-sm-12'>
                <div className="form-group">
                  <input type="text" id="postal" name='postal' placeholder="Postal / Zip code" />
                </div>
              </div>
              <div className='col-md-6 col-sm-12'>
                <div className="form-group">
                  <select id='country' name='country'>
                    {countriesOptions.map(coutries => (
                      <option value={coutries.codigo} key={coutries.sigla2}>{coutries.nome}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="btn buttonOrder mt-3">Order</button>
      </form>
    </div>
  );
};