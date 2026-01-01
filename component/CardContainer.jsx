
const CardContainer = ({children, className}) => {
  return (
    <div className={`${className} w-full h-fit bg-[#252728] py-5 px-4 rounded-lg`}>
      {children}
    </div>
  )
}

export default CardContainer