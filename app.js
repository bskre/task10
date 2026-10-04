const getDisplayName = (user) => {
    return `${user.firstName} ${user.lastName}`
} 

const getLocation = (user) => {
    return `${user.address.city}, ${user.address.country}`
}

const getContactSummary = (user) => ({
    email: user.email,
    phone: user.phone
})

const isAccountActive = (user) =>{
    return user.account.status == 'active'
}

const createProfileSummary = (user) => ({
    DisplayName: getDisplayName(user),
    location: getLocation(user), 
    contact: getContactSummary(user),
    active: isAccountActive
})

const user = {
  id: 42,
  firstName: 'Ava',
  lastName: 'Stone',
  email: 'ava@example.com',
  phone: null,
  address: {
    city: 'London',
    country: 'UK',
  },
  account: {
    status: 'active',
    plan: 'pro',
  },
};

console.log(createProfileSummary(user));
console.log(getDisplayName(user));
console.log(isAccountActive(user));
console.log(getContactSummary(user));