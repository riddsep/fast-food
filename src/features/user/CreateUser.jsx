import { useState } from "react";

function CreateUser() {
  const [username, setUsername] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-stone-600">
        👋 Welcome! Please start by telling us your name:
      </p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-5 w-72 rounded-lg p-2 focus:outline focus:outline-2 focus:outline-yellow-500"
      />

      {username !== "" && (
        <div>
          <button className="rounded-lg bg-yellow-500 px-4 py-2">
            Start ordering
          </button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
