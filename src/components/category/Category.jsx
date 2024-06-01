import { useNavigate } from "react-router";

// category 
const category = [
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/modernelcctroincs.appspot.com/o/arduino.png?alt=media&token=a428b1dc-d5e0-4cae-9ce6-8ba88635453f',
        name: 'arduino'
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/modernelcctroincs.appspot.com/o/boards.png?alt=media&token=447b2126-d5e2-4cfb-a3be-fdf88928f767',
        name: 'boards'
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/modernelcctroincs.appspot.com/o/capacitor.png?alt=media&token=93fef134-7740-4625-9edc-ca6bfb69ebcf',
        name: 'capacitor'
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/modernelcctroincs.appspot.com/o/ic.png?alt=media&token=6865addc-cf11-4863-b55a-1b9e18dc92da',
        name: 'IC'
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/modernelcctroincs.appspot.com/o/microcontrollers.png?alt=media&token=96f518db-3a68-4afa-8e91-e62ae8603e89',
        name: 'microcontrollers'
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/modernelcctroincs.appspot.com/o/Multimeter.png?alt=media&token=2a5e4c0a-65fe-467b-a1b8-e1e8ecd59d0d',
        name: 'Multimeter'
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/modernelcctroincs.appspot.com/o/rasbperry%20pi.png?alt=media&token=e385e9a8-55f5-4337-b501-cde4002cdf7d',
        name: 'rasbperry pi'
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/modernelcctroincs.appspot.com/o/Resistance_indutance.png?alt=media&token=7d3958e6-ec55-472c-a912-a334205cd905',
        name: 'Resistance/indutance'
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/modernelcctroincs.appspot.com/o/tools.png?alt=media&token=d5d71ab3-bece-4892-9e1d-0eec7515879e',
        name: 'tools'
    },
    {
        image: 'https://firebasestorage.googleapis.com/v0/b/modernelcctroincs.appspot.com/o/transitors.png?alt=media&token=15188a13-ba98-4f95-aa0f-f432f41b0e75',
        name: 'transitors'
    },
]

// const Category = () => {
//     // naviaget 
//     const navigate = useNavigate();
//     return (
//         <div>
//             <div className="flex flex-col mt-5">
//                 {/* main 1 */}
//                 <div className="flex overflow-x-scroll lg:justify-center  hide-scroll-bar">
//                     {/* main 2  */}
//                     <div className="flex ">
//                         {/* category  */}
//                         {category.map((item, index) => {
//                             return (
//                                 <div key={index} className="px-3 lg:px-10">
//                                     {/* Image  */}
//                                     <div onClick={() => navigate(`/category/${item.name}`)} className=" w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full  bg-blue-500 transition-all hover:bg-blue-400 cursor-pointer mb-1 " >
//                                         <div className="flex justify-center mb-12">
//                                             {/* Image tag  */}
//                                             <img src={item.image} alt="img" />
//                                         </div>
//                                     </div>

//                                     {/* Name Text  */}
//                                     <h1 className=' text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase '>{item.name}</h1>
//                                 </div>
//                             )
//                         })}
//                     </div>
//                 </div>
//             </div>

//             {/* style  */}
//             <style dangerouslySetInnerHTML={{ __html: "\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n" }} />
//         </div>
//     );
// }

const Category = () => {
    const navigate = useNavigate();

    return (
        <div className="overflow-x-auto">
            <div className="flex mt-5">
                {category.map((item, index) => (
                    <div key={index} className="px-3 lg:px-10">
                        <div
                            onClick={() => navigate(`/category/${item.name}`)}
                            className="w-16 h-16 lg:w-24 lg:h-24 max-w-xs rounded-full bg-blue-500 transition-all hover:bg-blue-400 cursor-pointer mb-1"
                        >
                            <div className="flex justify-center mb-12">
                                <img src={item.image} alt="Category" />
                            </div>
                        </div>
                        <h1 className="text-sm lg:text-lg text-center font-medium title-font first-letter:uppercase">
                            {item.name}
                        </h1>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Category;

