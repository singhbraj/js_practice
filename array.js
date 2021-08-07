let a = [1,2,3,4]
let b = a.filter((item)=>{
   return item!=2
})

console.log(b)


export function updateCouponDetail(data) {
   let apiToken = JSON.parse(localStorage.getItem(Constants.USER_DATA)).token;
   let loginApi=Constants.MARKETING + '/' + TYPE.UPDATE_COUPONS
   const request = axios
     .post(loginApi, data, {
       headers: { Authorization: `Bearer ${apiToken}` }
     })
     .then(response => response.data);
 
   return {
     type: TYPE.UPDATE_COUPONS,
     payload: request
   };
 }
 dispatch(updateCouponDetail(data))
 .then((response) => {
   console.log("resposen for update isactive", response)
 })
 .catch((error) => {});

