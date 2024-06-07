export function Current(){
    return (
        <div className="m-5 bg-white  rounded-lg p-5 absolute w-[95vw]">
            <textarea type="text " className="text-lg text-gray-400 font-medium border p-5 pt-3 w-[100%] h-28 rounded-lg mb-4 " placeholder="Add a comment..."/>
            <div className="flex text-center items-center justify-between gap-4 mb-4">
                <img className="w-10" src="src/images/avatars/image-juliusomo.png" alt="profile" />
                <button className="bg-blue-800 text-white p-3 w-[100px] rounded-lg uppercase font-medium">Send</button>
            </div>
        </div>
    )
}