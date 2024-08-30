import img from "../assets/room.png"
const AuthBg = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl font-serif pb-10 pt-11 pl-10">Welcome to <span className="text-yellow-400">Room <br /> Rental</span> System.</h1>
      <p className="pl-10">Rent smarter with tailored spaces that suit your lifestyle.
Live better in a home that truly feels like yours.
</p>
<img src={img} alt="" className="mt-16"/>
    </div>
  )
}

export default AuthBg;
