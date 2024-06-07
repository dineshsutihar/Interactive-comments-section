import { Raiting } from "./Raiting";
import { Respond } from "./Respond";

export function Comment() {
  return (
    <>
      <div className="m-5 bg-white  rounded-lg p-5">
        <div className="flex items-center gap-4 mb-4">
          <img
            className="w-10"
            src="src\images\avatars\image-amyrobson.png"
            alt="amyrobson"
          />
          <h2 className="font-bold text-lg">amyrobson</h2>
          <h3 className="font-medium bg-blue-800 text-white pl-3 pr-3 text-sm pb-1 pt-0 rounded-md text-lg">you</h3>
          <p className="text-lg text-gray-400 font-medium">1 month ago</p>
        </div>

        <p className="text-lg text-gray-400 font-medium">
          Impressive! Though it seems the drag feature could be improved. But
          overall it looks incredible. You&rsquo;ve nailed the design and the
          responsiveness at various breakpoints works really well.
        </p>
        <div className="mt-4 flex justify-between">
          <Raiting val={12} />
          <Respond value={true} />
        </div>
      </div>
    </>
  );
}
