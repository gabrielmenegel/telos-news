
import "./styles.css"
import user from './user.jpg'

export function Comment() {
  return (
    <>
      <div className="commentGlobal" >
        <h1>Comentários</h1>
        <div style={{border: "1px solid rgba(0, 0, 0, 0.07)", borderRadius: "18px", padding: "0.5rem"}}>
          <div className="comment">
            <h2>9387 comentários</h2>
            <div className="text">
              <h2>Classificar por </h2>
              <h3 style={{ background: "#D3CBC6", padding: "0.1rem 1rem", borderRadius: "5px" }}>Principais <span>&uarr;</span></h3>
            </div>
          </div>
          <div className="user">
            <img src={user} alt="" />
            <textarea style={{ width: "400px", height: "100px" }} name="text" id="" cols="30" rows="10"></textarea>
          </div>
        </div>
        <div style={{ textAlign: "center", }}>
          <h5 style={{ background: "#3b5998", padding: "1rem", color: "white", borderRadius: "8px" }}>Carregar mais 10 comentários</h5>
        </div>
      </div>
    </>
  )
}