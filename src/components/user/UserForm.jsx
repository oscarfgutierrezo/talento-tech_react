export const UserForm = ({ user, handleSubmit }) => {
  return (
    <div className="max-w-md w-full mx-auto px-5 py-5">
      <form
        onSubmit={handleSubmit}
        className="shadow-md rounded pt-6 pb-10 mb-4 px-10"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Identification
          </label>
          <input
            disabled
            type="text"
            required
            name="id"
            placeholder="Identification"
            className="shadow appearance-none border rounded w-full focus:shadow-outline"
            value={user?._id}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Name</label>
          <input
            type="text"
            required
            name="name"
            placeholder="Name"
            className="shadow appearance-none border rounded w-full focus:shadow-outline"
            value={user?.name}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Lastname</label>
          <input
            type="text"
            required
            name="lastname"
            placeholder="Lastname"
            className="shadow appearance-none border rounded w-full focus:shadow-outline"
            value={user?.lastname}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Email</label>
          <input
            type="email"
            required
            name="email"
            placeholder="Email"
            className="shadow appearance-none border rounded w-full focus:shadow-outline"
            value={user?.email}
          />
        </div>
        {!user && (
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              required
              name="password"
              placeholder="Password"
              className="shadow appearance-none border rounded w-full focus:shadow-outline"
            />
          </div>
        )}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 rounded text-blue-50 font-bold py-2 px-4"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
