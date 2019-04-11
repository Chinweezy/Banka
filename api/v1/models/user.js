const users = [
  {
    id: 1,
    email: 'lee.cooper@bazinga.net',
    firstName: 'Sheldon',
    lastName: 'Cooper',
    password: 'Welcome@2019',
    type: 'staff', // client or staff
    isAdmin: true, // must be a staff user account
  },
  {
    id: 2,
    email: 'sheldons-best-friend@gmail.com',
    firstName: 'Leonard',
    lastName: 'Hofstadter',
    password: 'Welcome@2019',
    type: 'client', // client or staff
    isAdmin: false, // must be a staff user account
  },
  {
    id: 3,
    email: 'highfunctioningsociopath@genius.com',
    firstName: 'Sherlock',
    lastName: 'Holmes',
    password: 'Welcome@2019',
    type: 'staff', // client or staff
    isAdmin: true, // must be a staff user account
  },
  {
    id: 4,
    email: 'spock@startrek.francise',
    firstName: 'Leonard',
    lastName: 'Nimoy',
    password: 'Welcome@2019',
    type: 'client', // client or staff
    isAdmin: true, // must be a staff user account
  },
  {
    id: 5,
    email: 'jmoriaty@smart.com',
    firstName: 'Jim',
    lastName: 'Moriarty',
    password: 'Welcome@2019',
    type: 'client', // client or staff
    isAdmin: false, // must be a staff user account
  },
];
export default users;
