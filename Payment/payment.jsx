// import React,{useState} from 'react';

// function Payment() {
//     const [amount,setamount]=useState('')
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         if(amount === ""){
//             alert("please enter amount")
//         }
//         else{
//             var options={
//                 key: "",
//                 key_secret:"",
//                 amount: amount *100,
//                 currency:"INR",
//                 name:"STARTUP_PROJECTS",
//                 description:"for testing purpose",
//                 handler: function(response){
//                     alert(response.razorpay_payment_id);
//                 },
//                 prefill:{
//                     name:"Lavanya",
//                     email:"lavanyak0904@gmail.com",
//                     contact:"7842760256"
//                 },
//                 notes:
//                 {
//                     address:"Razorpay Corporate office"
//                 },
//                 theme:
//                 {
//                     color:"#3399cc"
//                 }
//             };
//             var pay= new window.Razorpay(options);
//             pay.open();
//         }
//     }
//   return (
//     <div>
//       <h2>Payment</h2>
//       <br/>
//       <input type="text"  placeholder='Enter Amount' value={amount} onChnage={(e)=>setamount(e.target.value)} />
//       <br/><br/>
//       <button onClick={handleSubmit}>submit</button>
//     </div>
//   )
// }

// export default Payment
