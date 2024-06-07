/* eslint-disable react/prop-types */
export function Respond({ value}) {
  if (value) {
    return (
      <div className="flex items-center justify-end gap-2 ">
        <img src="src/images/icon-reply.svg" alt="Reply " />
        <h3 className="font-bold text-lg text-blue-800">Reply</h3>
      </div>
    );
  } else {
    return (
      <div className="flex items-center justify-end gap-4 ">
        <div className="flex items-center justify-end gap-2 ">
          <img src="src/images/icon-delete.svg" alt="Reply " />
          <h3 className="font-bold text-lg text-red-400">Delete</h3>
        </div>
        <div className="flex items-center justify-end gap-2 ">
          <img src="src/images/icon-edit.svg" alt="Reply " />
          <h3 className="font-bold text-lg text-blue-800">Edit</h3>
        </div>
      </div>
    );
  }
}
