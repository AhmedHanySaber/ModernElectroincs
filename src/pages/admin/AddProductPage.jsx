import { Timestamp, addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import myContext from "../../context/myContext";
import toast from "react-hot-toast";
import { fireDB } from "../../firebase/FirebaseConfig";
import { useNavigate } from "react-router";
import Loader from "../../components/loader/Loader";

const categoryList = [
    { name: 'arduino' },
    { name: 'boards' },
    { name: 'capacitor' },
    { name: 'IC' },
    { name: 'microcontrollers' },
    { name: 'Multimeter' },
    { name: 'rasbperry pi' },
    { name: 'Resistance-indutance' },
    { name: 'tools' },
    { name: 'transitors' },
];

const AddProductPage = () => {
    const context = useContext(myContext);
    const { loading, setLoading } = context;

    const navigate = useNavigate();

    const [product, setProduct] = useState({
        title: "",
        price: "",
        productImageUrl: "",
        category: "",
        description: "",
        quantity: 1,
        time: Timestamp.now(),
        date: new Date().toLocaleString(
            "en-US",
            {
                month: "short",
                day: "2-digit",
                year: "numeric",
            }
        )
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const addProductFunction = async () => {
        const { title, price, productImageUrl, category, description } = product;
        if (!title || !price || !productImageUrl || !category || !description) {
            return toast.error("All fields are required");
        }

        setLoading(true);
        try {
            const productRef = collection(fireDB, 'products');
            await addDoc(productRef, product);
            toast.success("Product added successfully");
            navigate('/admin-dashboard');
        } catch (error) {
            console.error("Error adding product: ", error);
            toast.error("Failed to add product");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                {loading && <Loader />}
                <div className="login_Form bg-blue-50 px-8 py-6 border border-blue-100 rounded-xl shadow-md">
                    <div className="mb-5">
                        <h2 className='text-center text-2xl font-bold text-blue-500 '>
                            Add Product
                        </h2>
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="title"
                            value={product.title}
                            onChange={handleInputChange}
                            placeholder='Product Title'
                            className='bg-blue-50 border text-blue-300 border-blue-200 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-300'
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="number"
                            name="price"
                            value={product.price}
                            onChange={handleInputChange}
                            placeholder='Product Price'
                            className='bg-blue-50 border text-blue-300 border-blue-200 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-300'
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="text"
                            name="productImageUrl"
                            value={product.productImageUrl}
                            onChange={handleInputChange}
                            placeholder='Product Image Url'
                            className='bg-blue-50 border text-blue-300 border-blue-200 px-2 py-2 w-96 rounded-md outline-none placeholder-blue-300'
                        />
                    </div>
                    <div className="mb-3">
                        <select
                            name="category"
                            value={product.category}
                            onChange={handleInputChange}
                            className="w-full px-1 py-2 text-blue-300 bg-blue-50 border border-blue-200 rounded-md outline-none"
                        >
                            <option value="" disabled selected>Select Product Category</option>
                            {categoryList.map((value, index) => (
                                <option key={index} value={value.name}>{value.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <textarea
                            name="description"
                            value={product.description}
                            onChange={handleInputChange}
                            placeholder="Product Description"
                            rows="5"
                            className="w-full px-2 py-1 text-blue-300 bg-blue-50 border border-blue-200 rounded-md outline-none placeholder-blue-300"
                        />
                    </div>
                    <div className="mb-3">
                        <button
                            onClick={addProductFunction}
                            type='button'
                            className='bg-blue-500 hover:bg-blue-600 w-full text-white text-center py-2 font-bold rounded-md '
                        >
                            Add Product
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProductPage;
