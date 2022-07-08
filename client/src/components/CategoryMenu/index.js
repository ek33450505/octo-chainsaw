
const axios = require('axios').default;


export default function CategoryMenu() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
      }, []);

    const fetchCategories = await axios({
        method: 'get',
        url: '/api/category'
        
      })
      .then(function (response) {
        console.log(response.data);
        setCategories(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    

    return (
        <div>
        <h2>Categories</h2>
        {/* {categories.map((item) => (
            <button>
                {item.name}
            </button>
        ))} */}
        </div>
    )
}