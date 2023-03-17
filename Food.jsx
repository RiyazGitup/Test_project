import './Food.css';
import biriyani from '../Food/ChickenBiryani.jpg';
export default function Food() {
// let name=" Chicken Biryani!";
// let price="$10";
let address="Thalapakatti Biriyani!  Chennai ";
let foodDetails=[{foodId:1,foodName:'Biryani',cost:'$10',image:biriyani},
{foodId:2,foodName:'FriedRice',cost:'$10',image:biriyani},{foodId:2,foodName:'Mandhi',cost:'$10',image:biriyani}
]


    return (

        <div className='box'>
            {foodDetails.map(f=>{
return(
    <div className='menu-item'>
    <div key={f.foodId}>
<h1 id='nme'>{f.foodName}</h1>
<img src={f.image} alt={f.foodId} width='100'/>
<h2 id='prc'>cost:{f.cost}</h2>
<button id='order'>Order Now!</button>

</div>
</div>
)})}

<p id='add'>{address}</p>
{/* {address.map(add=>{
return(
<p key={add.id}>{address}</p>
)
}
)
} */}
</div>



    )
}