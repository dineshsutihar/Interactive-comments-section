/* eslint-disable react/prop-types */

export function Raiting({val}) {
  return (
    <>
    <button className="bg-gray-100 flex rounded-lg items-center justify-around h-9 w-28 p-1 ">
        <img src="src/images/icon-plus.svg" alt="plus"  className="cursor-pointer"/>
        <h3 className="font-bold text-lg  text-blue-800">{val}</h3>
        <img src="src/images/icon-minus.svg" className="cursor-pointer" alt="minus" />
    </button>
    </>
  )
}