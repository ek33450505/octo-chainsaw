

export default function CategoryMenu() {
    //future: will query our database for the categories
    const categories = ['Outdoor Gear', 'Tools', 'Sports Equipment', 'Tech', 'Motorized Vehicles', 'Instruments', 'For Kids'];

    return (
        <div>
        <h2>Categories</h2>
        {categories.map((item) => (
            <button>
                {item}
            </button>
        ))}
        </div>
    )
}