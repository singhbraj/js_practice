let a = [1,2,3,4];

// const reducer = (a,c) => a+c;

let res = a.reduce((a,c)=>{
    return a+c
})

console.log(res)

     //  setCouponCode(item.coupon_code)
      //  setCouponType(item.coupon_type)
      //  setCouponValue(item.coupon_value)
      //  setMinAmount(item.min_amount)
      //  setMaxAmount(item.max_coupon_value)
      //  setUsageLimit(item.usage_limit)
      //  setUsePerAccount(item.use_per_account)
      //  setCouponFor(item.coupons_for)
      //  setNewUser(item.new_user_coupon)
      // let fromDate = moment(item.applicable_from).format("ll")
      // let toDate = moment(item.applicable_to).format("ll")
      // setStartFromDate(fromDate)
      // setStartToDate(toDate)
      // setCashbackType(item.cashback_type)