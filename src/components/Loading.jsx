import loader from "/loader.gif"

const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#1F1E24]">
        <img className="h-20 w-20 " src={loader} alt="" />
    </div>
  )
}

export default Loading