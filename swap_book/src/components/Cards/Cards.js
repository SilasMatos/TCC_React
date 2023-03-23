import '../Cards/cardsStyle.css'
function Cards() {
  return (
    <div className="cards container">
      <div className="card">
        <img
          src="https://m.media-amazon.com/images/P/B00S8JNR50.01._SCLZZZZZZZ_SX500_.jpg"
          alt="Denim Jeans"
        ></img>
        <h1>Tailored Jeans</h1>
        <p className="price">$19.99</p>
        <p>Some text about the jeans..</p>
        <p>
          <button>Add to Cart</button>
        </p>
      </div>
      <div className="card">
        <img
          src="https://m.media-amazon.com/images/P/B00S8JNR50.01._SCLZZZZZZZ_SX500_.jpg"
          alt="Denim Jeans"
        ></img>
        <h1>Tailored Jeans</h1>
        <p className="price">$19.99</p>
        <p>Some text about the jeans..</p>
        <p>
          <button>Add to Cart</button>
        </p>
      </div>
      <div className="card">
        <img
          src="https://m.media-amazon.com/images/P/B00S8JNR50.01._SCLZZZZZZZ_SX500_.jpg"
          alt="Denim Jeans"
        ></img>
        <h1>Tailored Jeans</h1>
        <p className="price">$19.99</p>
        <p>Some text about the jeans..</p>
        <p>
          <button>Add to Cart</button>
        </p>
      </div>
    </div>
  )
}
export default Cards
