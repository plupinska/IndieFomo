```js
// session slice
{
  session: {
    currentUser: {
      id: 1,
      username: 'patrycja'
    },
    errors: []
  }
}


{
  currentUser: {
    id: 1,
    fname: 'p'
    lname: 'l',
    username: 'pl'
    Mycampaigns: {
        1: {
         owner: {username, name},
         title: "Taco Stand",
         description: "Veggie Tacos",
         tagline: "Taco your soul",
         category: "Food",
         image: 'url',
         time_left: '5',
         target_amount: '10000000',
         contributions: '4',
         reward: {
           id: {
             title: title,
             description: description,
             image_url: url,
             price: price
           }
         }
       }
    }
  },

  forms: {
    signup: {errors: []},
    login: {errors: []},
    createCampaign: {errors: []}
    addReward: {errors: []}
  },

  campaigns: {
    id: {
        owner: {username, name},
          title: "Taco Stand",
          description: "Veggie Tacos",
          tagline: "Taco your soul",
          category: "Food",
          image: 'url',
          time_left: '5',
          target_amount: '10000000',
          contributions: '4',
          rewards: {
            id: {
              title: title,
              description: description,
              image_url: url,
              price: price
            }
         }
    }  
  }




}





```
