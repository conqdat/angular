import { Address, Company, Geo, User } from '../models/user.model';

export function createNewUser(): User {
  const newGeo: Geo = {
    lat: '',
    lng: '',
  };

  const newAddress: Address = {
    street: 'HCM',
    suite: '',
    city: 'HCM',
    zipcode: '101029102',
    geo: newGeo,
  };

  const newCompany: Company = {
    name: 'HVN',
    catchPhrase: '',
    bs: '',
  };

  const newUser: User = {
    id: 0, // Default id, usually the backend generates this
    name: 'Cong Dat',
    username: 'congdat',
    email: '',
    address: newAddress,
    phone: '',
    website: '',
    company: newCompany,
  };

  return newUser;
}
