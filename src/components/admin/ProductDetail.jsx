import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import myContext from "../../context/myContext";
import Loader from "../loader/Loader";
import { deleteDoc, doc } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfig";
import toast from "react-hot-toast";

const ProductDetail = () => {
    const context = useContext(myContext);
    const { loading, setLoading, getAllProduct, getAllProductFunction } = context;

    const navigate = useNavigate();

    // Fetch products on component mount
    useEffect(() => {
        getAllProductFunction();
    }, []);

    // Delete product 
    const deleteProduct = async (id) => {
        setLoading(true);
        try {
            await deleteDoc(doc(fireDB, 'products', id));
            toast.success('Product Deleted successfully');
            getAllProductFunction();
        } catch (error) {
            toast.error('Failed to delete product');
            console.error("Error deleting product: ", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="py-5 flex justify-between items-center">
                <h1 className=" text-xl text-blue-300 font-bold">All Products</h1>
                <Link to={'/addproduct'}>
                    <button className="px-5 py-2 bg-blue-50 border border-blue-100 rounded-lg">Add Product</button>
                </Link>
            </div>

            <div className="flex justify-center relative top-20">
                {loading && <Loader />}
            </div>

            <div className="w-full overflow-x-auto mb-5">
                <table className="w-full text-left border border-collapse sm:border-separate border-blue-100 text-blue-400">
                    <thead>
                        <tr>
                            <th className="h-12 px-6 text-md border-l first:border-l-0 border-blue-100 text-slate-700 bg-slate-100 font-bold">S.No.</th>
                            <th className="h-12 px-6 text-md border-l first:border-l-0 border-blue-100 text-slate-700 bg-slate-100 font-bold">Image</th>
                            <th className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-blue-100 text-slate-700 bg-slate-100">Title</th>
                            <th className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-blue-100 text-slate-700 bg-slate-100">Price</th>
                            <th className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-blue-100 text-slate-700 bg-slate-100">Category</th>
                            <th className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-blue-100 text-slate-700 bg-slate-100">Date</th>
                            <th className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-blue-100 text-slate-700 bg-slate-100">Action</th>
                            <th className="h-12 px-6 text-md font-bold border-l first:border-l-0 border-blue-100 text-slate-700 bg-slate-100">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getAllProduct.length > 0 ? getAllProduct.map((item, index) => {
                            const { id, title, price, category, date, productImageUrl } = item;

                            // Ensure all fields are filled
                            if (!id || !title || !price || !category || !date || !productImageUrl) {
                                return null;
                            }

                            return (
                                <tr key={id} className="text-blue-300">
                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-100 stroke-slate-500 text-slate-500">
                                        {index + 1}.
                                    </td>
                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-100 stroke-slate-500 text-slate-500">
                                        <div className="flex justify-center">
                                            <img className="w-20" src={productImageUrl} alt={title} />
                                        </div>
                                    </td>
                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                                        {title}
                                    </td>
                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                                        {price} L.E
                                    </td>
                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                                        {category}
                                    </td>
                                    <td className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-100 stroke-slate-500 text-slate-500 first-letter:uppercase">
                                        {date}
                                    </td>
                                    <td onClick={() => navigate(`/updateproduct/${id}`)} className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-100 stroke-slate-500 text-green-500 cursor-pointer">
                                        Edit
                                    </td>
                                    <td onClick={() => deleteProduct(id)} className="h-12 px-6 text-md transition duration-300 border-t border-l first:border-l-0 border-blue-100 stroke-slate-500 text-red-500 cursor-pointer">
                                        Delete
                                    </td>
                                </tr>
                            );
                        }) : (
                            <tr>
                                <td colSpan="8" className="h-12 px-6 text-md border-t border-l first:border-l-0 border-blue-100 text-slate-500 text-center">
                                    No products available.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProductDetail;
